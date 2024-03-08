import React from 'react'


function Service() {
    return (
        <section>
            <div>
                <h3 className="text-2xl sm:text-3xl py-1 dark:text-white ">Services & Skills</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I offer a range of services tailored to your needs, including:
                </p>
            </div>
            <div className="lg:flex gap-8">
                <div className="max-w-[600px] m-auto text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <h3 className="text-lg  font-medium pb-2">
                        Development
                    </h3>
                    <p className=" py-1 ">
                        Crafting visually stunning websites and web applications tailored to your brand and user needs.
                    </p>
                    <h4 className="py-3 text-teal-600">Skills</h4>
                    <p className="text-gray-800 ">HTML/CSS</p>
                    <p className="text-gray-800 ">JavaScript.js</p>
                    <p className="text-gray-800 ">TypeScript</p>
                    <p className="text-gray-800 ">Css framework</p>
                    <p className="text-gray-800 ">Responsive Web Design</p>
                </div>



                <div className="max-w-[600px] m-auto text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <h3 className="text-lg  font-medium pb-2">
                        Mern Stack
                    </h3>
                    <p className=" py-1 ">
                        Building robust web applications with the MERN stack, ensuring high performance and scalability..
                    </p>
                    <h4 className="py-3 text-teal-600">Skills</h4>
                    <p className="text-gray-800 ">MongoDB</p>
                    <p className="text-gray-800 ">Express.js</p>
                    <p className="text-gray-800 ">React</p>
                    <p className="text-gray-800 ">Next js</p>
                    <p className="text-gray-800 ">Node.js</p>
                </div>
                <div className="max-w-[600px] m-auto text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <h3 className="text-lg  font-medium pb-2">
                        Consulting & Guidance
                    </h3>
                    <p className=" py-1 ">
                        Providing expert advice and assistance on MERN stack projects to optimize performance and efficiency.
                    </p>
                    <h4 className="py-3 text-teal-600">Skills</h4>
                    <p className="text-gray-800 ">Firebase</p>
                    <p className="text-gray-800 ">Git</p>
                    <p className="text-gray-800 ">JWT Token</p>
                    <p className="text-gray-800 ">RTK</p>
                    <p className="text-gray-800 ">Redux</p>
                </div>
            </div>
        </section>

    )
}

export default Service