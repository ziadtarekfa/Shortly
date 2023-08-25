const FooterList = ({ title, items }) => {
    return (
        <div className="flex flex-col py-5 lg:py-0">
            <h2 className="text-white font-bold text-center lg:text-left">{title}</h2>
            <ul className="flex flex-col text-gray-500 font-medium text-center lg:text-left mt-2">
                {
                    items.map((item, index) => {
                        return (
                            <li className="list-item" key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default FooterList;