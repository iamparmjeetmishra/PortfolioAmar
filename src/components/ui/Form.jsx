'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useState } from 'react'
// import { IoMdClose } from "react-icons/io";



export default function Form() {
    // const [formData, setFormData] = useState('')

    const schema = z.object({
        fullName: z.string().min(3).max(30),
        email: z.string().email(),
        subject: z.string().min(4),
        message: z.string().min(5)
    })

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ resolver: zodResolver(schema) })

    const submitData = async (data) => {
        // todo: Submit to Server
        setFormData(data)
        console.log('Done', data)
        reset()
    }


    return (
        <>
            <form onSubmit={handleSubmit(submitData)} className='w-full mx-auto'>
                <div className='mb-5 flex flex-col gap-2'>
                    <label className="block text-base font-medium text-gray-900 "> Full Name:</label>
                    <input type="text" {...register('fullName')} placeholder='Your Good Name' className="p-2 rounded-lg" />
                    {errors.fullName && <div className='text-red-600'>{errors.fullName.message}</div>}
                </div>
                <div className='mb-5 flex flex-col gap-2'>
                    <label className="block text-base font-medium text-gray-900 "> Email:</label>
                    <input placeholder='Your Email' type="email" {...register('email')}  className="p-2 rounded-lg" />
                    {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                </div>
                <div className='mb-5 flex flex-col gap-2'>
                    <label className="block text-base font-medium text-gray-900 "> Subject</label>
                    <input type="string" {...register('subject')} placeholder='Subject'  className="p-2 rounded-lg" />
                    {errors.subject && <span className='text-red-600'>{errors.subject.message}</span>}
                </div>
                <div className='mb-5 flex flex-col gap-2'>
                    <label className="block text-base font-medium text-gray-900 "> Message</label>
                    <textarea type="text" {...register('message')} placeholder='Your Message'  className="p-2 rounded-lg" />
                    {errors.message && <span className='text-red-600'>{errors.message.message}</span>}
                </div>
                <input type='submit' className='border-2 border-black  px-2.5 py-3 rounded-xl font-bold text-black hover:bg-cyan-100 hover:text-black hover:border-black transition-all w-full active:border-cyan-200 '  />
            </form>
            {isSubmitSuccessful && (
                <h2 className='font-bold text-xl my-4 text-center w-fit mx-auto text-green-500'>Form Successfully submitted</h2>
            )}
        </>
    )
}