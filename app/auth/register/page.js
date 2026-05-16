'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout/AuthLayout';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { registerUser } from '@/lib/auth';
import { saveSession } from '@/lib/session';
import styles from '../auth-shared.module.css';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (generalError) setGeneralError('');
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    setGeneralError('');
    
    try {
      const result = await registerUser(formData.name, formData.email, formData.password);
      
      if (result.success) {
        // Add username to user object
        const userWithUsername = {
          ...result.user,
          username: formData.username,
        };
        saveSession(userWithUsername, result.token);
        router.push('/chat');
      } else {
        setGeneralError(result.error);
      }
    } catch (error) {
      setGeneralError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    setGeneralError('');
    
    try {
      // Mock Google OAuth - Replace with real implementation later
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful Google sign up
      const mockGoogleUser = {
        id: 'google-' + Date.now(),
        name: 'Google User',
        email: 'newuser@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=Google+User&background=4361ee&color=fff',
        username: 'googleuser' + Math.floor(Math.random() * 1000),
      };
      
      saveSession(mockGoogleUser, 'mock-google-token');
      router.push('/chat');
    } catch (error) {
      setGeneralError('Google sign up failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Join Xavryn today"
    >
      <div className={styles.container}>
        {generalError && (
          <div className={styles.generalError}>
            {generalError}
          </div>
        )}

        {/* Google Sign Up Button */}
        <button 
          type="button"
          className={styles.googleButton}
          onClick={handleGoogleSignUp}
          disabled={googleLoading || loading}
        >
          {googleLoading ? (
            <span className={styles.googleLoader}></span>
          ) : (
            <>
              <svg className={styles.googleIcon} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </>
          )}
        </button>

        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerText}>or</span>
          <span className={styles.dividerLine}></span>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            error={errors.name}
            required
          />

          <Input
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="johndoe"
            error={errors.username}
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            error={errors.email}
            required
          />
          
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 6 characters"
            error={errors.password}
            required
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            error={errors.confirmPassword}
            required
          />

          <p className={styles.terms}>
            {"By signing up, you agree to our "}
            <span className={styles.link}>Terms of Service</span>
            {" and "}
            <span className={styles.link}>Privacy Policy</span>
          </p>
          
          <Button 
            type="submit" 
            fullWidth 
            loading={loading}
            disabled={googleLoading}
          >
            Create Account
          </Button>
        </form>
        
        <p className={styles.footer}>
          {"Already have an account? "}
          <Link href="/auth/login" className={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}