import { useState } from 'react'
import './App.css'
import Counter from './components/projects/counter'
import ClickOutsideDropDown from './components/projects/dropDown'
import InlineEditable from './components/projects/inlineEditable'
import TemperatureConverter from './components/projects/temperatureConverter'
import MilesToKilometers from './components/projects/milesKIlometers'
import OtpInput from './components/projects/otp-input'

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
        {/* <ClickOutsideDropDown /> */}
        {/* <InlineEditable /> */}
        {/* <TemperatureConverter /> */}
        {/* <MilesToKilometers /> */}
        <OtpInput />
      </main>
    </div>
  )
}

export default App
