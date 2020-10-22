import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 my-5">
             <h1>Your New Smile!!<br/> Start Here</h1>
             <p>
             We are committed to ensuring that you and your family receive the best possible dental treatment and care from our friendly, gentle and reliable dentists in a comfortable environment.
             </p>
             <button type="button" class="btn btn-primary btn-lg">GET APPOINTMENT</button>
            </div>


            <div className="col-md-6">
                 <img src={chair} className="img-fluid ml-auto" alt="Responsive image"/>
            </div>
        
        </div>
    );
};

export default HeaderMain;