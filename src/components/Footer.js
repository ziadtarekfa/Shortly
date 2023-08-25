import Image from "next/image";
import FooterList from "./FooterList";
const Footer = () => {
    return (
        <footer className="bg-neutral-800">
            <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:px-20 lg:items-start">
                <h1 className="text-white font-bold text-3xl mb-10" >Shortly</h1>

                <FooterList title="Features" items={["Link Shortening", "Branded Links", "Analytics"]} />
                <FooterList title="Resources" items={["Blog", "Developers", "Support"]} />
                <FooterList title="Company" items={["About", "Our Team", "Careers", "Contact"]} />

                <div className="flex py-5 lg:py-0 w-[120px] justify-between">
                    <Image src={'assets/icon-facebook.svg'} height={20} width={20} alt="facebook" />
                    <Image src={'assets/icon-twitter.svg'} height={20} width={20} alt="twitter" />
                    <Image src={'assets/icon-pinterest.svg'} height={20} width={20} alt="pinterest" />
                    <Image src={'assets/icon-instagram.svg'} height={20} width={20} alt="instagram" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;