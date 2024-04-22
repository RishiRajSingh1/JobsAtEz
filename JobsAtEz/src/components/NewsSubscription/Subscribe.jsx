import React, { useState } from 'react';
import './Subscribe.scss';
import axios from 'axios';
import { Input } from "@/components/ui/input"


const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:4000/api/subscription', { email });
      setSubscribed(true);
      setEmail('');
      setError('');
    } catch (err) {
      setError('Failed to subscribe. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="subscribe">
      <h1>Newsletter Subscription</h1>
      <h3>Subscribe to our newsletter to get new freelance work and projects</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" style={{cursor:"pointer"}}>Subscribe</button>
      </form>
      {subscribed && <p className="success-message">Subscribed successfully!</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Subscribe;
