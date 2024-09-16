import { useState } from 'react'
import { Input } from '@/ui/input'
import { Button } from '@/ui/button'
import { Facebook, Twitter } from 'lucide-react'
import Head from 'next/head'
import { FaXTwitter } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className='flex bg-white min-h-screen no-scrollbar'>
        <div className='flex flex-col w-full lg:w-1/2'>
          <div className='p-8'>
            <Link
              href='/'
              className='text-2xl font-bold text-slate-900 font-heading'
            >
              TwentySevenGIGs
            </Link>
          </div>
          <div className='flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-20 xl:px-24'>
            <div className='w-full max-w-sm'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900 mb-8'>
                Login
              </h1>
              <form action='#' method='POST' className='space-y-6'>
                <div>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='block w-full rounded-full h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='password'
                    required
                    className='block w-full h-10 rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <Button
                    type='submit'
                    className='flex w-full justify-center rounded-full btn-gradient  text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Login
                  </Button>
                </div>
              </form>

              <div className='mt-6'>
                <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300' />
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='bg-white px-2 text-gray-500'>
                      Other sign up methods
                    </span>
                  </div>
                </div>

                <div className='mt-6 flex justify-center gap-3'>
                  <Button
                    variant='outline'
                    className='rounded-full size-12 bg-blue-900 hover:bg-blue-900 border-0'
                  >
                    <Facebook className='size-6 text-white' />
                  </Button>
                  <Button
                    variant='outline'
                    className='rounded-full size-12 bg-black hover:bg-black border-0'
                  >
                    <FaXTwitter className='size-6 text-white' />
                  </Button>
                  <Button
                    variant='outline'
                    className='rounded-full size-12 bg-slate-50 hover:bg-slate-50 border-0'
                  >
                    <FcGoogle className='size-6 text-white' />
                  </Button>
                </div>
              </div>

              <p className='mt-6 text-center text-sm text-gray-500'>
                Not a member?{' '}
                <Link
                  href='/sign-up'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='/img/sign-up-bg.webp'
            alt='Woman in yellow sweater'
          />
        </div>
      </div>
    </>
  )
}
