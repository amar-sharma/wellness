import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg';

const Login = () => {
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
          <form className="max-w-2xl p-10 my-auto bg-white bg-opacity-25">
            <p className="mb-8 text-3xl font-semibold text-center text-black">
              Login
            </p>
            <div className="mb-2">
              <div className=" relative ">
                <input
                  type="email"
                  autoComplete="on"
                  id="login-with-bg-email"
                  className=" rounded-m border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  id="login-with-bg-password"
                  itemType="password"
                  className=" rounded-m border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="py-2 px-4 bg-rose-800 hover:bg-rose-500 focus:ring-rose-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Login
              </button>
            </div>
            <div className="text-center font-sans right-0 mt-2 inline-block text-sm align-baseline font-medium">
              Don’t have an account?{' '}
              <Link href="/signup">
                <a className="text-rose-600 hover:text-rose-800">Sign up</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
