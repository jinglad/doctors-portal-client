import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:"700px"}} className="row align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus natus rerum magnam recusandae, repellat facilis dolores animi fugiat asperiores sapiente culpa excepturi! Ullam a, repudiandae deleniti facere voluptates illum?</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;