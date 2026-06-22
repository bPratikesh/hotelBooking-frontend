import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';

//implementing sahdcn's component for FORM https://ui.shadcn.com/docs/forms/react-hook-form
//so for form UI is of shadcn, but data handling of data is doen by react-hook-form
const SignIn = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Got the data', data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-8 space-y-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className="h-10 rounded" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="h-10 rounded" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full h-10 cursor-pointer"
            aria-label="Create a new account"
          >
            Log In
          </Button>
        </form>
      </Form>

      <div className="flex items-center justify-center mt-6">
        <span className="text-sm">
          Don't have an Account?{' '}
          <a className="text-primary hover:underline" href="">
            Sign Up
          </a>
        </span>
      </div>
    </>
  );
};

export default SignIn;
