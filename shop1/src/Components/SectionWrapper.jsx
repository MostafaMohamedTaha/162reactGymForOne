import React from 'react'

const SectionWrapper = ({children,header,title}) => {
    return (
        <div className='flex justify-center mt-10 bg-gradient-to-r from-slate-300 to-slate-50  dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-800 py-10'>
            <div className="items-center gap-10 flex flex-col ">
                <p className='text-2xl'>{header}</p>
                <div className='flex gap-10 text-5xl uppercase font-bold   '>

                <span>{title[0]}</span>
                <span className='text-blue-400'>{title[1]}</span>
                <span>{title[2]}</span>
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default SectionWrapper
