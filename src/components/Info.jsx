import yo from "../assets/images/yo-mero.jpg";
import "../styles/info.css";
import { Buttons } from "./Button";

export const Info = () => {
  return (
    <>
      <img src={yo} alt="profile image" className="profile-img" />
      <div className="text-group">
        <h1 className="group-name">Ignacio Diaz</h1>
        <h3 className="group-career">Frontend Developer</h3>
        <a
          className="website"
          href="https://ignacio-diaz-portfolio.netlify.app/"
          target="_blank">
          my.website
        </a>
        <div className="button-group">
          <Buttons
            style="email-btn"
            icon={<i className="fa-solid fa-envelope"></i>}
            link="mailto:ignaciodiaz98@gmail.com"
            text="Email"
          />
          <Buttons
            style="link-btn"
            link="https://www.linkedin.com/in/ignacio-diaz-462803200"
            icon={<i className="fa-brands fa-linkedin"></i>}
            text="LinkedIn"
          />
        </div>
      </div>
    </>
  );
};
