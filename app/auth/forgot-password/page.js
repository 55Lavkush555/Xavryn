'use client';

import { useState } from 'react';
import Link from 'next/link';

import AuthLayout from '@/components/AuthLayout/AuthLayout';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { forgotPassword } from '@/lib/auth';

import styles from './forgot-password.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email');
      return;
    }

    setLoading(true);

    try {
      const result = await forgotPassword(email);
      if (result.success) {
        setSent(true);
      } else {
        setError(result.error || 'Something went wrong');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset password"
      subtitle="We'll send a secure reset link to your email"
    >
      <div className={styles.wrapper}>
        {error && <div className={styles.error}>{error}</div>}

        {!sent ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" fullWidth loading={loading}>
              Send reset link
            </Button>
          </form>
        ) : (
          <div className={styles.success}>
            <div className={styles.icon}>✓</div>
            <h3>Check your email</h3>
            <p>
              If an account exists for <span>{email}</span>, a reset link has
              been sent.
            </p>
          </div>
        )}

        <div className={styles.footer}>
          <Link href="/auth/login">← Back to sign in</Link>
        </div>
      </div>
    </AuthLayout>
  );
}
