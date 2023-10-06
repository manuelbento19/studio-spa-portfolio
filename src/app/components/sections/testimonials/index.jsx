import avatar_image from '@assets/me.webp';

export default function Testimonials() {
    return (
        <section id='testimonial' className={`w-full`}>
            <div className="max-w-6xl w-full mx-auto h-full  px-10 tablet:px-4">
                <h2 className='text-3xl text-gray-800 font-medium text-center my-10'>Testimonials</h2>
                <div className="overflow-auto w-full py-3">
                    <ul className='grid grid-cols-3 tablet:grid-cols-1 gap-3 w-full'>
                        <li className='bg-white rounded-md px-4 py-4 shadow-sm hover:cursor-pointer hover:border-red-400 border-0 hover:border-b-[2px] transition-transform duration-700 hover:shadow-md hover:-translate-y-2 flex flex-col'>
                            <div className="flex flex-wrap tablet:justify-center gap-3">
                                <img className='rounded-full w-[45px] h-[45px] object-cover object-top' src={avatar_image} alt="" />
                                <div className="flex-1">
                                    <strong className='block'>Manuel Canganjo</strong>
                                    <span className='text-xs text-slate-500'>Software Developer</span>
                                </div>
                            </div>
                            <p className='mt-5 text-gray-700 text-sm text-left font-light'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas fmagni, suscipit voluptatem nisi sed eligendi architecto enim, atque doloribus vero facilis. Eveniet alias reiciendis dolorum obcaecati."</p>
                        </li>
                        <li className='bg-white rounded-md px-4 py-4 shadow-sm hover:cursor-pointer hover:border-red-400 border-0 hover:border-b-[2px] transition-transform duration-700 hover:shadow-md hover:-translate-y-2 flex flex-col'>
                            <div className="flex flex-wrap tablet:justify-center gap-3">
                                <img className='rounded-full w-[45px] h-[45px] object-cover object-top' src={avatar_image} alt="" />
                                <div className="flex-1">
                                    <strong className='block'>Manuel Canganjo</strong>
                                    <span className='text-xs text-slate-500'>Software Developer</span>
                                </div>
                            </div>
                            <p className='mt-5 text-gray-700 text-sm text-left font-light'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas fmagni, suscipit voluptatem nisi sed eligendi architecto enim, atque doloribus vero facilis. Eveniet alias reiciendis dolorum obcaecati."</p>
                        </li>
                        <li className='bg-white rounded-md px-4 py-4 shadow-sm hover:cursor-pointer hover:border-red-400 border-0 hover:border-b-[2px] transition-transform duration-700 hover:shadow-md hover:-translate-y-2 flex flex-col'>
                            <div className="flex flex-wrap tablet:justify-center gap-3">
                                <img className='rounded-full w-[45px] h-[45px] object-cover object-top' src={avatar_image} alt="" />
                                <div className="flex-1">
                                    <strong className='block'>Manuel Canganjo</strong>
                                    <span className='text-xs text-slate-500'>Software Developer</span>
                                </div>
                            </div>
                            <p className='mt-5 text-gray-700 text-sm text-left font-light'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas fmagni, suscipit voluptatem nisi sed eligendi architecto enim, atque doloribus vero facilis. Eveniet alias reiciendis dolorum obcaecati."</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}