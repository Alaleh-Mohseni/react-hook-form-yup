import { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { BiTransfer, BiLogOut, BiHelpCircle } from "react-icons/bi";
import { motion } from 'framer-motion';
import avatar from '../assets/images/user.png';


const navLinks = [
    {
        title: 'Dashboard',
        icon: RxDashboard
    },
    {
        title: 'Activity',
        icon: FiClock
    },
    {
        title: 'Analytics',
        icon: BsBarChart
    },
    {
        title: 'Transaction',
        icon: BiTransfer
    },
    {
        title: 'Help Center',
        icon: BiHelpCircle
    },
    {
        title: 'Logout',
        icon: BiLogOut,
    }
]

const variants = {
    expanded: { width: '20%' },
    nonExpanded: { width: '6%' }
}


function Sidebar({currentUser, handleLogout}) {
    const [activeNavIndex, setActiveNavIndex] = useState(0)
    const [isExpanded, setIsExpanded] = useState(true)

    return (
        <motion.div
            animate={isExpanded ? 'expanded' : 'nonExpanded'}
            variants={variants}
            className={`bg-gray-900 text-white py-12 flex flex-col border-r-l w-1/5 h-screen relative
            ${isExpanded ? 'px-9' : 'px-3'}
            `}
        >
            <div className="logo flex flex-col space-y-3 items-center">
                <img src={avatar} className='h-10 w-10 rounded-full ring-2 ring-white' />
                <span className={`${isExpanded ? 'block' : 'hidden'} text-sm text-ellipsis overflow-hidden`}>
                    {currentUser?.email}
                </span>
            </div>

            <div
                className='w-5 h-5 bg-indigo-500 rounded-full absolute -right-[9.5px] top-15 flex items-center justify-center'
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <IoIosArrowForward size='14' />
            </div>

            <div className='mt-9 flex flex-col space-y-8'>
                {navLinks.map((item, index) => (
                    <div
                        key={index}
                        className={`flex space-x-3 px-3 py-2 rounded
                            ${(activeNavIndex === index
                                ? 'bg-indigo-500 text-white font-semibold'
                                : ''
                            )}`}
                        onClick={() => setActiveNavIndex(index)}
                    >
                        {item?.title === 'Logout' ? <item.icon size='24' onClick={handleLogout}/> : <item.icon size='24'/>}
                        <span className={isExpanded ? 'block' : 'hidden'}>
                            {item?.title}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Sidebar