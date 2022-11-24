import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavigationBar from '../components/SharedPages/NavigationBar/NavigationBar';
import { AuthContext } from '../contexts/UserContext/UserContext';
import useCheckRole from '../hooks/useCheckRole';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [role] = useCheckRole(user?.email);


    return (
        <div>
            <NavigationBar></NavigationBar>


            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side border shadow-xl">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            role === 'buyer' && <li className='text-xl  font-bold'><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        }

                        {
                            role === 'seller' && <>
                                <li className='text-xl font-bold'><Link to='/dashboard/addProduct'>
                                    Add a Product</Link></li>

                                <li className='text-xl font-bold'><Link to='/dashboard/myProducts'>
                                    My Products</Link></li>

                            </>

                        }
                        {
                            role === 'admin' && <>
                                <li className='text-xl font-bold'><Link to='/dashboard/allSellers'>
                                    All Sellers</Link></li>

                                <li className='text-xl font-bold'><Link to='/dashboard/allBuyers'>
                                    All Buyers</Link></li>

                            </>

                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;