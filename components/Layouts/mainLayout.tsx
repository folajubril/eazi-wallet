'use client';
import React, { useState } from 'react';
import HomeIcon from '../SVG/home';
import HistoryIcon from '../SVG/history';
import CardsIcon from '../SVG/cards';
import MoreIcon from '../SVG/more';

interface MainLayoutProps {
    children: React.ReactNode;
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function MainLayout({ children, activeTab, onTabChange }: MainLayoutProps) {
    const tabs = [
        { id: 'home', label: 'Home', icon: <HomeIcon fill={activeTab === 'home' ? '#6F45E9' : undefined} /> },
        { id: 'history', label: 'History', icon: <HistoryIcon fill={activeTab === 'history' ? '#6F45E9' : undefined} /> },
        { id: 'cards', label: 'Cards', icon: <CardsIcon fill={activeTab === 'cards' ? '#6F45E9' : undefined} /> },
        { id: 'more', label: 'More', icon: <MoreIcon fill={activeTab === 'more' ? '#6F45E9' : undefined} /> },
    ];

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Desktop/Tablet Sidebar */}
            <div className="hidden md:flex md:w-64 lg:w-72 bg-white border-r flex-col fixed h-full">
                <div className="p-6 border-b">
                    <h1 className="text-xl font-bold text-gray-800">EaziWallet</h1>
                </div>
                <nav className="flex-1 p-4 overflow-y-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition ${
                                activeTab === tab.id 
                                    ? 'bg-[#6F45E9] text-white' 
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            <div className="text-xl">{tab.icon}</div>
                            <span className="font-medium">{tab.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col md:ml-64 lg:ml-72 overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
                
                {/* Mobile Bottom Navigation */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
                    <div className="flex justify-around">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={`flex-col flex items-center justify-center py-3 transition w-22.5 ${
                                    activeTab === tab.id ? 'text-[#6F45E9] border-t-2 border-[#6F45E9]' : 'text-gray-500'
                                }`}
                            >
                                <div className="text-2xl mb-1">{tab.icon}</div>
                                <p className="text-xs font-medium">{tab.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}