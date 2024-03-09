"use client"
import { File, Shield, Upload } from 'lucide-react';
import React , { useState } from 'react';
import Image from 'next/image';

function SideNav() {
    const menulist=[
        {
            id:1,
            name:'Upload',
            icon:Upload,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon:File,
            path:'/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        }
        
    ]
    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='shadow-sm border-r h-full'>
        <div className='p-5 border-b'>
            <Image src='/logo.svg' width={150} height={150}/>
        </div>
        <div className='flex flex-col float-left w-full'>
        {menulist.map((item,index)=>(
            <button className={`flex gap-5 p-4 px-6 hover:big-gray-100 w-full text-gray-500 ${activeIndex==index?'bg-blue-100 text-primary':null}`}
            onClick={()=>setActiveIndex(index)}
            >
                <item.icon/>
                <h2>{item.name}</h2>
            </button>
        ))}
        </div>
    </div>
  )
}

export default SideNav