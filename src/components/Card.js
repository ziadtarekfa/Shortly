import Image from "next/image";

const Card = ({ icon, title, text }) => {
    return (
        <div className="bg-white w-80 rounded-lg pt-10 p-7 ">
            <div className="bg-violet-950 rounded-full w-fit p-4">
                <Image src='assets/icon-brand-recognition.svg' width={30} height={30} alt="brand_recognition" />
            </div>
            <h4 className="font-bold text-lg mt-8 ">{title}</h4>
            <p className="text-gray-400 mt-4">{text}</p>
        </div>
    );
}

export default Card;