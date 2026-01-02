"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  useEffect(() => {

    setTimeout(() => {
      router.push('/auth/login');
    }, 5000);

  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#5732BF]">
      <Image
        src="/tapnpayWhite.png"
        alt="EaziWallet Home"
        width={177}
        height={49}
        className="w-44.25 h-12.25 object-contain"
      />
    </div>
  );
}
