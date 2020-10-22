import React from 'react';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4">
            <div>
              <h5>{info.title}</h5>
              <small>{info.description}</small>
            </div>
            
        </div>
    );
};

export default InfoCard;