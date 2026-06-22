import AuthLayout from '@/components/layouts/auth.layout';
import React from 'react';
import SignUp from './signup';
import SignIn from './SignIn';

const SignInPage = () => {
  return (
    <AuthLayout
      title="Welcome back"
      description="Please enter your details to Sign in"
    >
      <SignIn />
    </AuthLayout>
  );
};

const SignUpPage = () => {
  return (
    <AuthLayout
      title="Create Account"
      description="Please fill the form to Sign up"
    >
      <SignUp />
    </AuthLayout>
  );
};

export { SignInPage, SignUpPage };
