import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import logo from '../public/logo.svg';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { supabase } from '../lib/initSupabase';

const classes = {
  form: {
    input:
      'mb-3 rounded-md border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent',
    inputError:
      'outline-none ring-2 ring-rose-600 border-transparent placeholder-rose-400',
    error:
      'block -mt-2 mb-2 text-red-600 text-xs justify-start font-semibold text-left',
  },
};

const Signup: FC = () => {
  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="flex h-full mx-auto">
        <div className="basis-7/12">
          <div className="flex flex-col h-full text-center mx-auto justify-center align-middle items-center">
            <h1 className="font-sans text-5xl font-semibold mb-8">WellYou</h1>
            <p className="font-serif text-xl font-light mb-16">
              Improve your happiness with science of wellness
            </p>
            <div className="w-[300px]">
              <Image src={logo} alt="WellU Logo" />
            </div>
          </div>
        </div>
        <div className="basis-5/12 flex justify-self-start text-center">
          <Formik
            initialValues={{ name: '', email: '', pass: '', conf_pass: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .required('Please enter your name'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Please enter an email address'),
              pass: Yup.string().min(8, 'Must be 8 characters or more'),
              conf_pass: Yup.string().test(
                'passwords-match',
                'Passwords must match',
                function (value) {
                  return this.parent.pass === value;
                }
              ),
            })}
            onSubmit={(values, { setSubmitting }) => {
              const { name, email, pass } = values;
              supabase.auth
                .signUp(
                  { email, password: pass },
                  {
                    data: {
                      name,
                    },
                  }
                )
                .then((data) => {
                  console.log(data);
                });
            }}>
            {({ errors, touched }) => (
              <Form className=" w-96 p-10 my-auto bg-white bg-opacity-25">
                <p className="mb-8 text-3xl font-semibold text-center text-black">
                  Sign up
                </p>
                <Field
                  className={
                    classes.form.input +
                    (touched.name && errors.name ? classes.form.inputError : '')
                  }
                  name="name"
                  type="text"
                  placeholder="Full Name"
                />
                <ErrorMessage
                  component="span"
                  className={classes.form.error}
                  name="name"
                />
                <Field
                  className={
                    classes.form.input +
                    (touched.email && errors.email
                      ? classes.form.inputError
                      : '')
                  }
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
                <ErrorMessage
                  component="span"
                  className={classes.form.error}
                  name="email"
                />
                <Field
                  className={
                    classes.form.input +
                    (touched.pass && errors.pass ? classes.form.inputError : '')
                  }
                  name="pass"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  component="span"
                  className={classes.form.error}
                  name="pass"
                />
                <Field
                  className={
                    classes.form.input +
                    (touched.conf_pass && errors.conf_pass
                      ? classes.form.inputError
                      : '')
                  }
                  name="conf_pass"
                  type="password"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  component="span"
                  className={classes.form.error}
                  name="conf_pass"
                />
                <button
                  className="mt-2 block py-2 px-4 bg-rose-800 hover:bg-rose-500 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-1/2 mx-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md "
                  type="submit">
                  Create account
                </button>
                <div className="text-center font-sans right-0 mt-2 inline-block text-sm align-baseline font-medium">
                  Already have an account?{' '}
                  <Link href="/login">
                    <a className="text-rose-600 hover:text-rose-800">Login</a>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
