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
  const linkRef = useRef();
  return (

    <main>
      <ToastContainer />
      <Head>
        <title>Shortly</title>
      </Head>
      <div className="pb-20">
        <header className="flex flex-row justify-between px-[120px] mt-10">
          <div className="flex flex-row">
            <Image src='assets/logo.svg' height={33} width={121} alt="logo" />
            <ul className="flex flex-row items-center ml-16 justify-between w-64">
              <li className="text-gray-400 font-bold text-sm hover:text-black cursor-pointer">Features</li>
              <li className="text-gray-400 font-bold text-sm hover:text-black cursor-pointer">Pricing</li>
              <li className="text-gray-400 font-bold text-sm hover:text-black cursor-pointer">Resources</li>
            </ul>
          </div>
          <div>
            <span className="text-gray-400 font-bold text-m mr-10">Login</span>
            <button className="bg-primary text-white font-bold py-2 px-6 rounded-3xl hover:bg-teal-200 ">Sign Up</button>
          </div>
        </header>
        <div className="flex pl-[120px] mt-20 justify-between">
          <div className=" flex  flex-col justify-center ">
            <h1 className="font-bold text-5xl">More than just shorter links</h1>
            <p className="text-gray-400 mt-2 ml-1">Build your brands recognition and get detailed <br /> insights on how your links are performing.</p>
            <button className="bg-primary ml-1 text-white font-bold py-2 px-6 rounded-3xl mt-8 w-40 hover:bg-teal-200">Get Started</button>
          </div>
          <div>
            <Image width={600} height={600} alt="office" src={'assets/illustration-working.svg'} />
          </div>

        </div>
      </div>
      <section className="bg-gray-100 mt-20">
        <div className="absolute left-1/2 top-[710px] transform -translate-x-1/2 -translate-y-1/2 bg-darkPurple bg-bg-shorten bg-cover h-32 w-1/2 rounded-lg px-10">
          <form className="flex items-center justify-between h-full" onSubmit={shortenLink}>
            <input required ref={linkRef} className="p-2 pl-6 rounded w-3/4 outline-none" placeholder="Shorten a link here.." />
            <button className="bg-primary text-white font-bold py-2 px-6 rounded-lg w-30 hover:bg-teal-200" >Shorten It!</button>
          </form>

        </div>

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

        <div className="flex flex-col justify-center items-center  pt-24">
          <h2 className="font-bold text-2xl">Advanced Statistics</h2>
          <p className="text-gray-400 mt-2 font-semibold">Track how your links are performing across the web with
            our advanced statistics dashboard.</p>
        </div>
        <div className="flex justify-between px-32 pb-20 mt-12">
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
        <div className="flex justify-between px-44 py-20">
          <h1 className="text-white font-bold text-3xl" >Shortly</h1>
          <div className="flex flex-col">
            <h2 className="text-white font-bold">Features</h2>
            <ul className="flex flex-col text-gray-500 font-medium">
              <li className="list-item">Link Shortening</li>
              <li className="list-item">Branded Links</li>
              <li className="list-item">Analytics</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-bold">Resources</h2>
            <ul className="flex flex-col text-gray-500 font-medium">
              <li className="list-item">Blog</li>
              <li className="list-item">Developers</li>
              <li className="list-item">Support</li>
            </ul>

          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-bold">Company</h2>
            <ul className="flex flex-col text-gray-500 font-medium">
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
