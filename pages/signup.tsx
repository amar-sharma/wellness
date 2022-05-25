import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import logo from '../public/logo.svg';

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
          <form className="max-w-lg p-10 my-auto bg-white bg-opacity-25">
            <p className="mb-8 text-2xl font-light text-center text-black">
              Create new account
            </p>
            <div className="mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="login-with-bg-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="login-with-bg-password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Login
              </button>
            </div>
            <div className="text-center">
              <Link href="/login">
                <a className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                  Already have an account? Login
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
