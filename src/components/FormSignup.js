import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './FormSignup.css';
import { Link } from 'react-router-dom';
//import Login1 from './Login1';


const FormSignup = ({submitForm}) => {
const { handleChange, values, handleSubmit, errors}= useForm(submitForm, validate);

    return (
        <div className ="form-content-right" style={{background: "#FDFFAB"}}>
            <form className="form" onSubmit={handleSubmit}>
                
                <div className="form-inputs">
                    <div className="input-group" >
                    <div className="input-group-prepend">
                            <span className="input-group-text"><i class="fa fa-user-o cust" aria-hidden="true"></i></span>
                        </div>
                    <input 
                    id="username" 
                    type="text" 
                    name="username"
                    className="form-input" 
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                    />
                    
                    
                    {errors.username && <p>{errors.username}</p>}
                    </div>
                </div>
                <div className="form-inputs">
                <div className="input-group" mb-3>
                    <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-envelope-o cust" aria-hidden="true"></i></span>
                        </div>
                    <input 
                    id="email"
                     type="email" 
                     name="email"
                    className="form-input" 
                    placeholder="email/phone"
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    </div>
                </div>
                <div className="form-inputs">
                <div className="input-group" mb-3>
                    <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-lock cust" aria-hidden="true"></i></span>
                        </div>
                    <input
                     id="password" 
                     type="password" 
                     name="password"
                    className="form-input"
                     placeholder="password"
                     value={values.password}
                    onChange={handleChange}
                     />
                     {errors.password && <p>{errors.password}</p>}
                     </div>
                </div>
                <div className="form-inputs">
                <div className="input-group" mb-3>
                    <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-lock cust" aria-hidden="true"></i></span>
                        </div>
                    <input 
                    id="password2"
                     type="password" 
                     name="password2"
                    className="form-input"
                     placeholder="retype your password"
                     value={values.password2}
                    onChange={handleChange}
                     />
                     {errors.password2 && <p>{errors.password2}</p>}
                     </div>
                </div>
                <button className="form-input-btn" type="submit">Sign up</button>
                <span className="form-input-login">Already have an account? login
                <Link to='/login1'> here</Link>
                </span>
            </form>
        </div>
    );
};

export default FormSignup
