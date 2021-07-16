import React, {useState} from 'react';
import Login from './Login';
import LoginSuccess from './LoginSuccess';
import './Form.css';

const Login1 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="img23">
            <div className="form-container">
        
        <div className="form-content-left">
            <img src="/login1.png" alt="degign" className="form-img"/>
        </div>
        {!isSubmitted ? <Login submitForm={submitForm} /> : <LoginSuccess /> }
        </div>
        </div>
        </>
    );
};

export default Login1;
