import { FilePdf } from '@phosphor-icons/react';
import { FaBars } from 'react-icons/fa';
import { useAppContext } from '../../../../context';

export default function Hero() {
    const {setActiveMobile} = useAppContext();
    return (
        <section id='home' className={`h-screen flex w-full bg-[url('@assets/bg_4.webp')] bg-no-repeat bg-cover bg-center bg-fixed relative before:absolute before:inset-y-0 before:w-full before:bg-black before:bg-opacity-75 before:z-10 before:backdrop-blur-[4px]`}>
            <FaBars onClick={()=>setActiveMobile(true)} color="#fff" size={22} className={`hidden tablet:block absolute top-3 right-4 z-[50] cursor-pointer`} />
            <div className="max-w-6xl w-full mx-auto flex-1 flex items-center py-2 tablet:px-3 relative z-20">
                <div className="flex flex-col gap-2 max-w-md w-full ml-auto">
                    <h1 className='text-6xl font-medium tablet:text-4xl'>It's a Big World Out There, Go Explore</h1>
                    <p className='my-6 text-sm selection:bg-slate-500 text-slate-300 font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi deserunt quibusdam illum amet, dolorum earum minus optio? Alias totam sapiente sed, ipsum non enim expedita in tempora iusto voluptatum est?</p>
                    <a href="#" className='max-w-[200px] w-full py-3 px-1 shadow-md shadow-slate-400 flex gap-2 items-center justify-center bg-transparent border-2 rounded-sm text-white relative before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white before:transition-all before:duration-1000 hover:before:w-full duration-1000 hover:text-slate-800'>
                        <span className='relative z-10'>Our resume</span><FilePdf size={22} className='relative z-10' />
                    </a>
                </div>
            </div>
        </section> 
    )
}