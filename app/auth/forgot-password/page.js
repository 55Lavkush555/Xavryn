'use client';

import { useState } from 'react';
import Link from 'next/link';

import AuthLayout from '@/components/AuthLayout/AuthLayout';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

import styles from './forgot-password.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="We’ll send a secure reset link to your email"
    >
      <div className={styles.wrapper}>
        {!sent ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button type="submit">
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
        ) : (
          <div className={styles.success}>
            <div className={styles.icon}>✓</div>

            <h3>Check your email</h3>

            <p>
              If an account exists for <span>{email}</span>, a reset link has been sent.
            </p>
          </div>
        )}

        <div className={styles.footer}>
          <Link href="/auth/login">Back to Login</Link>
        </div>
      </div>
    </AuthLayout>
  );
}