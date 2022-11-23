import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const LogIn = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (email && password) {
            logIn(email, password)
                .then((userCredential) => {
                    // Signed in 

                    const user = userCredential.user;
                    const email = { email: user.email };

                    toast.success('Log In Successful.');
                    form.reset();
                    navigate(from, { replace: true });
                })
                .catch((error) => {

                });
        }

    }
    return (
        <div className='w-[95%] lg:w-[50%] mx-auto'>


            <form onSubmit={handleLogin} >

                <h1 className='text-2xl mt-2'>Email</h1>
                <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-success w-full" />

                <h1 className='text-2xl mt-2'>Your Password</h1>
                <input name='password' type="password" placeholder="Your Password" className="input input-bordered input-success w-full" />

                <p className='mb-3'><small>New here? <Link className='underline text-blue-400 font-bold' to='/register'>Register</Link> </small></p>


                <button type='submit' className='btn btn-success w-full my-5'>Log In</button>



            </form>

            <button className='btn btn-primary w-full'>LogIn With Google</button>


        </div>
    );
};

export default LogIn;