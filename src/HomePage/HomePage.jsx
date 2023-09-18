import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="homepage">
      <main>
        <section className="login-container">
          <h2>Welcome to My App</h2>
          <p>Please log in to access the features.</p>
          <form className="login-form">
            <input type="text" className="login-input" placeholder="Username" />
            <input type="password" className="login-input" placeholder="Password" />
            <button type="submit" className="button-32">Login</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
