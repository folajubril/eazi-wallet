'use client'
import React, { useState, useEffect } from 'react';
import TapPayIcon from '../SVG/tapPay';
import LeftChevron from '../SVG/leftChevron';
import { useRouter } from 'next/navigation';
import GreenTickIcon from '../SVG/greenTick';
const EnterOtp = () => {
    const [otp, setOtp] = useState('');
    const [countdown, setCountdown] = useState(90);
    const [canResend, setCanResend] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    setCanResend(true);
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    const handleSubmit = () => {
        console.log('OTP submitted:', otp);
    };

    return (
        <div className="min-h-screen bg-[#FFFFFF] flex flex-col w-full md:flex md:items-center md:justify-center">
            <div className="w-full max-w-md mx-auto md:max-w-lg xl:max-w-xl md:shadow-lg md:rounded-lg md:overflow-hidden md:my-16">
                <div className="w-full px-4 md:px-6 xl:px-8 flex justify-between items-center mt-8 md:hidden">
                    <div onClick={() => router.back()} className='font-normal text-[14px] md:text-base text-[#1D62CA] flex cursor-pointer'> <LeftChevron /> Back</div>
                    <div className='flex justify-center mr-[40%]'>
                        <TapPayIcon />
                    </div>
                </div>
                <div className="hidden md:flex md:justify-center md:py-4">
                    <TapPayIcon />
                </div>
                <div className="mt-12 md:mt-8 flex items-center flex-col px-4 md:px-6 xl:px-8 pb-8">
                    <p className="font-semibold text-black mb-6 md:mb-8 text-[14px] md:text-base xl:text-lg text-center max-w-68 md:max-w-80">
                        An SMS sent to your mobile number +962 79 XXX-XXXX
                    </p>
                    <p className='text-[#78838D] text-xs md:text-sm font-normal mb-4'>Enter six-digit code</p>
                    <div className="relative mb-8">
                        <input
                            className={otp.replace('-', '').length === 6 ? "w-54 md:w-60 xl:w-64 items-center h-22 md:h-24 xl:h-28 px-3 py-3 text-[36px] md:text-[42px] xl:text-[48px] text-center placeholder:text-[#BAC2C7] border-b border-b-[#4DA66B] text-base mb-4 focus:outline-none" : "w-49.25 md:w-56 xl:w-60 h-22 md:h-24 xl:h-28 px-3 py-3 text-[36px] md:text-[42px] xl:text-[48px] text-center placeholder:text-[#BAC2C7] border-b border-b-[#5732BF] text-base mb-4 focus:outline-none"}
                            placeholder="XXX-XXX"
                            type="text"
                            value={otp}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                if (value.length <= 6) {
                                    const formattedValue = value.length > 3
                                        ? value.slice(0, 3) + '-' + value.slice(3)
                                        : value;
                                    setOtp(formattedValue);
                                }
                            }}
                            maxLength={7}
                        />
                        {otp.replace('-', '').length === 6 && (
                            <div className="absolute right-0 top-6.5 md:top-8 xl:top-10">
                                <GreenTickIcon />
                            </div>
                        )}
                    </div>
                    <div className="mt-4 md:mt-6 flex gap-2 w-full justify-between">
                        <p className={`text-[14px] md:text-base font-normal ${canResend ? 'text-[#1D62CA] cursor-pointer' : 'text-[#78838D]'}`}>Resend code</p>
                        <p className="text-[#000000] text-[14px] md:text-base font-normal">
                            {String(Math.floor(countdown / 60)).padStart(2, '0')}:{String(countdown % 60).padStart(2, '0')}
                        </p>
                    </div>
                    <button onClick={() => router.push('/dashboard')} className='bg-[#5732BF] mt-12 md:mt-16 w-full h-11.5 md:h-12 xl:h-14 cursor-pointer rounded-sm p-3 md:p-4 text-[#FFFFFF] text-sm md:text-base font-medium'>
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnterOtp;
