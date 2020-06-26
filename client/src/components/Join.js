import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div className='JoinOuterContainer'>
      <div className='JoinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div>
          <input placeholder='' className='joinInput' type='text' onChange={} />
        </div>
        <div>
          <input placeholder='' className='joinInput' type='text' onChange={} />
        </div>
        <Link></Link>
        <div></div>
      </div>
    </div>
  );
};

export default Join;
