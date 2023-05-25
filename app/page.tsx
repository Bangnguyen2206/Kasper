
import NextLink from 'next/link'
import Form from './Components/Form'

export default function Home() {
  return (
    <>
      {/* Container */}
      <div className="bg-gradient-to-r from-purple-300 to-blue-300 h-screen flex items-center p-4 md:flex justify-center">
        {/* Login card */}
        <div className="bg-cover bg-gradient-radial flex flex-col items-center max-w-screen-lg oveflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row h-[90vh]">
          {/* Form */}
          <div className="bg-white flex flex-col justify-center py-4 px-14 space-y-8 w-full md:w-1/2 h-full rounded-l-lg shadow-l-lg">
            {/* Welcome */}
            <div className="flex flex-col">
              <h1 className="font-medium text-black text-2xl text-left my-2">
                Welcome back!
              </h1>
              <p className="text-sm">Enter to get unlimited access to data & information</p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}
