import Image from "next/image";
import { useState } from "react";
import MenuModal from "./MenuModal";
const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    return (
        <header className="flex flex-col justify-between mt-10 lg:pl-20">
            <div className="flex flex-row px-4 justify-between lg:hidden">
                {/* mobile */}
                <Image src='assets/logo.svg' height={33} width={100} alt="logo" />
                <Image className="lg:hidden hover:cursor-pointer" onClick={toggleMenu} src='assets/menu.svg' height={33} width={33} alt="menu" />
            </div>

            <div className="hidden lg:flex flex-row px-4 pr-20 ">
                {/* Desktop */}
                <div className="flex flex-row items-center w-full">
                    <Image src='assets/logo.svg' height={33} width={100} alt="logo" />
                    <Image className="lg:hidden" onClick={toggleMenu} src='assets/menu.svg' height={33} width={33} alt="menu" />
                    <ul className="flex flex-row ml-20">
                        <li className="text-gray-400 font-bold text-sm hover:text-black cursor-pointer">Features</li>
                        <li className="text-gray-400 font-bold text-sm hover:text-black cursor-pointer ml-4">Pricing</li>
                        <li className="text-gray-400 font-bold text-sm hover:text-black cursor-pointer ml-4">Resources</li>
                    </ul>
                </div>
                <div className="flex w-full items-center justify-end">
                    <span className="text-gray-400 p-2 font-bold text-sm hover:text-black cursor-pointer">Login</span>
                    <button className="bg-primary ml-4 w-32 text-white font-bold py-2 px-6 rounded-3xl hover:bg-teal-200 ">Sign Up</button>
                </div>
            </div>

            <MenuModal isVisible={isVisible} />



        </header>
    );
}

export default Header;