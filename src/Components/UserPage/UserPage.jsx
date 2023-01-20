import React, { useState, useEffect } from 'react';

function UserPage({ match }) {
  const [user, setUser] = useState(null);
  const userId = match.params.id;

  useEffect(() => {
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
    setUser(data);
    });
    }, [userId]);
    
    if (!user) {
    return <div>Loading...</div>;
    }
    
    return (
    <div>
    <h1>Welcome {user.name}</h1>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    </div>
    );
    }
    
    export default UserPage;
