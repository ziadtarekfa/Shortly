import Image from "next/image";
const Intro = () => {
    return (
        <div className="flex flex-col mt-20 px-4 md:flex-row justify-around items-center">
            <div>
                <Image className="w-4/5 mx-auto" width={400} height={400} alt="office" src={'assets/illustration-working.svg'} />
            </div>
            <div className="flex flex-col items-center text-center mt-10 md:mt-0 md:text-start md:items-start">
                <h1 className="font-bold text-4xl lg:text-6xl">More than just <br /> shorter links</h1>
                <p className="text-gray-400 mt-2">Build your brands recognition and get detailed <br /> insights on how your links are performing.</p>
                <button className="bg-primary text-white font-bold py-2 px-8 rounded-3xl mt-4  hover:bg-teal-200">Get Started</button>
            </div>
        </div>
    );
}

export default Intro;