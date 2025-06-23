import React from 'react';

export default function Home() {
  return (
    <div style={{ maxWidth: 720, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Google Sheets Comparison Tool</h1>
      <p>This is a demo product homepage showcasing the tool and linking to the Paddle checkout page.</p>
      <h2>Features</h2>
      <ul>
        <li>Compare differences between two Google Sheets worksheets</li>
        <li>Supports Key Based and Direct Column comparison modes</li>
        <li>Integrated licensing verification system to ensure authorized use</li>
        <li>Fast deployment and easy scalability</li>
      </ul>
      <h2>Purchase Link</h2>
      <p><a href="https://your-paddle-checkout-link" target="_blank" rel="noopener noreferrer">Click here to buy the product</a></p>
      <h2>Contact Us</h2>
      <p>Email: support@example.com</p>
    </div>
  );
}
