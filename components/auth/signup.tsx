'use client';
import React, { useState } from 'react';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import LeftChevron from '../SVG/leftChevron';
import TapPayIcon from '../SVG/tapPay';
import EyeShutIcon from '../SVG/eyeShut';
import FacebookIcon from '../SVG/facebookIcon';
import GoogleIcon from '../SVG/googleIcon';
import AppleIcon from '../SVG/appleIcon';

const signupSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters').regex(/.*\d.*/, 'Password must contain at least one number')
});

export default function Signup() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            signupSchema.parse(formData);
            setErrors({});
            console.log('Signup successful:', formData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: {[key: string]: string} = {};
                error.issues.forEach((err: z.ZodIssue) => {
                    if (err.path[0]) {
                        newErrors[err.path[0] as string] = err.message;
                    }
                });
                setErrors(newErrors);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#FFFFFF] flex flex-col w-full md:flex md:items-center md:justify-center">
            <div className="w-full max-w-md mx-auto md:max-w-lg xl:max-w-xl md:shadow-lg md:rounded-lg md:overflow-hidden md:my-16">
                {/* Back Button */}
                <div className="w-full px-4 md:px-6 xl:px-8 flex justify-between items-center mt-8 md:hidden">
                    <div onClick={() => router.back()} className='font-normal text-[14px] md:text-base text-[#1D62CA] flex cursor-pointer'> <LeftChevron /> Back</div>
                    <div className='flex justify-center mr-[40%]'>
                        <TapPayIcon />
                    </div>
                </div>
                <div className="hidden md:flex md:justify-center md:py-4">
                    <TapPayIcon />
                </div>

                {/* Signup Form */}
                <div className="flex px-4 md:px-6 xl:px-8 pb-4 md:pb-6 xl:pb-8">
                    <div className="w-full">
                        <h1 className="text-[21px] md:text-2xl xl:text-3xl font-semibold mb-6 md:mb-8 text-[#191919] mt-12 md:mt-8">Create Account</h1>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label className="text-[#000000] font-normal text-xs md:text-sm pb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='e.g. John Doe'
                                    className="w-full pl-3 pr-12 py-3 md:py-4 border border-l-none border-[#E1E3ED] rounded-sm bg-white placeholder:text-[#BAC2C7] text-[14px] md:text-base font-normal focus:outline-none focus:ring-1 focus:ring-[#5732BF]"
                                    required
                                />
                                {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
                            </div>

                            <div>
                                <label className="text-[#000000] font-normal text-xs md:text-sm pb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='e.g. email@example.com'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-3 pr-12 py-3 md:py-4 border border-l-none border-[#E1E3ED] rounded-sm bg-white placeholder:text-[#BAC2C7] text-[14px] md:text-base font-normal focus:outline-none focus:ring-1 focus:ring-[#5732BF]"
                                    required
                                />
                                {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                            </div>
                            <div>
                                <label className="text-[#000000] font-normal text-xs md:text-sm pb-1">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-3 pr-12 py-3 md:py-4 border border-l-none border-[#E1E3ED] rounded-sm bg-white placeholder:text-[#BAC2C7] text-[14px] md:text-base font-normal focus:outline-none focus:ring-1 focus:ring-[#5732BF]"
                                        placeholder="Enter your password"
                                        minLength={8}
                                        maxLength={32}
                                        autoComplete="current-password"
                                        required
                                    />
                                    <div className='absolute right-3 top-3 md:top-4'>
                                        <EyeShutIcon />
                                    </div>
                                </div>
                                {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
                            </div>

                            <div className="mt-6 md:mt-8 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="h-4 w-4 rounded border-gray-300 text-[#5732BF] focus:ring-[#5732BF]"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm md:text-base font-normal text-[#000000]">
                                    I accept <span className='text-[#1D62CA]'> terms and conditions</span> and <span className='text-[#1D62CA]'> privacy policy</span>
                                </label>
                            </div>
                            <button className='bg-[#5732BF] mt-12 md:mt-16 w-full h-11.5 md:h-12 xl:h-14 cursor-pointer rounded-sm p-3 md:p-4 text-[#FFFFFF] text-sm md:text-base font-medium'>
                                Create a new account
                            </button>
                        </form>

                        <div className='flex items-center gap-4 my-6 md:my-8'>
                            <hr className='flex-1 border-[#EDEFF6] border-px' />
                            <p className='text-[#78838D] font-normal text-xs md:text-sm'>or continue using</p>
                            <hr className='flex-1 border-[#EDEFF6] border-px' />
                        </div>
                        <div className='flex justify-between gap-4 md:gap-6'>
                            <div className='flex justify-center items-center border border-[#EDEFF6] h-11.25 md:h-12 xl:h-14 flex-1 rounded-sm p-2 gap-2 cursor-pointer hover:bg-gray-50'>
                                <FacebookIcon />
                            </div>
                            <div className='flex justify-center items-center border border-[#EDEFF6] h-11.25 md:h-12 xl:h-14 flex-1 rounded-sm p-2 gap-2 cursor-pointer hover:bg-gray-50'>
                                <GoogleIcon />
                            </div>
                            <div className='flex justify-center items-center border border-[#EDEFF6] h-11.25 md:h-12 xl:h-14 flex-1 rounded-sm p-2 gap-2 cursor-pointer hover:bg-gray-50'>
                                <AppleIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
