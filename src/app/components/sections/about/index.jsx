import about_image from '@assets/bg_6.webp';
import { HandWaving } from '@phosphor-icons/react';
import { useEffect,useRef,useState } from 'react';

export default function About() {
    const cardRef = useRef(false);
    const [show,setShow] = useState(false)
    function loadImage(){
        setTimeout(()=>setShow(true),1000)
    }
    useEffect(()=>{
        const observer = new IntersectionObserver((entry)=>{
            if(entry[0].isIntersecting){
                const image = document.createElement('img')
                image.src = about_image;
                image.onload = loadImage;
            }
        })
        observer.observe(cardRef.current);
        return () => {
            observer.disconnect();
        }
    },[])
    return (
        <section id='about' className={`w-full`}>
            <div className="max-w-6xl w-full mx-auto h-full grid grid-cols-2 tablet:grid-cols-1 gap-4 py-20 px-10 tablet:px-4">
                <div ref={cardRef} className='relative before:absolute before:-bottom-8 before:right-0 before:w-[100px] before:rounded-lg before:h-[100px] before:bg-red-600 before:bg-opacity-20 '>
                    <div className={`${!show && 'skeletton'} max-w-md w-full min-h-[200px] h-[500px] rounded-lg border overflow-hidden`}>
                        {show && <img className='relative w-full h-full object-cover object-center shadow-xl hover:scale-110 duration-1000' src={about_image} alt="" />}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='mt-3 max-w-md w-full flex flex-col gap-2'>
                        <h3 className='text-2xl font-semibold text-gray-800'>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                        <p className='leading-[1.8rem] text-sm text-gray-700 selection:text-gray-900 text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at nobis possimus sapiente quod veritatis sed doloremque, beatae est iusto odio quam mollitia aspernatur? Maiores eligendi deserunt quae temporibus suscipit!</p>
                        <p className='leading-[1.8rem] text-sm text-gray-700 selection:text-gray-900 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at nobis possimus sapiente quod veritatis sed doloremque, beatae est iusto odio quam mollitia aspernatur? Maiores eligendi deserunt quae temporibus suscipit!</p>
                        <p className='leading-[1.8rem] text-sm text-gray-700 selection:text-gray-900 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at nobis possimus sapiente quod veritatis sed doloremque.</p>
                        <a href="#" className='max-w-[230px] w-full py-3 px-1 flex gap-2 items-center justify-center bg-transparent border-2 rounded-sm text-slate-700 relative before:absolute before:bottom-0 before:h-0 before:inset-x-0 before:bg-slate-700 before:transition-all before:duration-1000 hover:before:h-full duration-1000 hover:text-white'>
                            <span className='relative z-10'>Get in touch</span><HandWaving size={22} className='relative z-10' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}