/* eslint-disable @next/next/no-html-link-for-pages */
import { FC, useState } from 'react';
import Image from 'next/image';

import { GiHamburgerMenu, GiShoppingBag } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Navbar: FC = () => {
    const [open, setOpen] = useState(false);
    const [golf, setGolf] = useState(false);
    const [set2, setSet2] = useState(false);
    const [set3, setSet3] = useState(false);
    const [storageBags, setStorageBags] = useState(false);

    return (
        <div className="absolute top-0 left-0 z-50 h-20 w-screen ">
            <nav
                className={` flex justify-center items-center py-4  text-white ${
                    open ? 'bg-gray-300' : 'bg-transparent'
                } `}
            >
                <div className="flex justify-evenly items-center w-[90%]">
                    <button type="button" onClick={() => setOpen(!open)}>
                        {open ? (
                            <IoClose className="text-3xl text-orange-400   " />
                        ) : (
                            <GiHamburgerMenu className="text-3xl text-orange-400  " />
                        )}
                    </button>
                    <a href="/">
                        <Image
                            src="/logos/logo.jpg"
                            alt="logo"
                            width={160}
                            height={50}
                            layout="fixed"
                            className="cursor-pointer"
                        />
                    </a>
                    <button type="button">
                        <GiShoppingBag className="text-3xl text-orange-400 " />
                    </button>
                </div>
            </nav>
            <div className="bg-gray-300">
                {open && (
                    <div className="flex flex-col  items-center justify-center ">
                        <div>
                            <button
                                type="button"
                                onClick={() => setGolf(!golf)}
                                className="list-none flex items-center  text-xl hover:text-orange-400 transition-all py-3 font-semibold "
                            >
                                GOLF SPEAKERS
                                {golf ? (
                                    <IoIosArrowUp className="text-2xl ml-4" />
                                ) : (
                                    <IoIosArrowDown className="text-2xl ml-4" />
                                )}
                            </button>
                            {golf && (
                                <ul className="pb-3 flex flex-col items-center font-medium">
                                    <a href="/T8-PRO-15W">
                                        <li className=" hover:text-orange-400 text-lg tracking-wider   cursor-pointer transition-all">
                                            T8 Pro
                                        </li>
                                    </a>
                                    <a href="/T8-PRO-MAX_45W">
                                        <li className=" hover:text-orange-400 text-lg tracking-wider   cursor-pointer transition-all">
                                            T8 Pro Max
                                        </li>
                                    </a>
                                </ul>
                            )}
                        </div>

                        <div className="flex flex-col items-center">
                            <button
                                type="button"
                                onClick={() => setStorageBags(!storageBags)}
                                className="list-none flex m-0 items-center hover:text-orange-400 transition-all text-xl py-3 font-semibold"
                            >
                                RZR STORAGE BAGS
                                {storageBags ? (
                                    <IoIosArrowUp className="text-2xl ml-4" />
                                ) : (
                                    <IoIosArrowDown className="text-2xl ml-4" />
                                )}
                            </button>
                            <div>
                                {storageBags && (
                                    <div className="pb-3 flex flex-col items-center font-medium">
                                        <button
                                            type="button"
                                            onClick={() => setSet2(!set2)}
                                            className="list-none hover:text-orange-400  transition-all flex items-center  text-xl py-3 font-semibold"
                                        >
                                            Set Of 2
                                            {set2 ? (
                                                <IoIosArrowUp className="text-2xl ml-4" />
                                            ) : (
                                                <IoIosArrowDown className="text-2xl ml-4" />
                                            )}
                                        </button>
                                        {set2 && (
                                            <ul className="pb-3 flex flex-col items-center font-medium space-y-2">
                                                <a href="/RZR-STORAGE-BAGS-2-BLUE">
                                                    <li className=" hover:text-orange-400 text-lg tracking-wider flex text-center cursor-pointer transition-all">
                                                        DOVOTECH Storage Bags Set of 2 – BLUE
                                                    </li>
                                                </a>
                                                <a href="/RZR-STORAGE-BAGS-2-GREY">
                                                    <li className=" hover:text-orange-400 text-lg tracking-wider flex text-center cursor-pointer transition-all">
                                                        DOVOTECH Storage Bags Set of 2 – GREY
                                                    </li>
                                                </a>
                                                <a href="/RZR-STORAGE-BAGS-2-RED">
                                                    <li className=" hover:text-orange-400 text-lg tracking-wider flex text-center cursor-pointer transition-all">
                                                        DOVOTECH Storage Bags Set of 2 – RED
                                                    </li>
                                                </a>
                                            </ul>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => setSet3(!set3)}
                                            className="list-none flex items-center  text-xl py-3 font-semibold"
                                        >
                                            Set Of 3
                                            {set3 ? (
                                                <IoIosArrowUp className="text-2xl ml-4" />
                                            ) : (
                                                <IoIosArrowDown className="text-2xl ml-4" />
                                            )}
                                        </button>
                                        {set3 && (
                                            <ul className="pb-3 flex flex-col items-center font-medium space-y-2">
                                                <a href="/RZR-STORAGE-BAGS-3-BLUE">
                                                    <li className=" hover:text-orange-400 text-lg tracking-wider text-center   cursor-pointer transition-all">
                                                        DOVOTECH Storage Bags Set of 3 – BLUE
                                                    </li>
                                                </a>
                                                <a href="/RZR-STORAGE-BAGS-3-GREY">
                                                    <li className=" hover:text-orange-400 text-lg tracking-wider text-center   cursor-pointer transition-all">
                                                        DOVOTECH Storage Bags Set of 3 – GREY
                                                    </li>
                                                </a>
                                                <a href="/RZR-STORAGE-BAGS-3-RED">
                                                    <li className=" hover:text-orange-400 text-lg tracking-wider text-center   cursor-pointer transition-all">
                                                        DOVOTECH Storage Bags Set of 3 – RED
                                                    </li>
                                                </a>
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <a href="/RZR-FANG_LIGHT-KIT">
                                <li className="list-none flex mr-6 items-center cursor-pointer  text-xl py-3 font-semibold">
                                    RZR FANG LIGHT
                                </li>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
