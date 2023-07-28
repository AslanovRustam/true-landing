import s from "./button.module.css";

export default function Button({ type, text, onClick }) {
  return (
    <button className={s.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
