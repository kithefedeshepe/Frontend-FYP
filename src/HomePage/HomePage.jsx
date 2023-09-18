import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="homepage">
      <main>
      <h2 className="h2">WELCOME</h2>
        <section className="login-container">
          <div className="left-box">
            {/* Content for the left box */}
          </div>
          <form className="login-form">
          <p>COVID-19 Imaging Recognition System</p>
            <input type="text" className="login-input" placeholder="Username" />
            <input type="password" className="login-input" placeholder="Password" />
            <button type="submit" className="login-button">Login</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
