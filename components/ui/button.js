import Link from "next/link";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link} className={styles.btn}>
      {props.children}
    </Link>
  );
};

export default Button;