import React from 'react';
import { Documents } from './libs/Documents';
import { Footer } from './libs/Footer';
import { Notification } from './libs/Notification';
import logo from './logo.svg';

function App() {

  const name = "Nick";


  return (
    <div className="min-w-screen">
      <Notification title='Hey!' message='Before you can use this application, you should authenticate your account to this application!' />
      <div className='w-full px-2 my-10 text-center'>
        <h1 className="my-2 text-xl font-medium">Create new google docs</h1>
        <p className='text-sm font-thin'>Click the button underneath to create a new google docs.</p>
        <button className='px-4 py-2 my-5 font-bold text-white bg-gray-500 rounded hover:bg-gray-700'>Create new google docs</button>
      </div>
      <DocumentBody />
      <Footer />
    </div >
  );
}

const DocumentBody = () => {

  if (process.env.NODE_ENV === 'development') {

    return (
      <div>
        <h1 className='text-xl font-medium text-center'>Last accessed files</h1>
        <div className='my-3'>
          <Documents />
        </div>
      </div>
    )
  }

  return (<></>)
}

export default App;
