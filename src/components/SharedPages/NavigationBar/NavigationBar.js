import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext/UserContext';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out.')
            }).catch((error) => {
                // An error happened.
            });
    }
    const navItems = <>
        <li className='text-white font-bold hover:text-black'><Link to='/'>Home</Link></li>
        <li className='text-white font-bold hover:text-black'><Link to='/blogs'>Blogs</Link></li>
        <li className='text-white font-bold hover:text-black'><Link to='/dashboard'>Dashboard</Link></li>
        {
            user?.email ?
                <>
                    <li><button onClick={handleLogOut} className='btn btn-error'>Log Out</button></li>

                </>
                :
                <>
                    <li className='text-white font-bold hover:text-black'><Link to='/login'>Log In</Link></li>
                    <li className='text-white font-bold hover:text-black'><Link to='/register'>Register</Link></li>
                </>


        }

    </>
    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#0B3D60' }}>
                <div className="navbar-start flex justify-between lg:block w-[100%]">

                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52" style={{ backgroundColor: '#0B3D60' }}>
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl text-white">
                        Pc Reseller Zone
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {navItems}

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavigationBar;