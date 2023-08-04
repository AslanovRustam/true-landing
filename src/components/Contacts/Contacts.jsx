import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import cube1 from "../../assets/Images/cube5.png";
import cube2 from "../../assets/Images/cube4.png";
import s from "./contacts.module.css";
import ScrollAnimation from "../../helpers/ScrollAnimation";

export default function Contacts() {
  const [formData, setFormData] = useState({
    country: "",
    name: "",
    email: "",
    governmentalBody: "",
  });
  const [showErrors, setShowErrors] = useState({
    country: false,
    name: false,
    email: false,
    governmentalBody: false,
  });
  const [wrongInput, setWrongInput] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(value)) {
      setWrongInput("Wrong email");
      return;
    }
    setWrongInput("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateEmail(formData.email);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newShowErrors = {};
    let hasError = false;

    Object.keys(formData).forEach((inputKey) => {
      if (!formData[inputKey]) {
        newShowErrors[inputKey] = true;
        hasError = true;
      } else {
        newShowErrors[inputKey] = false;
        hasError = false;
      }
    });

    setShowErrors(newShowErrors);

    if (!hasError) {
      setFormData({
        country: "",
        name: "",
        email: "",
        governmentalBody: "",
      });
    }
  };

  return (
    <div className={s.сontainer}>
      <ScrollAnimation x={-100} y={0}>
        <h2 className={s.title}>Contact us</h2>
      </ScrollAnimation>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.name}>Country</span>
          <ReactFlagsSelect
            className={s.selectCountry}
            selectButtonClassName={s.input}
            selected={formData.country}
            onSelect={(code) => setFormData({ ...formData, country: code })}
            placeholder="Choose an option"
            searchable={true}
          />
          {showErrors.country && (
            <span className={s.error}>Please, choose Country</span>
          )}
        </label>
        <label className={s.label}>
          <span className={s.name}>Name</span>
          <input
            className={s.input}
            name="name"
            placeholder="Type your name"
            value={formData.name}
            onChange={handleChange}
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="value may contain only numbers"
            required
          />
          {showErrors.name && (
            <span className={s.error}>Please, fill Name</span>
          )}
        </label>
        <label className={s.label}>
          <span className={s.name}>Email</span>
          <input
            className={`${s.input} ${wrongInput ? s.inputWrongMail : ""}`}
            name="email"
            placeholder="Type your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {wrongInput && <p className={s.wrongInput}>{wrongInput}</p>}
          {showErrors.email && (
            <span className={s.error}>Please, fill Email</span>
          )}
        </label>
        <label className={s.label}>
          <span className={s.name}>Governmental Body</span>
          <input
            className={s.input}
            name="governmentalBody"
            placeholder="Type your Governmental Body"
            value={formData.governmentalBody}
            onChange={handleChange}
            required
          />
          {showErrors.governmentalBody && (
            <span className={s.error}>Please, fill Governmental Body</span>
          )}
        </label>
        <button
          type="submit"
          className={`${s.button} ${
            formData.name !== "" &&
            formData.email !== "" &&
            formData.governmentalBody !== ""
              ? s.active
              : ""
          }`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <img className={s.cube1} src={cube1} alt="cube 1" />
      <img className={s.cube2} src={cube2} alt="cube 2" />
    </div>
  );
}
