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
        <div className="flex p-5 bg-white justify-between items-center mt-3">
            <p>{originalLink}</p>
            <div className="flex items-center" >
                <p className="mr-5 text-primary font-bold">{shortenedLink}</p>
                <button ref={copyRef} onClick={handleCopy} className="bg-primary text-white font-bold py-1 px-6 rounded   hover:bg-teal-200">Copy</button>
            </div>
        </div>
    );
}

export default LinkItem;