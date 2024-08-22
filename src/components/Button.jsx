// eslint-disable-next-line react/prop-types
export const Buttons = ({ text, icon, link, style }) => {
  return (
    <>
      <a className={style} href={link} target="_blank">
        {icon} {text}
      </a>
    </>
  );
};
