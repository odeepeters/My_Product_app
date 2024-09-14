// // src/Image.js
// import React from 'react';
// import product from './product';

// const Image = () => {
//   return <img src={product.image} alt={product.name} style={{ width: '100%' }} />;
// };

// export default Image;

// src/Image.js
import React from 'react';

const Image = ({ image }) => {
  return <img src={image} alt="Product" style={{ width: '100%' }} />;
};

export default Image;

