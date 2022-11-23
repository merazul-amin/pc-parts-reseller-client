import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                toast.success('Registration Successful.')
                form.reset();
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div className='w-[95%] lg:w-[50%] mx-auto'>


            <form onSubmit={handleRegister} >
                <h1 className='text-2xl mt-5'>Name</h1>
                <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full" />

                <h1 className='text-2xl mt-2'>Email</h1>
                <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-success w-full" />

                <h1 className='text-2xl mt-2'>Choose Password</h1>
                <input name='password' type="password" placeholder="Choose Password" className="input input-bordered input-success w-full" />


                <h1 className='text-2xl mt-2'>Select Your Role</h1>

                <select name='role' className="select select-success w-full mt-4 max-w-xs">
                    <option selected>buyer</option>
                    <option>seller</option>

                </select>


                <p className='mb-3'><small>Already have an account? <Link className='underline text-blue-400 font-bold' to='/login'>Log In</Link> </small></p>

                <button type='submit' className='btn btn-success w-full my-5'>Register</button>



            </form>

            <button className='btn btn-primary w-full'>Register With Google</button>


        </div>
    );
};

export default Register;