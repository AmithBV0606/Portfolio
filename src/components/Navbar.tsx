import React from 'react'
import { MoonIcon } from "lucide-react";
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <div className='container mx-auto flex justify-between items-center border border-gray-700 rounded-2xl p-4 mt-3'>
        <ul className='flex items-center gap-3'>
            <li>Home</li>
            <li>Work</li>
            <li>Project</li>
        </ul>

        <div className=''>
            {/* <MoonIcon size={20} /> */}
            <ThemeToggle />
        </div>
    </div>
  )
}
