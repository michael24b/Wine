import classes from "./Button.module.css";
const LoginButton = (props) => {
  return (
    <div className={classes.background}>
      <button onClick={props.onClick} className={classes.btn}>
        <h3>Login</h3>
        <img
          className={classes.img}
          src="https://img.icons8.com/arcade/64/000000/wine.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default LoginButton;
