"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

export default function navBar() {

    const [mobileNav, setMobileNav] = useState(false)

    function handleClick() {
      setMobileNav(prevMobileNav => !prevMobileNav);
    }

  return (
    <header className="lg:justify-between lg:items-center mx-auto px-5 flex flex-col lg:flex-row max-w-[1320px]">
    <div className="fixed left-0 flex items-center space-x-5 z-50">
        <button className="ml-10 sm:ml-20 md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-60" onClick={handleClick}>
            <RxHamburgerMenu size={30} className="mt-[-1.5rem]" />
        </button>
        <Image src={Logo} alt="Logo" width={120} height={62} className="mt-[-3rem]" />
    </div>
    {mobileNav && (
        <nav className="fixed inset-0 bg-white z-40">
            <ul className="flex flex-col items-center justify-center h-full space-y-5">
                <li><a href="#" className="text-lg font-medium hover:text-red-800 transition duration-300 ease-in-out">Почивки и екзкрузии</a></li>
                <li><a href="#" className="text-lg font-medium hover:text-red-800 transition duration-300 ease-in-out">Хотели</a></li>
                <li><a href="#" className="text-lg font-medium hover:text-red-800 transition duration-300 ease-in-out">Блог</a></li>
                <li><a href="#" className="text-lg font-medium hover:text-red-800 transition duration-300 ease-in-out">За Нас</a></li>
                <li><a href="#" className="text-lg font-medium hover:text-red-800 transition duration-300 ease-in-out">Контакти</a></li>
            </ul>
        </nav>
      )}
      <nav className="hidden lg:!block py-8 lg:py-0">
        <ul className="font-medium text-lg space-x-10 fixed right-0 mr-[5rem] mt-[-2rem]">
          <a href="#" className="hover:text-red-800 transition duration-300 ease-in-out">Почивки и екзкрузии</a>
          <a href="#" className="hover:text-red-800 transition duration-300 ease-in-out">Хотели</a>
          <a href="#" className="hover:text-red-800 transition duration-300 ease-in-out">Блог</a>
          <a href="#" className="hover:text-red-800 transition duration-300 ease-in-out">За Нас</a>
          <a href="#" className="hover:text-red-800 transition duration-300 ease-in-out">Контакти</a>
        </ul>
      </nav>
    </header>
  );
}
