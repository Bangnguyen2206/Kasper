import React from 'react'

interface InputProps {
    name: string,
    type: string,
    placeholder: string,
    required: boolean
}

const Input = ({ name, type, placeholder, required }: InputProps) => {
    return (
        <>
            <div>
                <p className="flex flex-row py-1">
                    <label className="block mb-3 text-sm font-medium text-gray-700">{name}</label>
                    {required ? <p className="text-red-700 mx-1">*</p> : ''}
                </p>
                <input type={type} className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-[#ffffff]dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-4 py-3 border border-[rgb(187,176,176) placeholder:text-sm " placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input