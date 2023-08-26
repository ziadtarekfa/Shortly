import 'react-toastify/dist/ReactToastify.css';
import LinkItem from "@/components/LinkItem";
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState } from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import CardsList from "@/components/CardsList";
import Header from "@/components/Header";
import Intro from "@/components/Intro";


export default function Home() {

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

      <Header />
      <Intro />

      <div className=" relative bg-darkPurple w-3/5 mx-auto bottom-[-64px]  bg-bg-shorten bg-cover rounded-lg">
        <form className="flex flex-col justify-around p-4" onSubmit={shortenLink}>
          <input required ref={linkRef} className="p-2 pl-4 rounded outline-none" placeholder="Shorten a link here.." />
          <button className="bg-primary text-white font-bold mt-4 py-2 px-6 rounded-lg  hover:bg-teal-200" >Shorten It!</button>
        </form>
      </div>

      <section className="bg-gray-100">

        {
          shorteningResults.length > 0 &&
          <div className="flex flex-col w-3/5 mx-auto pt-16 rounded">
            {
              shorteningResults.map((data, index) => {
                return (
                  <LinkItem key={index} originalLink={data.result.original_link} shortenedLink={data.result.full_short_link} />
                );
              })
            }
          </div>
        }

        <div className="flex flex-col justify-center items-center text-center pt-24 px-5">
          <h2 className="font-bold text-2xl">Advanced Statistics</h2>
          <p className="text-gray-400 mt-2 font-semibold">Track how your links are performing across the web with
            our advanced statistics dashboard.</p>
        </div>
        <CardsList />

      </section>

      <section className="flex justify-center items-center bg-darkPurple bg-bg-boost bg-no-repeat bg-cover p-10">
        <div className="w-fit flex items-center flex-col">
          <h2 className="font-bold text-3xl text-white text-center">Boost your links today</h2>
          <button className="bg-primary text-white font-bold py-2 px-6 rounded-3xl mt-8 w-40 hover:bg-teal-200">Get Started</button>
        </div>
      </section>

      <Footer />
    </main>


  )
}
