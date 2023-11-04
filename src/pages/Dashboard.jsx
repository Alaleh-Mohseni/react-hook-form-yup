import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth-provider';
import { auth } from '../config/firebase';
import { AiOutlineHome } from "react-icons/ai";
import { TbMessage, TbLogout } from "react-icons/tb";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList, HiOutlineUser } from "react-icons/hi";
import user from '../assets/images/user.png'
import ListDetails from '../components/ListDetails';
import ListTitles from '../components/ListTitles';

function Dashboard() {
    const { logout, currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout(auth)
        navigate('/')
    }

    return (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full border-r">
                <div className="flex items-center justify-between h-14 px-3">
                    <div className="flex -space-x-2 overflow-hidden rounded-full">
                        <img
                            className="inline-block h-10 w-10 rounded-xl ring-2 ring-white "
                            src={user}
                            alt="user-icon"
                        />
                    </div>
                    <div>
                        <p className='text-white text-sm'>{currentUser?.email}</p>
                    </div>
                </div>
                <div className="overflow-y-hidden overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <ListTitles title={'Menu'}/>
                        <ListDetails href={'*'} text={'Dashboard'}>
                            <AiOutlineHome size="24" className='text-indigo-400' />
                        </ListDetails>
                        <ListDetails href={'*'} text={'Messages'}>
                            <TbMessage size="24" className='text-indigo-400' />
                        </ListDetails>
                        <ListDetails href={'*'} text={'Notifications'}>
                            <IoNotificationsOutline size="24" className='text-indigo-400' />
                        </ListDetails>
                        <ListTitles title={'Tasks'}/>
                        <ListDetails href={'*'} text={'Available Tasks'}>
                            <HiOutlineClipboardList size="24" className='text-indigo-400' />
                        </ListDetails>
                        <ListTitles title={'Settings'}/>
                        <ListDetails href={'*'} text={'Profile'}>
                            <HiOutlineUser size="24" className='text-indigo-400' />
                        </ListDetails>
                        <ListDetails href={'*'} text={'Settings'}>
                            <IoSettingsOutline size="24" className='text-indigo-400' />
                        </ListDetails>
                        <ListDetails text={'Logout'}>
                            <TbLogout size="24" className='text-indigo-400' onClick={handleLogout} />
                        </ListDetails>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard