import React from 'react';
import config from '../../config/config';
const { baseURL } = config;



const MyHeader: React.FC = () => {

  return (
    <div style={{
      backgroundColor: '#000000',
      padding: '8px 12px',
      color: 'white',
      fontSize: 30,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    }}>
      한국어 공부하자! for Mizu.
    </div>
  );
}

export default MyHeader;