import { Documents } from '@/components/Documents'
import { Footer } from '@/components/Footer'
import { Notification } from '@/components/Notification'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {

  const [loading, setloading] = useState(false)


  async function createDocument() {
    if (loading) return;

    setloading(true);
    const res = await fetch(`./api/gauth`)
    const data = await res.json()
    if (res.status === 200) {
      window.location.href = `https://docs.google.com/document/d/${data.documentId}`;
    } else {
      console.log(res.statusText);
    }
    setloading(false);
  }

  function LoadingSvg() {
    return (
      <svg className="w-5 h-5text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    )
  }


  return (
    <div className="flex flex-col min-h-screen">
      <div className='grow-0'>
        <Notification title='Hey!' message='Before you can use this application, you have to authenticate your account to this application first!' />
      </div>
      <div className='grow'>
        <div className='w-full px-2 my-10 text-center'>
          <h1 className="my-2 text-xl font-medium">Create new google docs</h1>
          <p className='text-sm font-thin'>Click the button underneath to create a new google docs.</p>
          <button onClick={() => createDocument()} className='px-4 py-2 my-5 font-bold text-white bg-gray-500 border-2 border-white rounded hover:bg-gray-700 hover:ring-2 ring-gray-100'>
            {loading ? (
              <div className='flex'>
                <div className='mr-5'>Creating...</div>
                <LoadingSvg />
              </div>
            ) : <p>Create new google docs</p>}
          </button>
        </div>
        <DocumentListSection />
      </div>

      <div className='py-3 grow-0 bg-slate-100'>
        <Footer />
      </div>
    </div >
  )
}

const DocumentListSection = () => {

  if (process.env.NODE_ENV === 'development') {
    return (
      <>
        <h1 className='text-xl font-medium text-center'>Last modified documents</h1>
        <div className='my-3'>
          <Documents />
        </div>
      </>
    )
  }
  return (<></>)
}

export default Home
