'use client';
import React, { useState } from 'react';
import HomeIcon from '../SVG/home';
import HistoryIcon from '../SVG/history';
import CardsIcon from '../SVG/cards';
import MoreIcon from '../SVG/more';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('home');
    const [balance] = useState(2450.50);
    const [transactions] = useState([
        { id: 1, name: 'Spotify', amount: -12.99, date: 'Today', icon: '🎵' },
        { id: 2, name: 'Salary Deposit', amount: 2500.00, date: 'Yesterday', icon: '💰' },
        { id: 3, name: 'Coffee Shop', amount: -5.50, date: '2 days ago', icon: '☕' },
        { id: 4, name: 'Gas Station', amount: -45.00, date: '3 days ago', icon: '⛽' },
    ]);

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-blue-600 text-white p-6 pt-8">
                <p className="text-sm opacity-90">Total Balance</p>
                <h1 className="text-4xl font-bold">${balance.toFixed(2)}</h1>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto pb-20">
                {activeTab === 'home' && (
                    <div className="p-4 space-y-4">
                        <h2 className="text-lg font-semibold">Recent Transactions</h2>
                        {transactions.map((tx) => (
                            <div key={tx.id} className="flex items-center justify-between bg-white p-4 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">{tx.icon}</span>
                                    <div>
                                        <p className="font-medium">{tx.name}</p>
                                        <p className="text-xs text-gray-500">{tx.date}</p>
                                    </div>
                                </div>
                                <span className={`font-semibold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                                    {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
                        <p className="text-gray-500">All transactions view</p>
                    </div>
                )}

                {activeTab === 'cards' && (
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">My Cards</h2>
                        <p className="text-gray-500">Cards management view</p>
                    </div>
                )}

                {activeTab === 'more' && (
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">More</h2>
                        <p className="text-gray-500">Settings and more options</p>
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div className={`fixed bottom-0 left-0 right-0 bg-white border-t`}>
                <div className={`flex justify-around`}>
                    {[
                        { id: 'home', label: 'Home', icon: <HomeIcon fill={activeTab === 'home' ? '#6F45E9' : undefined} /> },
                        { id: 'history', label: 'History', icon: <HistoryIcon fill={activeTab === 'history' ? '#6F45E9' : undefined} /> },
                        { id: 'cards', label: 'Cards', icon: <CardsIcon fill={activeTab === 'cards' ? '#6F45E9' : undefined} /> },
                        { id: 'more', label: 'More', icon: <MoreIcon fill={activeTab === 'more' ? '#6F45E9' : undefined} /> },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
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
    );
}