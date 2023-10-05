import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'

export default function Footer(){
    return (
        <footer id='contact' className='bg-slate-900 mt-12 w-full'>
            <div className="px-2 pt-1 pb-10 bg-gray-100 flex flex-col items-center">
                <a href="#home" className='mt-8 max-w-[100px] w-full flex justify-center items-center p-1 border-[3px] text-lg font-semibold tracking-widest uppercase border-black shadow-xl'>
                    Studio
                </a>
                <p className='max-w-2xl text-sm my-10 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sint corrupti perferendis quasi quos, dolores porro vel, voluptatibus inventore ratione pariatur eos sunt magni itaque eveniet molestias culpa? Doloribus, eveniet?</p>
                <ul className='max-w-xl w-full flex tablet:flex-wrap gap-3 items-center justify-between'>
                    <li className='flex flex-col'>
                        <a href='#' target='_blank' className='flex flex-col items-center text-[.7rem] gap-4'>
                            <FaMapMarkerAlt size={19} />
                            Luanda, Luanda, Angola
                        </a>
                    </li>
                    <li className='flex flex-col'>
                        <a href='tel:2999999999' target='_blank' className='flex flex-col items-center text-[.7rem] gap-4'>
                            <FaPhoneAlt size={19} />
                            +244 999 999 999
                        </a>
                    </li>
                    <li className='flex flex-col'>
                        <a href='#' className='flex flex-col items-center text-[.7rem] gap-4'>
                            <FaEnvelope size={19} />
                            developer@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
            <div className="px-2 py-6 text-xs text-white">
                <div className="max-w-6xl w-full mx-auto  flex justify-between items-center tablet:flex-col tablet:gap-2 px-4 tablet:px-2">
                    <span>&copy; 2023<strong> STUDIO</strong>. All rights reserved</span>
                    <span>Designed with ❤️ by <a href='https://github.com/manuelbento19' target='_blank'>Manuel Canganjo</a></span>
                </div>
            </div>
        </footer>
    )
}