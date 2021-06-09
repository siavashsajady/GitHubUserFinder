import React from 'react';

export const Alertmessage = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-search' />
        {alert.message}
      </div>
    )
  );
};

export default Alertmessage;
