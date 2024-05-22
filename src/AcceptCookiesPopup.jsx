import React, { useState } from 'react';

const AcceptCookiesPopup = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    document.documentElement.style.overflow = 'auto';
  };

  const handleDeny = () => {
    setAccepted(false);
  };

  return (
    <div className={`accept-cookies-popup ${accepted ? 'hidden' : ''}`}>
      <div className="overlay"></div>
      <div className="popup-content">
        <p> 
            <span>3D Scroll in React | Lucas Hagfoss</span> <br />
            This website uses cookies. Do you accept?
        </p>
        <button className='spring' onClick={handleAccept}>Accept</button>
        <button className='spring' onClick={handleDeny}>Deny</button>
      </div>
    </div>
  );
}

export default AcceptCookiesPopup;