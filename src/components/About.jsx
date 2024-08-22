import "../styles/about.css";
// eslint-disable-next-line react/prop-types
export const About = ({ title, paragraph }) => {
  return (
    <>
      <div className="about-container">
        <h3 className="about-title">{title}</h3>
        <p className="about-paragraph">{paragraph}</p>
      </div>
    </>
  );
};
