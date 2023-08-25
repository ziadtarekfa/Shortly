import Image from "next/image";
const Intro = () => {
    return (
        <div className="flex flex-col mt-20 px-4  lg:flex-row justify-around items-center">
            <div>
                <Image className="w-4/5 mx-auto" width={400} height={400} alt="office" src={'assets/illustration-working.svg'} />
            </div>
            <div className=" flex flex-col items-center text-center mt-10 lg:text-start lg:items-start">
                <h1 className="font-bold text-4xl lg:text-7xl">More than just <br /> shorter links</h1>
                <p className="text-gray-400 mt-2 ml-1">Build your brands recognition and get detailed <br /> insights on how your links are performing.</p>
                <button className="bg-primary ml-1 text-white font-bold py-2 px-6 rounded-3xl mt-4 w-40 hover:bg-teal-200">Get Started</button>
            </div>
        </div>
    );
}

export default Intro;