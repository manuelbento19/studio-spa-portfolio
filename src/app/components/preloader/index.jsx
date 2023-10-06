import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import hero_img  from '@assets/bg_4.webp';


export default function Preloader() {
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const heroImage = document.querySelector('img');
        heroImage.src = hero_img;
        heroImage.onload = () => setLoading(false);
    },[])

  return loading && (
    <div className='fixed inset-x-0 inset-y-0 bg-gray-50 flex z-[1000]'>
        <div className='animate-spin m-auto h-11 w-11 border-4 border-e-red-500 rounded-full'></div>
    </div>
  )
}