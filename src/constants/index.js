import image1 from '@assets/bg_1.webp';
import image2 from '@assets/bg_2.webp';
import image3 from '@assets/bg_3.webp';
import image4 from '@assets/bg_4.webp';
import image5 from '@assets/bg_5.webp';
import image6 from '@assets/bg_6.webp';
import image7 from '@assets/bg_7.webp';
import image8 from '@assets/bg_8.webp';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const menu = [
    "Home",
    "About",
    "Gallery",
    "Testimonial",
    "Contact"
]
export const gallery = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
]
export const sociais = [
    {
        title: "GitHub",
        url:"https://github.com/manuelbento19",
        Icon: FaGithub
    },
    {
        title:"LinkedIn",
        url: "https://www.linkedin.com/in/manuel-bento",
        Icon: FaLinkedinIn
    },
    {
        title: "Instagram",
        url: "#",
        Icon: FaInstagram
    },
    {
        title: "Facebook",
        url: "#",
        Icon: FaFacebookF
    }
]
  
  