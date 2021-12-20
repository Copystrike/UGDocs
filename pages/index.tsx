import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='grow-0'>
        <Notification title='Hey!' message='Before you can use this application, you have to authenticate your account to this application first!' />
      </div>
      <div className='grow'>
        <div className='w-full px-2 my-10 text-center'>
          <h1 className="my-2 text-xl font-medium">Create new google docs</h1>
          <p className='text-sm font-thin'>Click the button underneath to create a new google docs.</p>
          <button className='px-4 py-2 my-5 font-bold text-white bg-gray-500 border-2 border-white rounded hover:bg-gray-700 hover:ring-2 ring-gray-100'>Create new google docs</button>
        </div>
        <h1 className='text-xl font-medium text-center'>Last accessed files</h1>
        <div className='my-3'>
          <Documents />
        </div>
      </div>

      <div className='py-3 grow-0 bg-slate-100'>
        <Footer />
      </div>
    </div >
  )
}

export default Home
