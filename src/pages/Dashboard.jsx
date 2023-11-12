import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth-provider';
import { auth } from '../config/firebase';
import Sidebar from '../components/Sidebar';
import MainDashboard from '../components/MainDashboard';


function Dashboard() {
    const { logout, currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout(auth)
        navigate('/')
    }

    return (
        <div className='w-full flex'>
            <Sidebar handleLogout={handleLogout} currentUser={currentUser} />

            <main className='grow'>
                <MainDashboard />
            </main>
        </div>
    )
}

export default Dashboard