import Image from "next/image";
import {Navbar} from "@/components/navbar";
import classNames from "classnames";
import Footer from "@/components/footer";
import Accordion from "@/components/accordion";
import chairs from "../../public/home/home.png";
import arcade from "../../public/icons/arcade.png"


import motion from "motion/react"
import faq_data from "@/app/data/faq.json"


export default function Home() {
  return (


    <div className="relative w-full bg-[image:url(/background.png)] bg-repeat bg-center" >
      <header className={classNames(`bg-[image:url(/home/paccy.gif)]`, " relative h-screen w-full bg-cover bg-opacity-40 bg-center grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2")}>
      <div className="w-full h-full mx-auto right-0 left-0 absolute bg-black opacity-65 top-0 bottom-0 z-10"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        <h1 className="mx-auto text-center z-20 mt--4 grad bg-clip-text text-transparent w-fit place-self-center text-7xl md:text-9xl lg:text-10xl lg:ps-10 bg-size-200 animate-moving_gradient ">SOARCADE</h1>        
      </div>
      </header>

      <main className=" relative mt-10 mb-20">
      <h2 className="mx-auto text-center z-20 mb-4 text-white w-fit place-self-center text-4xl lg:text-6xl">What is SOAR?</h2>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto gap-x-4 mb-20 lg:mb-10">
        <div className="relative w-full h-full">
          <Image src={chairs} className="relative mx-auto w-5/6 md:w-96 lg:w-5/6 rounded-lg border-accent_yellow border-2" alt="Picture of SOAR Chairs of 2024"/>
          <Image src={arcade} className="absolute w-20 -rotate-6 -bottom-10 right-0" alt="Picture of SOAR Chairs of 2024"/>
        </div>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-lg mt-10 lg:mt-0 mb-10">
          <p className="text-center text-xl lg:text-3xl text-gray-300 px-6">
          SOAR (Suddenly Opportunities are Reachable) is a one-day Peel-wide conference held to help familiarize Grade 7 and 8 students with the ins and outs of high school. Held at Turner Fenton Secondary School annually, SOAR strives to create a generation of students that are not only socially responsible, but are determined to maximize their growth potential and make the most of their academic and extracurricular experience while in high school. 
          </p> 
        </div>
      </div>

      </main>
      <div className="h-[3px] mx-auto my-10 bg-gradient-to-r from-accent_yellow to-accent_pink  w-3/4 rounded"></div>


      <div className=" w-3/4 min-w-72 mx-auto">
      <h2 className="mx-auto text-center z-20 mb-4 text-white w-fit place-self-center text-4xl lg:text-6xl">FAQ</h2>
      
        <Accordion list={faq_data}/>
      </div>

    </div>
  );
}
