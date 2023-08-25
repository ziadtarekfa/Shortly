import Image from "next/image";

const Card = ({ icon, title, text }) => {
    return (
        <div className="bg-white rounded-lg p-5 pt-10 lg:mr-6 mt-6" >
            <div className="bg-violet-950 rounded-full w-fit p-4">
                <Image src={`assets/${icon}`} width={30} height={30} alt={`icon_${title}`} />
            </div>
            <h4 className="font-bold text-lg mt-8 ">{title}</h4>
            <p className="text-gray-400 mt-4">{text}</p>
        </div>
    );
}

export default Card;