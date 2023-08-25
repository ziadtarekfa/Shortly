import { useRef } from "react";

const LinkItem = ({ originalLink, shortenedLink }) => {
    const copyRef = useRef();
    const handleCopy = () => {
        const btn = copyRef.current;
        navigator.clipboard.writeText(shortenedLink);
        btn.style.backgroundColor = '#3A3053';
        btn.style.color = 'white';
        btn.textContent = 'Copied!';
    }
    return (
        <div className="flex flex-col lg:flex-row p-5 bg-white justify-between mt-3 rounded-lg lg:items-center ">
            <p>{originalLink}</p>
            <hr className="lg:hidden my-2"/>
            <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center w-full" >
                <p className="mr-5 text-primary font-bold">{shortenedLink}</p>
                <button ref={copyRef} onClick={handleCopy} className="bg-primary mt-2 lg:mt-0 text-white font-bold py-1 px-6 rounded   hover:bg-teal-200">Copy</button>
            </div>
        </div>
    );
}

export default LinkItem;