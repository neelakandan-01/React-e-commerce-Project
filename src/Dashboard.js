import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Home</h2>
      <Link to={'/products'}><button>View Products</button></Link>
    </div>
  );
};

export default Dashboard;
