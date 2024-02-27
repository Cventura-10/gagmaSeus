import React, { useState } from 'react';
import Button from './common/Button';
import Input from './common/Input';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"/>
      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
