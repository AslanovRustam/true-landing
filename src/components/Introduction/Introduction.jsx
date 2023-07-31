import Container from "../Container/Container";
import video from "../../assets/Images/video2.png";
import cube from "../../assets/Images/cube2.png";
import dots from "../../assets/Images/dots.svg";
import { data } from "../../assets/data/data";
import s from "./introduction.module.css";

export default function Introduction() {
  return (
    <Container>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <div className={s.wrapper}>
            <h2 className={s.title}>Introduction</h2>
            <img className={s.icon} src={dots} alt="dots" />
          </div>
          <div className={s.subTitleContainer}>
            <p className={s.subTitle}>
              Navigating the complex landscape of online gambling can be a
              daunting task for any government. At Trueplay, we understand the
              challenges you face in ensuring&nbsp;
              <span>
                fair play, preventing problem gambling, and collecting taxes.
              </span>
              We offer a blockchain-based solution that brings unprecedented
              transparency and efficiency to online gambling regulation.
            </p>
          </div>
        </div>
        <div className={s.imageContainer}>
          <img className={s.image} src={video} alt="video" />
        </div>
        <img className={s.cube} src={cube} alt="cube" />
        <ul className={s.list}>
          {data.map(({ id, image, title, description }) => (
            <li className={s.item} key={id}>
              <div className={s.topSection}>
                <p className={s.titleIcon}>{title}</p>
                <img className={s.imageIcon} src={image} alt={title} />
              </div>
              <p className={s.description}>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
