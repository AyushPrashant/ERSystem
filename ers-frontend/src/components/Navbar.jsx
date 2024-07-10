import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const naviget = useNavigate()

    const handleclick = async () => {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        const token = data.token;
        localStorage.removeItem('token', token);
        naviget('/login');
    }

    return (
        <>
            <nav className='bg-[#000] shadow-sm bg-opacity-50 flex items-center justify-between gap-7'>
                <div className="logo flex items-center gap-4 ">
                    <img className='invert-1 m-4' width={50} height={50} src="data:image/png;base64,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" alt="" />
                    <h1 className='text-white text-3xl font-custom font-semibold italic'>Real-World</h1>
                </div>
                <div>
                    <ul className='text-white flex gap-7 text-xl m-4 font-custom'>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="btn">
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleclick}>Logout</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
