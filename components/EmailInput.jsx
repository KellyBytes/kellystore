'use client';
import { useState } from 'react';

useState;

export default function EmailInput() {
  const [email, setEmail] = useState('');

  async function handleAddSubscriber() {
    try {
      // write the post fetch request to send off the email to a service that you use to build up your email list
    } catch (err) {
      console.log('Failed to add subscriber: ', err.message);
    }
  }

  return (
    <div className="sign-up">
      <input
        type="email"
        placeholder="Email address..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddSubscriber} className="button-card">
        Sign Up
      </button>
    </div>
  );
}
