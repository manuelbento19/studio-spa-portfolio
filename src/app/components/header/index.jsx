import { menu } from '@app/constants';
import { X } from '@phosphor-icons/react';
import { useAppContext } from '../../../context';
import { sociais } from '../../../constants';

export default function Header(){
    const {mobileMenu,setActiveMobile} = useAppContext();

    return (
        <aside id='header' className={`h-full bg-zinc-200 w-60 shadow-md tablet:max-w-[320px] tablet:w-full tablet:z-[51] tablet:fixed ${!mobileMenu && 'tablet:hidden'} tablet:inset-y-0 tablet:right-0 py-4 px-10 tablet:px-3 flex flex-col tablet:items-center`}>
            <X onClick={()=>setActiveMobile(false)} color="#333" size={22} className="hidden tablet:block absolute top-3 right-4 z-[50] cursor-pointer" />
            <a href="#home" className='mt-8 max-w-[100px] w-full flex justify-center items-center p-1 border-[3px] text-lg font-semibold tracking-widest uppercase border-black shadow-xl'>
                Studio
            </a>
            <ul className='my-10 flex flex-col gap-3'>
                {menu.map((item, index) => (
                    <li key={index}><a href={`#${item.toLowerCase()}`} className='hover:text-red-600 py-[.2rem] px-2 text-base border-0 border-red-600 transition-colors duration-200 relative before:absolute before:bottom-0 before:left-0 before:w-[2px] before:bg-red-600 before:h-0 before:transition-all before:duration-1000  hover:before:h-full'>{item}</a></li>
                ))}
            </ul>
            <ul className='mt-auto mb-7 flex w-full gap-3 tablet:justify-center'>
                {sociais.map(({Icon,url},index)=>(
                    <li key={index} className='transition-transform duration-200 ease-linear hover:-translate-y-1'><a href={url} ><Icon size={19} /></a></li>
                ))} 
            </ul>
        </aside>
    )
}