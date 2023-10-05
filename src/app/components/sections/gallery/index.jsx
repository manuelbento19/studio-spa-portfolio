import { Camera, X } from '@phosphor-icons/react';
import { gallery } from '@app/constants/index';
import { Fragment, useState } from 'react';
import Card from './components/Card';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

    return (
        <Fragment>
            <section id='gallery' className={`w-full`}>
                <div className="max-w-6xl w-full mx-auto h-full  px-10 tablet:px-4">
                    <ul className='grid grid-cols-3 columns-auto gap-2 tablet:grid-cols-1'>
                        {gallery.map((item, index) => <Card key={index} open={setActiveImage} url={item} />)}
                    </ul>
                    <h2 className='text-3xl text-gray-800 font-medium text-center my-10'>Services</h2>
                    <ul className='grid grid-cols-3 columns-auto gap-x-3 gap-y-4 tablet:grid-cols-1'>
                        <li className='bg-white rounded-md px-4 py-4 shadow hover:cursor-pointer transition-transform duration-700 hover:shadow-md hover:-translate-y-2 flex flex-col'>
                            <div className="p-3 w-fit rounded-full bg-slate-100">
                                <Camera size={28} color='#333' />
                            </div>
                            <span className='font-medium my-2 text-gray-800'>Enim quis est voluptatibus aliquid</span>
                            <p className='mt-3 text-sm text-left font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas fmagni, suscipit voluptatem nisi sed eligendi architecto enim, atque doloribus vero facilis. Eveniet alias reiciendis dolorum obcaecati.</p>
                        </li>
                        <li className='bg-white rounded-md px-4 py-4 shadow hover:cursor-pointer transition-transform duration-700 hover:shadow-md hover:-translate-y-2 flex flex-col'>
                            <div className="p-3 w-fit rounded-full bg-slate-100">
                                <Camera size={28} color='#333' />
                            </div>
                            <span className='font-medium my-2 text-gray-800'>Enim quis est voluptatibus aliquid</span>
                            <p className='mt-3 text-sm text-left font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas fmagni, suscipit voluptatem nisi sed eligendi architecto enim, atque doloribus vero facilis. Eveniet alias reiciendis dolorum obcaecati.</p>
                        </li>
                        <li className='bg-white rounded-md px-4 py-4 shadow hover:cursor-pointer transition-transform duration-700 hover:shadow-md hover:-translate-y-2 flex flex-col'>
                            <div className="p-3 w-fit rounded-full bg-slate-100">
                                <Camera size={28} color='#333' />
                            </div>
                            <span className='font-medium my-2 text-gray-800'>Enim quis est voluptatibus aliquid</span>
                            <p className='mt-3 text-sm text-left font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas fmagni, suscipit voluptatem nisi sed eligendi architecto enim, atque doloribus vero facilis. Eveniet alias reiciendis dolorum obcaecati.</p>
                        </li>
                        <li className='bg-white rounded-md px-4 py-4 shadow hover:cursor-pointer transition-transform duration-700 hover:shadow-md hover:-translate-y-2 flex flex-col'>
                            <div className="p-3 w-fit rounded-full bg-slate-100">
                                <Camera size={28} color='#333' />
                            </div>
                            <span className='font-medium my-2 text-gray-800'>Enim quis est voluptatibus aliquid</span>
                            <p className='mt-3 text-sm text-left font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas fmagni, suscipit voluptatem nisi sed eligendi architecto enim, atque doloribus vero facilis. Eveniet alias reiciendis dolorum obcaecati.</p>
                        </li>
                        <li className='bg-white rounded-md px-4 py-4 shadow hover:cursor-pointer transition-transform duration-700 hover:shadow-md hover:-translate-y-2 flex flex-col'>
                            <div className="p-3 w-fit rounded-full bg-slate-100">
                                <Camera size={28} color='#333' />
                            </div>
                            <span className='font-medium my-2 text-gray-800'>Enim quis est voluptatibus aliquid</span>
                            <p className='mt-3 text-sm text-left font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas fmagni, suscipit voluptatem nisi sed eligendi architecto enim, atque doloribus vero facilis. Eveniet alias reiciendis dolorum obcaecati.</p>
                        </li>
                    </ul>
                </div>
            </section>
            {activeImage && (
                <div className="fixed inset-y-0 inset-x-0 z-50 w-full h-full bg-black bg-opacity-70 flex">
                    <X onClick={() => setActiveImage('')} color="#fff" size={32} className="absolute top-3 right-4 z-[51] cursor-pointer" />
                    <img src={activeImage} className='max-w-lg h-[80%] object-cover w-full m-auto' alt="" />
                </div>
            )}
        </Fragment>
    )
}