import React, { useEffect } from 'react';
const User = ({ name }) => {

  const [count] = React.useState(0);
  const [count2] = React.useState(1);

  useEffect(() => {

  }, [])
  
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Vishakapatnam</h3>
      <h4>Contact: @udayteja.com</h4>
    </div>
  );
}

export default User;