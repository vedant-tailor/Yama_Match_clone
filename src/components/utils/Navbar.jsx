import React from 'react'

const Navbar = () => {
  return (
        <nav className='width-full fixed top-0 left-0 z-[3] text-[.8rem]'>
        <div className='pl-[2rem] pt-[1rem] grid grid-cols-[repeat(3,1fr)] gap-[2rem]'>
        <div className='col-span-1/3 gap-[1rem]'>
            <button type='button'>
                <span className='relative overflow-hidden cursor-pointer inline-flex'>
                    <span className="transform-none">YAMA MATCHA</span>
                    <span className='absolute left-0 top-0 translate-y-[100%]'>YAMA MATCHA</span>
                </span>
            </button>
        </div>
        <div className='col-span-3/6 gap-[1rem] flex'>
            <button type='button'>
                <span className='relative overflow-hidden cursor-pointer inline-flex '>
                    <span className="transform-none">01. INTRO </span>
                    <span className='absolute left-0 top-0 translate-y-[100%]'>01. INTRO </span>
                </span>
            </button>
            <button type='button'>
                <span className='relative overflow-hidden cursor-pointer inline-flex'>
                    <span className="transform-none">02. CULTIVATION </span>
                    <span className='absolute left-0 top-0 translate-y-[100%]'>01. CULTIVATION </span>
                </span>
            </button>
            <button type='button'>
                <span className='relative overflow-hidden cursor-pointer inline-flex'>
                    <span className="transform-none">03. HARVEST </span>
                    <span className='absolute left-0 top-0 translate-y-[100%]'>01. HARVEST </span>
                </span>
            </button>
            <button type='button'>
                <span className='relative overflow-hidden cursor-pointer inline-flex'>
                    <span className="transform-none">04. GRIND </span>
                    <span className='absolute left-0 top-0 translate-y-[100%]'>01. GRIND </span>
                </span>
            </button>
            <button type='button'>
                <span className='relative overflow-hidden cursor-pointer inline-flex '>
                    <span className="transform-none">05. PACKAGING </span>
                    <span className='absolute left-0 top-0 translate-y-[100%]'>05. PACKAGING </span>
                </span>
            </button>
        </div>
        <div  className='col-span-6/7 justify-self-end'>
            <button type='button'>
                <span className='relative overflow-hidden cursor-pointer inline-flex'>
                    <span className="transform-none">VISIT THE SHOP </span>
                    <span className='absolute left-0 top-0 translate-y-[100%]'>VISIT THE SHOP </span>
                </span>
                
            </button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar