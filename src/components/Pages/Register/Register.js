import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const Register = () => {
    const { createUser, setUserInfo, googleLogIn } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        const imgUrl = form.image.value;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                setUserInfo(name, imgUrl)
                    .then(() => {
                        toast.success(`Welcome ${name}`);
                        navigate('/');

                        const userInfo = { name, email: user.email, role };
                        if (role === 'seller') {
                            userInfo.isVerified = false;
                        }

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
                    }).catch((error) => {
                        setRegisterError(error?.message);
                    });
                form.reset();
                navigate('/');
            })
            .catch(err => {
                setRegisterError(err.message);
            })

    }


    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(res => {
                setRegisterError('');
                const user = res.user;
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
                const userInfo = { name: user.displayName, email: user.email, role: 'buyer' };

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

                toast.success('Log In Successful.');
                navigate('/');
            })
            .catch(err => {
                setRegisterError(err.message);
            })
    }

    return (
        <div className='w-[95%] lg:w-[50%] mx-auto'>


            <form onSubmit={handleRegister} >
                <h1 className='text-2xl mt-5'>Name</h1>
                <input required name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full" />

                <h1 className='text-2xl mt-2'>Email</h1>
                <input required name='email' type="email" placeholder="Your Email" className="input input-bordered input-success w-full" />

                <h1 className='text-2xl mt-2'>Choose Password</h1>
                <input required name='password' type="password" placeholder="Choose Password" className="input input-bordered input-success w-full" />


                <h1 className='text-2xl mt-2'>Your Photo Url</h1>

                <input required name='image' type="text" placeholder="Your Photo Url" className="input input-bordered input-success w-full" />



                <h1 className='text-2xl mt-2'>Select Your Role</h1>

                <select name='role' className="select select-success w-full mt-4 max-w-xs">
                    <option selected>buyer</option>
                    <option>seller</option>

                </select>


                <p className='mb-3'><small>Already have an account? <Link className='underline text-blue-400 font-bold' to='/login'>Log In</Link> </small></p>

                <p className='text-red-500 font-bold'>{registerError && registerError}</p>

                <button type='submit' className='btn btn-success w-full my-5'>Register</button>



            </form>

            <button onClick={handleGoogleLogIn} className='btn btn-primary w-full'>Register With Google</button>


        </div>
    );
};

export default Register;