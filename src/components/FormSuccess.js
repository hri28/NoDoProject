import React from 'react';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
    return (
        <div class="form-content-right" style={{background:"#FDFFAB"}}>
        <span className="close-btn"><Link to='/' >X</Link></span>
        <div class="form-success" style={{color:"#C9B2EF"}}>Signed Up successfully!
        </div>
            <img src="alert.jpg" alt="success-image" class="form-img-2" style={{width:"400px"}} />
        </div>
    );
};

export default FormSuccess;
