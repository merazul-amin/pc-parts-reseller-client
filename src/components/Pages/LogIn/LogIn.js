import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import SmallSpinner from '../../SharedPages/Spinner/SmallSpinner';

const LogIn = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const [logError, setLogError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (email && password) {
            logIn(email, password)
                .then((userCredential) => {
                    // Signed in 
                    setIsLoading(false);
                    const user = userCredential.user;
                    const UserEmail = { email: user.email };
                    const JwtEmail = { email: user.email };
                    setLogError('');
                    //handle jwt token 
                    fetch('https://server-gules-beta.vercel.app/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(JwtEmail)
                    })
                        .then(res => res.json())
                        .then(data => {
                            localStorage.setItem('token', data.token);
                        })


                    toast.success('Log In Successful.');
                    form.reset();
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    setLogError(error.message)
                });
        }
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(res => {
                setLogError('');
                const user = res.user;
                const UserEmail = { email: user.email };
                setLogError('');
                const userInfo = { email: user.email, role: 'buyer' };

                //set User in db
                fetch(`https://server-gules-beta.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                const JwtEmail = { email: user.email };
                //handle jwt token 

                fetch('https://server-gules-beta.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(JwtEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                    })
                toast.success('Log In Successful.');
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLogError(`${err.message}`);
            })
    }

    return (
        <div className='w-[95%] lg:w-[50%] my-10 mx-auto'>


            <form onSubmit={handleLogin} >
                <div>
                    <h1 className='font-bold'>Login info is given for testing purpose of all the routes.</h1>
                    <p>Admin:- admin@gmail.com</p>
                    <p>Buyer:- buyer@gmail.com</p>
                    <p>Seller:- seller@gmail.com</p>
                    <p>Password is same for all of them. Password is 123456</p>
                </div>

                <h1 className='text-2xl mt-2'>Email</h1>
                <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-success w-full" />

                <h1 className='text-2xl mt-2'>Your Password</h1>
                <input name='password' type="password" placeholder="Your Password" className="input input-bordered input-success w-full" />
                {
                    logError && <p className='text-red-400 font-bold'>{logError}</p>
                }

                <p className='mb-3'><small>New here? <Link className='underline text-blue-400 font-bold' to='/register'>Register</Link> </small></p>

                <button type='submit' className='btn btn-success w-full my-5'>
                    {isLoading ? <SmallSpinner></SmallSpinner> : 'Log In'}
                </button>



            </form>

            <button onClick={handleGoogleLogIn} className='btn btn-primary w-full'>LogIn With Google</button>


        </div>
    );
};

export default LogIn;