const MenuModal = ({ isVisible }) => {
    return (
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
    );
}

export default MenuModal;