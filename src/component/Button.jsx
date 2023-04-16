import classNames from "classnames";

const Button = ({ className, children, type, outline, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};
export default Button;
