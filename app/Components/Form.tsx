import React from 'react'
import Input from './Input/Input'
import NextLink from 'next/link'
import { FcGoogle } from 'react-icons/fc'

const Form = () => {
    return (
        <>
            {/* Form */}
            <form className="flex flex-col items-center justify-start space-y-5">
                <div className="relative w-full h-full">
                    <Input name="Email" placeholder='Enter your email address' type="text" required={true} />
                </div>
                <div className="relative w-full h-full">
                    <Input name="Password" placeholder='Enter password' type="password" required={true} />
                </div>
                <div className="flex justify-between items-center w-full h-full">
                    <div className="flex justify-center items-center">
                        <input checked id="disabled-checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" accent-zinc-200 />
                        <label placeholder="disabled-checked-checkbox" className="ml-2 text-sm font-medium text-black dark:text-[#141b15]">Remember me</label>
                    </div>
                    <div>
                        <NextLink href="/">
                            <p className="ml-1 text-[#6000a0] hover:underline text-sm">Forgot your password?</p>
                        </NextLink>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <button type="button" className="text-white bg-[#5138ed] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-4 text-center mb-2 w-full cursor-pointer">Log In</button>
                    <div className="h-[1px] w-full bg-gray-200 my-4 relative flex justify-center items-center">
                        <p className="bg-white py-2 text-gray-500 text-sm absolute px-2">Or, Login with</p>
                    </div>
                    <button type="button" className="text-[#beb8cc] bg-transparent focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 my-2 text-center mb-2 dark:focus:ring-purple-900 w-full border border-[#beb8cc] cursor-pointer">
                        <div className="flex items-center justify-center">
                            <p className="mx-3 text-2xl"><FcGoogle /></p>
                            <p>Sign up with google</p>
                        </div>
                    </button>
                </div>
                <div className="relative w-full h-full flex justify-center items-center">
                    <p className="text-sm flex flex-row">
                        Dont have an account?
                        <NextLink href="/">
                            <p className="ml-1 text-[#6000a0] hover:underline underline">Register here</p>
                        </NextLink>
                    </p>
                </div>
            </form>
        </>
    )
}

export default Form