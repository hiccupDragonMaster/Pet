'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useAuth, AuthProvider } from '../contexts/authContext';
import Image from 'next/image'
import { Card, Checkbox } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Label,
  TextInput,
} from 'flowbite-react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login) {
      try {
        await login(email, password);
        localStorage.setItem('notified', 'true');
        router.push('dental-report/');
      } catch (error) {
        let errorMessage = 'An error occurred.';

        if (error instanceof Error) {
          errorMessage = error.message;
        }

        setErrorMessage(errorMessage);
      }
    } else {
      console.warn("Login function is not available");
    }
  };

  return (
    <div>
      { isLoading && (
      <div className="min-h-screen flex items-center justify-center">
          <div className="lg:p-8 w-full md:w-auto bg-white">
          <div className="flex justify-center mb-8">
            <Image src={'/images/brand/logo-full.svg'} alt="HealthySmiles Logo" width={140} height={100} />
          </div>
          <Card className="card-login">
            <h1>Sign in to our platform</h1>
              <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email1"
                      value="Your email"
                      className='text-gray-500 font-medium'
                    />
                  </div>
                  <TextInput
                    id="email1"
                    placeholder="name@example.com"
                    required
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password1"
                      value="Your password"
                      className='text-gray-500 font-medium'
                    />
                  </div>
                  <TextInput
                    id="password1"
                    required
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" className='!ring-offset-0 focus:ring-opacity-0' />
                  <Label htmlFor="remember" className='text-gray-500'>
                    Remember me
                  </Label>
                </div>
                <Button type="submit" className="bg-teal-400 transition-all duration-300">
                  Submit
                </Button>
                {errorMessage && <p className="text-red-500 mt-2 text-center">{errorMessage}</p>}
              </form>
          </Card>
          
        </div>
      </div>
      )}
    </div>
  );
}
