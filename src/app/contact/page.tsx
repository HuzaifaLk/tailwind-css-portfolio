import React from 'react'
import { TbMailFilled } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";
import Navbar from '@/components/Navbar';


const Contact = () => {
  return (
    <div id='contact'>
  <Navbar />
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8 pt-8 '>
            <h2 className='text-8xl pl-12 '>
                Contact Huzaifa!
            </h2>
            <p className='text-white text-[18px pt-2] pl-12'>
Get in touch, call me or send me an email or just fill the contact form.
            </p>
            <div className='flex gap-4 items-center text-[20px] pl-12'>
                <TbMailFilled size={30} />huzaifa123@gmail.com
            </div>
            <div className='flex gap-4 items-center text-[20px] pl-12'>
                <TbPhoneCall size={30} />03041020576
            </div>
        </div>
<div className='space-y-8'>
    <div className='flex flex-col gap-1' >
        <label htmlFor="Name" className='text-[20px] pt-8 '>Name</label>
        <input type="text" className=' h-[40px]  bg-transparent border border-white' id='name'/>
    </div>

    <div className='flex flex-col gap-1'>
        <label htmlFor="Email" className='text-[20px]'>Email</label>
        <input type="text" className=' h-[40px]  bg-transparent border border-white' id='email'/>
    </div>
    <div className='flex flex-col gap-1'>
        <label htmlFor="Message" className='text-[20px]'>Message</label>
        <textarea className=' h-[100px]  bg-transparent border border-white' id='message' rows={8} >
        </textarea>
       
    </div><button className="bg-black  p-2 px-6">Send</button>

    </div>
   

</div>

      </div>
    
  )
}

export default Contact
