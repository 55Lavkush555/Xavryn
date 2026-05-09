'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout/AuthLayout';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { loginUser } from '@/lib/auth';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    setGeneralError('');
    
    try {
      const result = await loginUser(formData.email, formData.password);
      
      if (result.success) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        router.push('/');
      } else {
        setGeneralError(result.error);
      }
    } catch (error) {
      setGeneralError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setGeneralError('');
    
    try {
      // Mock Google OAuth - Replace with real implementation later
      // In production, this would redirect to Google's OAuth endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful Google login
      const mockGoogleUser = {
        id: 'google-123',
        name: 'Google User',
        email: 'user@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=Google+User&background=4361ee&color=fff',
        username: 'googleuser',
      };
      
      localStorage.setItem('token', 'mock-google-token');
      localStorage.setItem('user', JSON.stringify(mockGoogleUser));
      router.push('/');
    } catch (error) {
      setGeneralError('Google sign in failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Sign in to your Xavryn account"
    >
      <div className={styles.container}>
        {generalError && (
          <div className={styles.generalError}>
            {generalError}
          </div>
        )}

        {/* Google Sign In Button */}
        <button 
          type="button"
          className={styles.googleButton}
          onClick={handleGoogleLogin}
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

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
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
            placeholder="Enter your password"
            error={errors.password}
            required
          />
          
          <div className={styles.forgotPassword}>
            <Link href="/auth/forgot-password" className={styles.link}>
              Forgot password?
            </Link>
          </div>
          
          <Button 
            type="submit" 
            fullWidth 
            loading={loading}
            disabled={googleLoading}
          >
            Sign In
          </Button>
        </form>
        
        <p className={styles.footer}>
          {"Don't have an account? "}
          <Link href="/auth/register" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}