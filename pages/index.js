import Head from "next/head";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import { IoDocuments } from "react-icons/io5";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import Service from "../components/Service";
// import deved from "../public/Websites/dev-ed-wave.png";
import deved from "../public/parag.png";


export default function Home() {
  return (
    <div className={"dark"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900  lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">PARAG</h1>
            <ul className="flex items-center">

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://wa.me/+919662391342" target="_blank" rel="noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center flex flex-col justify-center align-center  sm:py-10">
            <h2 className="text-4xl sm:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-[75px] ">
              Parag Vadgama
            </h2>
            <h3 className="text-1xl sm:text-2xl  sm:py-2 dark:text-white md:text-3xl">
              Full-Stack Web Developer.
            </h3>
            <p className=" text-sm sm:text-md py-4 sm:py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              2nd-year BTech CSE student passionate about MERN stack development. Let's collaborate to build dynamic web applications and turn ideas into reality with MERN!
            </p>
            <div className="text-5xl mb-5 flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">

              <a href={"https://www.linkedin.com/in/parag-vadgama-1265b42a3/"} target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a href={"https://github.com/parag0712/"} target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a download={"Parag-Resume.pdf"} href={"/Parag-Resume.pdf"} target="_blank" rel="noreferrer">
                <IoDocuments />
              </a>

            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 mb-20 sm:mt-0 md:h-[350px] md:w-[350px]">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        {/* Services */}
        <Service />
        {/* Skills */}
        <section className="py-10">
          <div>
            <h3 className="text-2xl sm:text-3xl py-1 dark:text-white ">Projects</h3>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My portfolio showcases a variety of MERN stack projects, demonstrating my expertise in both front-end and back-end development. Whether it's building responsive user interfaces with React or designing efficient server-side logic with Node.js, I strive for excellence in every aspect of my work.
            </p>
          </div>

          <ProjectsSection />
        </section>
        <Footer />
      </main>
    </div>
  );
}
