import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@contexts/auth-provider';
import { auth } from '@config/firebase';
import Sidebar from '@components/Sidebar';
import TopCoins from '@components/TopCoins';
import Charts from '@components/Charts';
import MarketValue from '@components/MarketValue';


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
                <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full text-white bg-slate-800">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <TopCoins />
                    <Charts />
                    <MarketValue />
                </div>
            </main>
        </div>
    )
}

export default Dashboard