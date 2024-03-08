import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
function Footer() {
    return (
        <section className=" overflow-hidden text-white py-8 ">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-8 flex items-center justify-between">
                    <div className="w-auto p-8">
                        <a href="#">
                            <div className="inline-flex items-c enter">
                                <span className="ml-4 text-md font-bold">Developed By Parag</span>
                            </div>
                        </a>
                    </div>

                    <div className="w-auto p-8">
                        <div className="-m-1.5 flex flex-wrap">
                            <div className="w-auto p-1.5">
                                <a href="https://wa.me/+919662391342" target='_blank' rel="noreferrer">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                                        <FaWhatsappSquare />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer