import { Buttons } from "./Button";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <Buttons icon={<i className="fa-brands fa-square-twitter"></i>} />
      <Buttons icon={<i className="fa-brands fa-square-facebook"></i>} />
      <Buttons icon={<i className="fa-brands fa-square-instagram"></i>} />
      <Buttons
        icon={<i className="fa-brands fa-square-github"></i>}
        link="https://github.com/NachoCheeseOfDoom"
      />
    </div>
  );
};
