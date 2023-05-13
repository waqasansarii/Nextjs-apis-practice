'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

type formType = {
  username: string
  email: string
  password: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formType>()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: formType) => {
    setLoading(true)
    let postData = await fetch('/api/formApi', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    console.log(await postData.json())
    setLoading(false)
    reset()
  }

  return (
    <div className="sm:w-[500px] w-full mx-auto bg-violet-900/20 p-3 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-3">
          <p>Username</p>
          <input
            className="text-black w-full py-2 mt-2 px-3 rounded-md"
            type="text"
            {...register('username',{required:true})}
          />
        </div>
        <div className="my-3">
          <p>Email</p>
          <input
            className="text-black w-full py-2 mt-2 px-3 rounded-md"
            type="email"
            {...register('email',{required:true})}
          />
        </div>
        <div className="my-3">
          <p>Password</p>
          <input
            className="text-black w-full py-2 mt-2 px-3 rounded-md"
            type="password"
            {...register('password',{required:true})}
          />
        </div>
        <div className="my-4 text-center">
          <button
            disabled={loading}
            className="bg-gray-900 py-2 px-8 rounded-md"
            type="submit"
          >
            {loading ? 'loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
