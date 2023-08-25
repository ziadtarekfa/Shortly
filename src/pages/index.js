import Card from "@/components/Card"
import LinkItem from "@/components/LinkItem";
import Image from "next/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRef, useState } from "react";
import Head from "next/head";
export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click.Generic links dont mean a thing.Branded links help instill confidence in your content."
    },
    {
      id: 2,
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click.Generic links dont mean a thing.Branded links help instill confidence in your content."
    },
    {
      id: 3,
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click.Generic links dont mean a thing.Branded links help instill confidence in your content."
    }
  ];
  const [shorteningResults, setShorteningResults] = useState([]);
  const shortenLink = async (e) => {
    e.preventDefault();
    const inputLink = linkRef.current.value;

    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`);
    const data = await response.json();
    if (data.ok === true) {
      const updatedItems = [...shorteningResults, data];
      setShorteningResults(updatedItems);
    }
    else {
      toast.error(data.error, {
        position: 'top-right'
      })
    }

  }
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const linkRef = useRef();
  return (

    <main>
      <ToastContainer />
      <Head>
        <title>Shortly</title>
      </Head>
      <div className="pb-20  lg:pl-20">
        <header className="flex flex-col justify-between mt-10">
          <div className="flex flex-row px-4 justify-between lg:hidden">
            {/* mobile */}
            <Image src='assets/logo.svg' height={33} width={100} alt="logo" />
            <Image className="lg:hidden" onClick={toggleMenu} src='assets/menu.svg' height={33} width={33} alt="menu" />
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
              <button className="bg-primary mt-2 ml-4 w-30 text-white font-bold py-2 px-6 rounded-3xl hover:bg-teal-200 ">Sign Up</button>
            </div>
          </div>

          <div className={isVisible ? "visible absolute w-4/5 mt-10 left-1/2 transform -translate-x-1/2  flex flex-col items-center px-6 py-10 pt-8 bg-darkPurple rounded-md" : "hidden"} >
            <ul className="w-full text-center">
              <li className="text-white p-2 font-bold text-lg hover:text-black cursor-pointer">Features</li>
              <li className="text-white p-2 font-bold text-lg hover:text-black cursor-pointer">Pricing</li>
              <li className="text-white p-2 font-bold text-lg hover:text-black cursor-pointer">Resources</li>
            </ul>
            <hr className="w-full px-2 my-4  border-gray-500" />
            <div className="flex-col flex w-full text-center">
              <span className="text-white p-2 font-bold text-lg">Login</span>
              <button className="bg-primary mt-2 text-white font-bold py-2 px-6 rounded-3xl hover:bg-teal-200 ">Sign Up</button>
            </div>
          </div>



        </header>
        <div className="flex flex-col mt-20 px-4 lg:flex-row justify-between">
        <div>
            <Image className="w-full" width={400} height={400} alt="office" src={'assets/illustration-working.svg'} />
          </div>
          <div className=" flex flex-col items-center text-center mt-4 lg:w-4/5 lg:text-start lg:items-start">
            <h1 className="font-bold text-4xl lg:text-5xl">More than just <br /> shorter links</h1>
            <p className="text-gray-400 mt-2 ml-1">Build your brands recognition and get detailed <br /> insights on how your links are performing.</p>
            <button className="bg-primary ml-1 text-white font-bold py-2 px-6 rounded-3xl mt-4 w-40 hover:bg-teal-200">Get Started</button>
          </div>
    

        </div>

      </div>
      <div className=" relative bg-darkPurple w-3/5 mx-auto bottom-[-64px] z-40 bg-bg-shorten bg-cover h-32 rounded-lg">
        <form className="flex flex-col justify-around h-full z-40 p-4" onSubmit={shortenLink}>
          <input required ref={linkRef} className=" w-full p-2 pl-4 rounded outline-none" placeholder="Shorten a link here.." />
          <button className="bg-primary w-full  text-white font-bold py-2 px-6 rounded-lg  hover:bg-teal-200" >Shorten It!</button>
        </form>
      </div>

      <section className="bg-gray-100">
        {/* TO BE CONSIDERED */}

        {
          shorteningResults.length > 0 &&
          <div className="flex flex-col w-1/2 ml-auto mr-auto pt-16 rounded">
            {
              shorteningResults.map((data, index) => {
                return (

                  <LinkItem key={index} originalLink={data.result.original_link} shortenedLink={data.result.full_short_link} />
                );
              })
            }


          </div>
        }

        <div className="flex flex-col justify-center items-center pt-24">
          <h2 className="font-bold text-2xl">Advanced Statistics</h2>
          <p className="text-gray-400 mt-2 font-semibold text-center">Track how your links are performing across the web with
            our advanced statistics dashboard.</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:pl-20 lg:pr-14 justify-between items-center pb-12 mt-12">
          {
            cards.map((card) => {
              return (
                <Card key={card.id} title={card.title} text={card.text} />
              )
            })
          }
        </div>

      </section>

      <section className="flex justify-center  items-center bg-darkPurple bg-bg-boost bg-no-repeat bg-cover p-10">
        <div className="w-fit flex items-center flex-col">
          <h2 className="font-bold text-3xl text-white">Boost your links today</h2>
          <button className="bg-primary text-white font-bold py-2 px-6 rounded-3xl mt-8 w-40 hover:bg-teal-200">Get Started</button>

        </div>
      </section>
      <footer className="bg-neutral-800">
        <div className="flex flex-col lg:flex-row items-center justify-between px-44 py-12 lg:px-20 lg:items-start">
          <h1 className="text-white font-bold text-3xl" >Shortly</h1>
          <div className="flex flex-col">
            <h2 className="text-white font-bold text-center lg:text-left">Features</h2>
            <ul className="flex flex-col text-gray-500 font-medium text-center lg:text-left lg:mt-2 mt-4">
              <li className="list-item">Link Shortening</li>
              <li className="list-item">Branded Links</li>
              <li className="list-item">Analytics</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-bold text-center lg:text-left">Resources</h2>
            <ul className="flex flex-col text-gray-500 font-medium text-center lg:text-left lg:mt-2 mt-4">
              <li className="list-item">Blog</li>
              <li className="list-item">Developers</li>
              <li className="list-item">Support</li>
            </ul>

          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-white font-bold text-center lg:text-left">Company</h2>
            <ul className="flex flex-col text-gray-500 font-medium text-center lg:text-left mt-4 lg:mt-2">
              <li className="list-item">About</li>
              <li className="list-item">Out Team</li>
              <li className="list-item">Careers</li>
              <li className="list-item">Contact</li>
            </ul>
          </div>
          <div className="flex h-fit justify-between w-[140px]">
            <Image src={'assets/icon-facebook.svg'} height={20} width={20} alt="facebook" />
            <Image src={'assets/icon-twitter.svg'} height={20} width={20} alt="twitter" />
            <Image src={'assets/icon-pinterest.svg'} height={20} width={20} alt="pinterest" />
            <Image src={'assets/icon-instagram.svg'} height={20} width={20} alt="instagram" />
          </div>
        </div>
      </footer>
    </main>


  )
}
