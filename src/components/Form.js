import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';
//import {Link} from 'react-router-dom';


const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
        <div className="img23">
        <div className="form-container" >
        
        <div className="form-content-left">
            <img src="signup1.png" alt="design" className="form-img"/>
        </div>
        
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess /> }
       
        </div>
        
         </div>   
            
        </>
    );
};

export default Form;
