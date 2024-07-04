import React from 'react';
import './Footer.css';
import linkedin from '../Frame 39.svg';
import award from '../Frame 36.svg';
import { FaBehance, FaInstagram, FaFigma } from 'react-icons/fa';
import buttton from '../mingcute_right-line.svg';

const Footer = () => {
  const handleBookCallClick = () => {
    window.location.href = 'tel:+1234567890'; // Replace with the actual call URL or phone number
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="line-container ms-5 mt-5">
          <div className="line ms-1" />
          <p className='ms-1' style={{ fontSize: '32px' }} id='vb'>Get in touch</p>
        </div>
        <span className='lets'>Let’s Work Together</span>
        <p className='mkmkmk' id='vb'>If you want to hire me, work together, or just say hi, send me a message. <br /> I'll reply as soon as I can.</p>

        <div className="footer-sections mkkl">
          <div className="links">
            <p style={{ fontSize: '32px' }} id='vb'>Links</p>
            <ul>
              <li id='vb'><a className='mt-3' href="/about">About</a></li>
              <li id='vb'><a className='mt-3' href="/works">Works</a></li>
              <li id='vb'><a className='mt-3' href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="social">
            <p style={{ fontSize: '32px' }} id='vb'>Social</p>
            <div className="social-icons">
              <a href="https://www.behance.net/sarangkalarik" target="_blank" rel="noopener noreferrer">
                <FaBehance />
              </a>
              <a href="https://www.linkedin.com/in/sarang-kalarikkal/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.awwwards.com/sarang.uxd/" target="_blank" rel="noopener noreferrer">
                <img src={award} alt="Awwwards" />
              </a>
              <a href="https://www.instagram.com/s.uxd.in/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.figma.com/@saranguxd" target="_blank" rel="noopener noreferrer">
                <FaFigma />
              </a>
            </div>
          </div>

          <div className="contact-form ms-5">
            <p style={{ marginTop: "-32%", fontSize: '32px' }} id='vb'>Chat with me</p>
            <button 
              className="book-call-button" 
              style={{ padding: "10px 35px" }} 
              id='vb'
              onClick={handleBookCallClick}
            >
              Book a call
            </button>
            <p style={{ fontSize: '32px' }} id='vb' className='mt-5'>Or share more with me</p>
            <form>
              <input id='vb' type="text" name="name" placeholder="Name*" required />
              <input id='vb' type="email" name="email" placeholder="E-Mail*" required />
              <button style={{ width: '30%', whiteSpace: 'nowrap' }} id='vb' className='mt-3' type="submit">Submit</button>
            </form>
          </div>
        </div>

        <p id='vb' className="footer-note">Thank you for visiting this website</p>
      </div>
    </footer>
  );
};

export default Footer;
