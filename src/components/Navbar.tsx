import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-11/12 bg-navbar-image mx-auto h-32 absolute rounded-[8px] flex justify-center items-center'>
      <form className='w-11/12 mx-auto flex justify-center items-center bg-white py-2 rounded-md '>
        <input type="text" name="search" id="search-job"
        className='w-10/12 bg-white placeholder:text-light-grey py-3 px-2'
          placeholder='Title, companies, expertise or benefits' 
        />
        <span><button className='bg-light-blue text-center p-3 text-white w-40 mr-1'>Search</button></span>
        
      </form>
    </nav>
  )
}

export default Navbar