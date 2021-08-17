import React from 'react';

const MyHeader: React.FC = () => {

  return (
    <div style={{
      backgroundColor: '#ffe6ec',
      padding: '8px 12px',
      color: '#000000',
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