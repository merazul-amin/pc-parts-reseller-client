import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        console.log(name, email, password, role);
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

                <button type='submit' className='btn btn-success w-full my-5'>Register</button>

                <p className='mb-3'><small>Already have an account? <Link className='underline text-blue-400 font-bold' to='login'>Log In</Link> </small></p>


            </form>

            <button className='btn btn-primary w-full'>Register With Google</button>


        </div>
    );
};

export default Register;