import React from 'react'
import AuthBlock from './AuthBlock';
import LogoBlock from './LogoBlock';

const Navbar = () => {
  return (
    <section className='navbar bg-slate-300 w-full h-16 flex flex-row shadow-black ' >
    <LogoBlock/>
    {/* <MiddleBlock/> */}
    <AuthBlock/>
    </section>
  )
}

export default Navbar;