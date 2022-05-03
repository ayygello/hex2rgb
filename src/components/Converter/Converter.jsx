import React, { useState } from 'react';
import hexToRgb from './util';

const Converter = () => {
  const [hex, setHex] = useState('#');
  const [rgb, setRgb] = useState('');

  const handleOnChange = ({ target: { value } }) => {
    setHex(() => {
      if (value.length === 7) {
        setRgb(hexToRgb(value));
      }
      return value;
    });
  };

  return (
    <div className='wrapper' style={{ background: rgb }}>
      <form>
        <input
          className='hex-input'
          type='text'
          value={hex}
          maxLength={7}
          onChange={handleOnChange}
        />
        <input className='rgb-input' type='text' value={rgb} disabled />
      </form>
    </div>
  );
};

export default Converter;
