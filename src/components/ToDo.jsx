import React from 'react'

import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const ToDo = ({ text, updateMode, deleteToDo }) => {
    return (
        <div className='relative mt-1 bg-zinc-800 text-white py-6 px-12 bg rounded-md my-2 text-bold'>
            <div className=''>{text} </div>
            <div className='absolute top-2/4 right-5 translate-y-[-50%] flex md:gap-2 gap-4'>
                <BiEdit className="cursor-pointer md:text-xl text-2xl" onClick={updateMode} />
                <AiFillDelete className="cursor-pointer md:text-xl text-2xl" onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo