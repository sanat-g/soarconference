'use client'
import classNames from "classnames";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "@/components/card";
import chairs from "../../../public/home/soar_chair.png";
import cards from "../../../public/icons/cards.png"
import Image from "next/image";
import team_data from "@/app/data/team.json"

export default function About(){

  const sample = {
    imgpath: "image.png",
    title: "Chairs",
    message: "Vestibulum lacinia dui sem, a efficitur risus vulputate quis. Maecenas laoreet scelerisque ullamcorper. Integer eu mauris mauris. Sed et commodo erat, sagittis tincidunt odio. Praesent imperdiet porta metus id fermentum. Morbi sed lectus et ipsum dapibus semper. Cras rhoncus tortor sed ligula scelerisque aliquet. Pellentesque rutrum enim nisi, vitae dictum metus blandit in. Praesent pulvinar, metus et finibus venenatis, orci nibh varius libero, non ullamcorper felis lacus vel purus. Proin at lorem lectus. Ut mattis ipsum ut quam congue egestas. Mauris nec euismod dolor."
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <div className="relative w-full bg-[image:url(/background.png)] bg-repeat bg-top">
      <header className={classNames(" relative h-screen w-full bg-cover bg-opacity-40 bg-center grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2")}>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        <h1 className="mx-auto text-center z-20 mt--10 text-accent_pink w-fit place-self-center text-9xl lg:text-10xl my-auto block">About</h1>
        </div>
      </header> 

      <video autoPlay loop controls muted className="relative mx-auto w-3/4 rounded-lg border-accent_purple border-2">
          <source src="/soarvideo.mp4 "/>
      </video>
      <div className="h-[3px] mx-auto my-20 bg-gradient-to-r from-accent_yellow to-accent_pink  w-3/4 rounded"></div>
      <h2 className="mx-auto text-center z-20  text-white w-fit place-self-center text-4xl mb-4 lg:text-6xl">Mission Statement</h2>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto gap-x-4 ">
        <div className="relative w-full h-full">
          <Image src={chairs} className="relative mx-auto w-5/6 md:w-96 lg:w-5/6 rounded-lg border-accent_pink border-2" alt="Picture of SOAR Chairs of 2024"/>
          <Image src={cards} className="absolute w-30 -rotate-6 -bottom-10 right-0" alt="card graphic"/>
        </div>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-lg mt-10 lg:mt-0 mb-10 border-accent_pink border-2">
          <p className="text-center text-xl lg:text-3xl text-gray-300 px-6">
            SOAR aims to organise a successful leadership conference for middle school students in grades 7-8 with an aim to develop, culminate and offer core leadership skills and experiences that will prepare them for an effective high school career.
          </p> 
        </div>
      </div>

      <div className="h-[3px] mx-auto my-20 bg-gradient-to-r from-accent_yellow to-accent_pink w-3/4 rounded"></div>
      
      <Carousel
      responsive={responsive}
      className="overflow-x-hidden"
      swipeable={true}
      draggable={true}
      showDots={true}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      renderDotsOutside={true}
      containerClass="bg-opacity-0 rounded-lg mx-auto w-3/4 border-accent_purple border-2"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="w-full text-center overflow-x-hidden relative"
>   
      {team_data.map((data, index) => {
             return <Card {...data} key={index} />
            })}
      </Carousel>

    </div>
  )
}