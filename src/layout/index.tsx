import ToggleDarkIcon from '@/common/icons/ToggleDarkIcon';
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const props = {
    darkMode
  }

  return (
    <div className='lg:max-w-screen-lg overflow-hidden lg:mx-auto font-poppins flex space-y-10 flex-col items-center justify-center pb-5'>
      <button
          onClick={toggleDarkMode}
          className={`w-14 h-14 dark:bg-[#171F26] dark:text-[#A3ABB2] cursor-pointer flex justify-center items-center  bg-white mt-4 rounded-full `}
        >
          <ToggleDarkIcon />
        </button>
      <Outlet context={props} />
    </div>
  )
}

export default RootLayout