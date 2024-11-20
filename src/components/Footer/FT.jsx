import React from 'react'
import logo from "./../../assets/Navbar/Logo.png"
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobile } from 'react-icons/fa6'
import Banner from "./../../assets/FT/FT.jpg"
import { Link  as ScrollLink} from 'react-scroll'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "290px",
    width: "100%",
    }

const FooterLinks = [
    {
        id:1,
        link:"Principal",
        title:"Inicio",
    },
    {
        id: 2,
        link: "PD",
        title: "Destacados",
    },
    {
        id: 3,
        link: "aboutus",
        title: "Acerca de nosotros",
    },
    {
        id: 4,
        link: "Contacto",
        title: "Contacto",
    },
]

const FT = () => {
    return (
    <div style={BannerImg} className="text-white">
        <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-6 pt-5">
            {/* company details */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                        <img src={logo} alt="" className="max-w-[50px]" />
                            [NOMBRE EMPRESA]
                    </h1>
                    <p>
                        Tu hogar limpio, tu vida mejor.
                    </p>
                </div>
            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                    </div>
                </div>
            <div>
                <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                        Links
                    </h1>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks.map((link) => (
                        <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.id} >
                            <ScrollLink to={link.link} smooth={true} duration={500}>
                                <span>{link.title}</span>
                            </ScrollLink>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
              {/* social links */}
                <div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                    </div>
                <div className="mt-6">
                    <div className="flex items-center gap-3">
                        <FaLocationArrow />
                        <p>Arturo Rodriguez, #2728, Recoleta, RM</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobile />
                        <p>+56 964378329</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default FT