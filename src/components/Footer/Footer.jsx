import { CONTACT } from "../../assets/data/data.js";
import "./Footer.css";
import { FaGithub, FaPhone, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <footer>
      <h1>Contact</h1>
      <div className="social">
        <ul>
          <li>
            <a href="https://github.com/laislodi/" target="_blank">
              <IconContext.Provider value={{ 
                  size: "80px", 
                  color: "var(--white)",
                  className: "icon"
                }}>
                <div>
                  <FaGithub />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/laislodi/" target="_blank">
            <IconContext.Provider value={{ 
                  size: "80px", 
                  color: "var(--white)", 
                  className: "icon"
                }}>
                  <div>
                  <FaLinkedin className="icon"/>
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="mailto:gabriellelodi@gmail.com" target="_blank">
            <IconContext.Provider value={{ 
                  size: "80px", 
                  color: "var(--white)", 
                  className: "icon"
                }}>
                  <div>
                    <FaMailBulk className="icon"/>
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="tel:+1(778)513-2710" target="_blank">
            <IconContext.Provider value={{ 
                  size: "80px",
                  color: "var(--white)",
                  className: "icon"
                }}>
                  <div>
                    <FaPhone className="icon"/>
                </div>
              </IconContext.Provider>
            </a>
          </li>
        {/* {CONTACT.map((contact) => <li>
            <a href={contact.url} target="_blank"><img src={contact.image} alt={contact.title} /></a>
          </li>
        )} */}
        </ul>
      </div>
    </footer>
  );
};
