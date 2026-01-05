import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/projects/counter'
import ClickOutsideDropDown from './components/projects/dropDown'

function App() {

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col'>
      <header className='border-b py-4'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold pb-10'>
            30 React Machine Coding Projects
          </h1>
        </div>
      </header>
      <main>
        {/* <Counter /> */}
        <ClickOutsideDropDown />
      </main>
    </div>
  )
}

export default App
