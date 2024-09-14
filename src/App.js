// src/App.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg'; // Import image2 // Import image
import product from './product';

const App = () => {
  const firstName = "Sonny"; // Replace with your actual first name or leave empty

  return (
    <Container>
      <Card style={{ width: '18rem', margin: '20px auto', padding: '20px' }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <img src={image1} alt="Product" style={{ width: '100%' }} /> 
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>{firstName ? `Hello, ${firstName}` : "Hello, there!"}</h2>
        {firstName && <img src={image2} alt="Jeep" style={{width: '200px', height: '300px' }} />}
      </div>
    </Container>
  );
}

export default App;
