'use client'

import React from 'react'

export default function Skills({ skills }) {
    return (
        <div className='flex flex-wrap'>
            {
                skills.map((skill) => (
                    <span
                        key={skill}
                        className="p-1 m-1 bg-kwhite text-kblack rounded-md cursor-pointer duration-300 hover:text-kwhite hover:bg-kblack"
                    >
                        {skill}
                    </span>
                ))
            }
        </div>
    )
};
