'use client';
import React, { useState } from 'react';
import MainLayout from '@/components/Layouts/mainLayout';
import Image from 'next/image';
import SettingIcon from '../SVG/settingIcon';
import TopUpIcon from '../SVG/topUp';
import WithdrawIcon from '../SVG/withdraw';
import TransferIcon from '../SVG/transfer';
import LeftChevron from '../SVG/leftChevron';
import SmallChevronIcon from '../SVG/smallChevronIcon';
import SearchIcon from '../SVG/searchIcon';
import FilterIcon from '../SVG/filterIcon';
export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('home');
    const [balance] = useState(2450.50);
    const [transactions] = useState([
        { id: 1, name: 'Spotify', amount: -12.99, date: 'Today', icon: '🎵' },
        { id: 2, name: 'Salary Deposit', amount: 2500.00, date: 'Yesterday', icon: '💰' },
        { id: 3, name: 'Coffee Shop', amount: -5.50, date: '2 days ago', icon: '☕' },
        { id: 4, name: 'Gas Station', amount: -45.00, date: '3 days ago', icon: '⛽' },
    ]);

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <div className="flex-1 overflow-y-auto pb-20 md:pb-0">

                        <div className='bg-[#270685] p-5 md:p-6 xl:p-8'>
                            <div className='flex justify-between items-start'>
                                <div className='flex items-center gap-3 max-w-31.5'>
                                    <Image width={48} height={48} className='md:w-12 md:h-12 xl:w-16 xl:h-16' src="/ProfilePhoto.png" alt="Dashboard Header" />
                                    <p className='text-white text-[14px] md:text-base xl:text-lg font-semibold'>Hello, Abdullah!</p>
                                </div>
                                <SettingIcon />
                            </div>
                            <div className='rounded-2xl mt-4 md:mt-6 px-6 md:px-8 xl:px-10 py-6 md:py-8 xl:py-10 bg-linear-to-r from-[#5033A4] to-[rgba(51,16,152,0.65)]'>
                                <div className='flex flex-col items-center'>
                                    <p className='text-[#B2A1E4] font-normal text-xs md:text-sm'>Main Balance</p>
                                    <p className='font-semibold text-[36px] md:text-[42px] xl:text-[48px] text-white'>$14,235.34</p>
                                </div>
                                <div className='flex justify-between mt-4 md:mt-6 xl:mt-8'>
                                    <div className='flex flex-col items-center gap-2 cursor-pointer hover:opacity-80'>
                                        <TopUpIcon />
                                        <p className='text-white font-normal text-xs md:text-sm'>Top Up</p>
                                    </div>
                                    <hr className='border border-[#6F45E9] w-px h-6 md:h-8' />
                                    <div className='flex flex-col items-center gap-2 cursor-pointer hover:opacity-80'>
                                        <WithdrawIcon />
                                        <p className='text-white font-normal text-xs md:text-sm'>Withdraw</p>
                                    </div>
                                    <hr className='border border-[#6F45E9] w-px h-6 md:h-8' />
                                    <div className='flex flex-col items-center gap-2 cursor-pointer hover:opacity-80'>
                                        <TransferIcon />
                                        <p className='text-white font-normal text-xs md:text-sm'>Transfer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Transactions */}
                        <div className="p-4 md:p-6 xl:p-8 space-y-4 md:space-y-6">
                            <h2 className="text-[14px] md:text-base xl:text-lg font-semibold text-[#191919]">Recent Transfers</h2>

                            <div className='recent-transation flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide'>
                                <div className='flex flex-col items-center gap-2 shrink-0 cursor-pointer hover:opacity-80'>
                                    <div className='rounded-full bg-[#E6DDFF] flex items-center justify-center text-[14px] w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24'>
                                        <p className='text-3xl md:text-4xl xl:text-5xl'>+</p>
                                    </div>
                                    <p className='text-[#191919] font-normal text-xs md:text-sm'>Add</p>
                                </div>
                                <div className='flex flex-col items-center gap-2 shrink-0 cursor-pointer hover:opacity-80'>
                                    <Image src="/ProfilePhoto.png" alt="arrow right" width={64} height={64} className='md:w-20 md:h-20 xl:w-24 xl:h-24' />
                                    <p className='text-[#191919] font-normal text-xs md:text-sm'>Ali</p>
                                </div>
                                <div className='flex flex-col items-center gap-2 shrink-0 cursor-pointer hover:opacity-80'>
                                    <Image src="/ProfilePhoto3.png" alt="arrow right" width={64} height={64} className='md:w-20 md:h-20 xl:w-24 xl:h-24' />
                                    <p className='text-[#191919] font-normal text-xs md:text-sm'>Steve</p>
                                </div>
                                <div className='flex flex-col items-center gap-2 shrink-0 cursor-pointer hover:opacity-80'>
                                    <Image src="/ProfilePhoto.png" alt="arrow right" width={64} height={64} className='md:w-20 md:h-20 xl:w-24 xl:h-24' />
                                    <p className='text-[#191919] font-normal text-xs md:text-sm'>Steve</p>
                                </div>
                                <div className='flex flex-col items-center gap-2 shrink-0 cursor-pointer hover:opacity-80'>
                                    <Image src="/ProfilePhoto2.png" alt="arrow right" width={64} height={64} className='md:w-20 md:h-20 xl:w-24 xl:h-24' />
                                    <p className='text-[#191919] font-normal text-xs md:text-sm'>Steve</p>
                                </div>
                                <div className='flex flex-col items-center gap-2 shrink-0 cursor-pointer hover:opacity-80'>
                                    <Image src="/ProfilePhoto3.png" alt="arrow right" width={64} height={64} className='md:w-20 md:h-20 xl:w-24 xl:h-24' />
                                    <p className='text-[#191919] font-normal text-xs md:text-sm'>Steve</p>
                                </div>
                                <div className='flex flex-col items-center gap-2 shrink-0 cursor-pointer hover:opacity-80'>
                                    <Image src="/ProfilePhoto.png" alt="arrow right" width={64} height={64} className='md:w-20 md:h-20 xl:w-24 xl:h-24' />
                                    <p className='text-[#191919] font-normal text-xs md:text-sm'>Ahmed</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col p-4 md:p-6 xl:p-8 space-y-4 md:space-y-6'>
                            <div className='flex justify-between'>
                                <h2 className="text-[14px] md:text-base xl:text-lg font-semibold text-[#191919]">Recent Transfers</h2>
                                <p className='text-[#6B6B6B] text-xs md:text-sm font-normal cursor-pointer hover:text-[#5732BF]'>View all</p>
                            </div>
                            <div className='flex flex-col gap-3 md:gap-4'>
                                <div className='flex justify-between items-center p-2 md:p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                                    <div className='flex gap-2 md:gap-3 items-center'>
                                        <Image src="/Wallmart.png" alt="Spotify Icon" width={32} height={32} className='md:w-10 md:h-10 xl:w-12 xl:h-12' />
                                        <div>
                                            <p className='text-xs md:text-sm xl:text-base font-semibold text-[#191919]'>Walmart</p>
                                            <p className='text-[#78838D] font-normal text-xs md:text-sm'>Today 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs md:text-sm xl:text-base'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>
                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between items-center p-2 md:p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                                    <div className='flex gap-2 md:gap-3 items-center'>
                                        <Image src="/TopupCircled.png" alt="Wallmart Icon" width={32} height={32} className='md:w-10 md:h-10 xl:w-12 xl:h-12' />
                                        <div>
                                            <p className='text-xs md:text-sm xl:text-base font-semibold text-[#191919]'>Top Up</p>
                                            <p className='text-[#78838D] font-normal text-xs md:text-sm'>Yesterday 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#289B4F] font-normal text-xs md:text-sm xl:text-base'>+$350</p>
                                        <SmallChevronIcon />
                                    </div>
                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between items-center p-2 md:p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                                    <div className='flex gap-2 md:gap-3 items-center'>
                                        <Image src="/Netflix.png" alt="Netflix Icon" width={32} height={32} className='md:w-10 md:h-10 xl:w-12 xl:h-12' />
                                        <div>
                                            <p className='text-xs md:text-sm xl:text-base font-semibold text-[#191919]'>Netflix</p>
                                            <p className='text-[#78838D] font-normal text-xs md:text-sm'>Today 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs md:text-sm xl:text-base'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'history':
                return (
                    <div className="flex-1 p-4 md:p-6 xl:p-8 pb-20 md:pb-0 mb-8">
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-4 md:mb-6 text-[#191919]">History</h2>
                        <div className='flex gap-2 md:gap-4 mb-6 md:mb-8'>
                            <div className='relative w-full'>
                                <input type="text" placeholder='Search transactions...' className='border border-[#E1E3ED] rounded-sm p-3 md:p-4 pl-10 md:pl-12 text-sm md:text-base w-full h-9.25 md:h-12 xl:h-14' />
                                <div className='absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2'>
                                    <SearchIcon />
                                </div>
                            </div>
                            <div className='border flex items-center p-3 md:p-4 border-[#E1E3ED] gap-2 rounded-sm w-21.75 md:w-28 xl:w-32 h-9.25 md:h-12 xl:h-14 cursor-pointer hover:bg-gray-50'>
                                <FilterIcon />
                                <p className='text-[#191919] text-[14px] md:text-base font-normal'>Filter</p>
                            </div>
                        </div>
                        <p className="text-[#535D66] text-[16px] font-normal mt-6">Today</p>
                        <div className='flex flex-col space-y-4'>

                            <div className='flex flex-col gap-3 mt-3'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/Wallmart.png" alt="Spotify Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Walmart</p>
                                            <p className='text-[#78838D] font-normal text-xs'> 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>
                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/TopupCircled.png" alt="Wallmart Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Top Up</p>
                                            <p className='text-[#78838D] font-normal text-xs'> 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#289B4F] font-normal text-xs'>+$350</p>
                                        <SmallChevronIcon />
                                    </div>

                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/Netflix.png" alt="Netflix Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Netflix</p>
                                            <p className='text-[#78838D] font-normal text-xs'> 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <hr className='text-[#EDEFF6] w-full h-1' />
                        <p className="text-[#535D66] text-[16px] font-normal mt-6">Yesterday</p>

                        <div className='flex flex-col space-y-4'>

                            <div className='flex flex-col gap-3 mt-3'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/Wallmart.png" alt="Spotify Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Walmart</p>
                                            <p className='text-[#78838D] font-normal text-xs'>Today 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>
                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/TopupCircled.png" alt="Wallmart Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Top Up</p>
                                            <p className='text-[#78838D] font-normal text-xs'>12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#289B4F] font-normal text-xs'>+$350</p>
                                        <SmallChevronIcon />
                                    </div>

                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/Netflix.png" alt="Netflix Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Netflix</p>
                                            <p className='text-[#78838D] font-normal text-xs'>Today 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <hr className='text-[#EDEFF6] w-full h-1' />
                                                    <p className="text-[#535D66] text-[16px] font-normal mt-6">Thursday</p>

                        <div className='flex flex-col space-y-4'>

                            <div className='flex flex-col gap-3 mt-3'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/Wallmart.png" alt="Spotify Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Walmart</p>
                                            <p className='text-[#78838D] font-normal text-xs'>Today 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>
                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/TopupCircled.png" alt="Wallmart Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Top Up</p>
                                            <p className='text-[#78838D] font-normal text-xs'>12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#289B4F] font-normal text-xs'>+$350</p>
                                        <SmallChevronIcon />
                                    </div>

                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/Netflix.png" alt="Netflix Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Netflix</p>
                                            <p className='text-[#78838D] font-normal text-xs'>Today 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <hr className='text-[#EDEFF6] w-full h-1' />
                                                    <p className="text-[#535D66] text-[16px] font-normal mt-6">Older</p>

                        <div className='flex flex-col space-y-4'>

                            <div className='flex flex-col gap-3 mt-3'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/Wallmart.png" alt="Spotify Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Walmart</p>
                                            <p className='text-[#78838D] font-normal text-xs'> 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>
                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/TopupCircled.png" alt="Wallmart Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Top Up</p>
                                            <p className='text-[#78838D] font-normal text-xs'>12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#289B4F] font-normal text-xs'>+$350</p>
                                        <SmallChevronIcon />
                                    </div>

                                </div>
                                <hr className='text-[#EDEFF6] w-full h-1' />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src="/Netflix.png" alt="Netflix Icon" width={32} height={32} />
                                        <div>
                                            <p className='text-xs font-semibold text-[#191919]'>Netflix</p>
                                            <p className='text-[#78838D] font-normal text-xs'> 12:32</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#B83232] font-normal text-xs'>-$35.23</p>
                                        <SmallChevronIcon />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                );
            case 'cards':
                return (
                    <div className="flex-1 p-4 pb-20 md:pb-0">
                        <h2 className="text-lg font-semibold mb-4">My Cards</h2>
                        <p className="text-gray-500">Cards management view</p>
                    </div>
                );
            case 'more':
                return (
                    <div className="flex-1 p-4 pb-20 md:pb-0">
                        <h2 className="text-lg font-semibold mb-4">More</h2>
                        <p className="text-gray-500">Settings and more options</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <MainLayout activeTab={activeTab} onTabChange={setActiveTab}>
            {renderContent()}
        </MainLayout>
    );
}