import React from "react";
import "../resources/footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footercontainer">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p className="footer_para">
              Professional out-of-the-box resumes, instantly generated by the
              most advanced resume builder technology available.
            </p>
            <ul className="sci">
              <li>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <div className="sec quickLinks">
            <h2>Resources</h2>
            <p>Resume builder</p>
            <p>Resume templates</p>
            <p>Resume formatting</p>
            <p>Resources </p>
            <p>Resume writing guide</p>
          </div>

          <div className="sec quickLinks">
            <h2>Learn</h2>
            <p>Professional resume </p>
            <p>Entry-level resume</p>
            <p> Student resume</p>
            <p>Resume writing</p>
          </div>

          <div className="sec contact">
            <h2>Contact Info</h2>
            <ul className="padding_left info">
              <li>
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <p>
                  <a href="tel:12345678900">+1 234 567 8900</a>
                </p>
              </li>
              <li>
                <span>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <p>
                  <a href="mailto:support@gamil.com">support@resumebuild.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright © 2022 By Sangeetha.</p>
      </div>
    </div>
  );
};

export default Footer;