import Card from "./Card";
const CardsList = () => {
    const cards = [
        {
            id: 1,
            icon: "icon-brand-recognition.svg",
            title: "Brand Recognition",
            text: "Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instill confidence in your content."
        },
        {
            id: 2,
            icon: "icon-detailed-records.svg",
            title: "Detailed Records",
            text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            id: 3,
            icon: "icon-fully-customizable.svg",
            title: "Fully Customizable",
            text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        }
    ];
    return (
        <div className="flex flex-col lg:flex-row lg:pl-20 max-w-md lg:max-w-none lg:w-full m-auto lg:pr-14 p-5 justify-between items-center pb-16 ">
            {
                cards.map((card) => {
                    return (
                        <Card key={card.id} icon={card.icon} title={card.title} text={card.text} />
                    )
                })
            }
        </div>
    );
}

export default CardsList;