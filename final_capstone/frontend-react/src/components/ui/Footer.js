import React from 'react';
import './footer.css';

const Footer = () => {
  const quickLinks = [
    {
      page_id: 4,
      link: '/mylist',
      name: 'My List',
      active: false,
    },
    {
      page_id: 5,
      link: '/termsofconditions',
      name: 'Terms Of Conditions',
      active: false,
    },
    {
      page_id: 6,
      link: '/privacypolicy',
      name: 'Privacy Policy',
      active: false,
    },
  ];

  const locations = [
    {
      page_id: 7,
      link: '/nyc',
      name: 'New York City, NY',
      active: false,
    },
    {
      page_id: 8,
      link: '/losangeles',
      name: 'Los Angeles, CA',
      active: false,
    },
    {
      page_id: 9,
      link: '/dallas',
      name: 'Dallas, TX',
      active: false,
    },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12">
              <div className="footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  <span>BlueMoon Cinema</span>
                </a>
                <p>
                  Welcome to BlueMoon Cinema, where every frame tells a story. Our mission is to bring you the magic of cinema, from timeless classics to the latest blockbusters. Join us in celebrating the art of filmmaking and immerse yourself in unforgettable cinematic experiences. Grab your popcorn, find your seat, and let the show begin!
                </p>
              </div>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#" className="linkedin">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((page) => (
                    <li key={page.page_id} className={page.active ? 'active' : ''}>
                      <a href={page.link}>{page.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-links">
                <h4>Our Cinemas</h4>
                <ul>
                  {locations.map((page) => (
                    <li key={page.page_id} className={page.active ? 'active' : ''}>
                      <a href={page.link}>{page.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copywright">
        <p>&copy; Copyright {new Date().getFullYear()} BlueMoon Cinema. All Rights Reserved.</p>
      </div>
      <div className="credits">
        <p> Developed based on{' '}
          <a
            href="https://www.youtube.com/watch?v=0mdjgQdQF1k&t=27s"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
          >
          Crafting the Ultimate Cinema Movie Website with React.js
          </a>{' '}
          by <span style={{ color: 'red', fontWeight: 'bold' }}>DStudio Technology</span>
        </p>
        <p>
          Additional functionality and backend implementation by{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>Nuha Siddiqui</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
