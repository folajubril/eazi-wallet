'use client';
import React, { useState } from 'react';
import { z } from 'zod';
import TapPayIcon from '../SVG/tapPay';
import PhoneIcon from '../SVG/phoneIcon';
import FacebookIcon from '../SVG/facebookIcon';
import GoogleIcon from '../SVG/googleIcon';
import App from 'next/app';
import AppleIcon from '../SVG/appleIcon';
import EyeShutIcon from '../SVG/eyeShut';
import LockedIcon from '../SVG/LockedIcon';
import LeftChevron from '../SVG/leftChevron';

const phoneSchema = z.object({
    phone: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[0-9]+$/, 'Phone number must contain only numbers')
});

const passwordSchema = z.object({
    password: z.string().min(6, 'Password must be at least 6 characters').regex(/.*\d.*/, 'Password must contain at least one number')
});






export default function Login() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [stage, setStage] = useState(1);

    const handlePhoneSubmit = () => {
        try {
            phoneSchema.parse({ phone });
            setPhoneError('');
            setStage(2);
        } catch (error) {
            if (error instanceof z.ZodError) {
                setPhoneError(error.issues[0].message);
            }
        }
    };

    const handlePasswordSubmit = () => {
        try {
            passwordSchema.parse({ password });
            setPasswordError('');
            console.log('Login successful:', { phone, password });
        } catch (error) {
            if (error instanceof z.ZodError) {
                setPasswordError(error.issues[0].message);
            }
        }
    };
const Password = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto md:max-w-lg xl:max-w-xl">
            <div className='bg-[#F7F4FF] w-full h-[40vh] md:h-[35vh] xl:h-[30vh] flex flex-col gap-8 md:gap-12 items-center justify-center'>
                <div className="w-full px-4 md:px-6 xl:px-8 flex justify-between items-center">
                    <div onClick={() => setStage(1)} className='font-normal text-[14px] md:text-base text-[#1D62CA] flex cursor-pointer'> <LeftChevron /> Back</div>
                    <div className='flex justify-center mr-[40%]'>
                        <TapPayIcon />
                    </div>
                </div>               
                <LockedIcon />
            </div>
            <div className='flex p-4 md:p-6 xl:p-8 flex-col flex-1'>
                <p className='text-[21px] md:text-2xl xl:text-3xl font-semibold text-[#191919] mb-6 md:mb-8'>Enter your password</p>
                <div className='mb-12 md:mb-16'>
                    <p className='text-[#000000] font-normal text-xs md:text-sm pb-1'>Password</p>
                    <div className="relative">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    {passwordError && <p className='text-red-500 text-xs mt-1'>{passwordError}</p>}
                    <div className='flex flex-row-reverse mt-4'>
                        <p className='text-[#1D62CA] text-[14px] md:text-base font-semibold cursor-pointer'>Forgot password?</p>
                    </div>
                </div>
                <button onClick={handlePasswordSubmit} className='bg-[#5732BF] mt-auto h-11.5 md:h-12 xl:h-14 cursor-pointer w-full rounded-sm p-3 md:p-4 text-[#FFFFFF] text-sm md:text-base font-medium'>
                    Login
                </button>
            </div>
        </div>
    )
}
    return (
        <>
            {stage === 1 ? <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto md:max-w-lg xl:max-w-xl">
                <div className='bg-[#F7F4FF] w-full h-[40vh] md:h-[35vh] xl:h-[30vh] flex flex-col gap-8 md:gap-12 items-center justify-center'>
                    <TapPayIcon />
                    <PhoneIcon />
                </div>
                <div className='flex p-4 md:p-6 xl:p-8 flex-col flex-1'>
                    <p className='text-[21px] md:text-2xl xl:text-3xl font-semibold text-[#191919] mb-6 md:mb-8'>Enter your mobile number</p>
                    <div className='mb-8 md:mb-12'>
                        <p className='text-[#000000] font-normal text-xs md:text-sm pb-1'>Mobile number</p>
                        <div className="relative">
                            <select className="absolute max-w-20 left-1 top-1 bottom-1 px-2 border-[#E1E3ED] bg-white focus:outline-none z-10 rounded-l-sm text-xs md:text-sm">
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+91">🇮🇳 +91</option>
                                <option value="+86">🇨🇳 +86</option>
                                <option value="+81">🇯🇵 +81</option>
                                <option value="+234">🇳🇬 +234</option>
                            </select>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                                className="w-full pl-24 pr-4 py-3 md:py-4 border border-l-none border-[#E1E3ED] rounded-sm bg-white placeholder:text-[#BAC2C7] text-[14px] md:text-base font-normal"
                                placeholder="7X-XXXXXXX"
                                pattern="[0-9]*"
                                inputMode="numeric"
                            />
                        </div>
                        {phoneError && <p className='text-red-500 text-xs mt-1'>{phoneError}</p>}
                    </div>
                    <button className='bg-[#5732BF] h-11.5 md:h-12 xl:h-14 cursor-pointer w-full rounded-sm p-3 md:p-4 text-[#FFFFFF] text-sm md:text-base font-medium mb-6 md:mb-8' onClick={handlePhoneSubmit}>
                        Continue
                    </button>

                    <div className='flex items-center gap-4 mb-6 md:mb-8'>
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
            </div> : <Password />}

        </>
    );
}