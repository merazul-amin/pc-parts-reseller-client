import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const LogIn = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const [logError, setLogError] = useState('');
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

                    const userInfo = {
                        name: user.displayName,
                        email: user.email,
                        role: 'buyer'
                    };

                    //set User in db
                    fetch(`http://localhost:5000/users`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))

                    toast.success('Log In Successful.');
                    form.reset();
                    navigate(from, { replace: true });
                })
                .catch((error) => {

                });
        }

    }

    const handleGoogleLogIn = () => {

        googleLogIn()
            .then(res => {
                setLogError('');
                const user = res.user;
                const email = { email: user.email };



                const userInfo = { email: user.email, role: 'buyer' };

                //set User in db
                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                //handle jwt token 

                // fetch('https://assignment-11-server-khaki.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(email)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         localStorage.setItem('token', data.token);
                //     })

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

                <h1 className='text-2xl mt-2'>Email</h1>
                <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-success w-full" />

                <h1 className='text-2xl mt-2'>Your Password</h1>
                <input name='password' type="password" placeholder="Your Password" className="input input-bordered input-success w-full" />

                <p className='mb-3'><small>New here? <Link className='underline text-blue-400 font-bold' to='/register'>Register</Link> </small></p>


                <button type='submit' className='btn btn-success w-full my-5'>Log In</button>



            </form>

            <button onClick={handleGoogleLogIn} className='btn btn-primary w-full'>LogIn With Google</button>


        </div>
    );
};

export default LogIn;