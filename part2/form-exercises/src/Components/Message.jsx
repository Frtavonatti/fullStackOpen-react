import React, { useEffect } from 'react';

const Message = ({ message, setMessage }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  return (
    <div 
      style={{ 
        border: '2px solid green',
        borderRadius: '5px',
        margin: '1rem',
        height: '3rem',
        color: 'green',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <h2>{message}</h2>
    </div>
  );
};

export { Message }