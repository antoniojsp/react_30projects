import { useState } from 'react'
import './App.css'
import Counter from './components/projects/counter'
import ClickOutsideDropDown from './components/projects/3-close_outside_click'
import InlineEditable from './components/projects/inlineEditable'
import TemperatureConverter from './components/projects/temperatureConverter'
import MilesToKilometers from './components/projects/milesKIlometers'
import OtpInput from './components/projects/otp-input'
import ValidateForm from './components/projects/validateForm'
import AnimatedCardFlio from './components/projects/animatedFlipCard'
import CustomTabs from './components/projects/custom-tabs'
import FlattedArray from './components/projects/flat-array'
import FlattenObjectInspector from './components/projects/flatten-object-inspector'
import KeyboardModal from './components/projects/11-keyboard-modal'
import DeepClone from './components/projects/12-deep-clone'
import ProductList from './components/projects/13-product-list'
import ProductProvider from './context/product-context'
import KanbanBoard from './components/projects/14-kanban-board'
import StringCompression from './components/projects/15.string-compression'
import DebounceSearchWithApiCall from './components/projects/16.debounce-search'

function App() {

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col'>
      <header className='border-b py-4'>
        <div className='container mx-auto px-2'>
          <h1 className='text-2xl font-bold pb-0'>
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
        {/* <OtpInput /> */}
        {/* <ValidateForm /> */}
        {/* <AnimatedCardFlio /> */}
        {/* <CustomTabs /> */}
        {/* <FlattedArray /> */}
        {/* <FlattenObjectInspector /> */}
        {/* <KeyboardModal /> */}
        {/* <DeepClone /> */}
        {/* <ProductProvider>
          <ProductList/>
        </ProductProvider> */}
        {/* <KanbanBoard /> */}
        {/* <StringCompression /> */}
        <DebounceSearchWithApiCall />
      </main>
    </div>
  )
}

export default App
