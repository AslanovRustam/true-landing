import Container from "../Container/Container";
import ScrollAnimation from "../../helpers/ScrollAnimation";
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
            <ScrollAnimation x={-100} y={0}>
              <h2 className={s.title}>Introduction</h2>
            </ScrollAnimation>
            <img className={s.icon} src={dots} alt="dots" />
          </div>
          <ScrollAnimation x={100} y={0}>
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
          </ScrollAnimation>
        </div>
        <div className={s.imageContainer}>
          <img className={s.image} src={video} alt="video" />
        </div>
        <img className={s.cube} src={cube} alt="cube" />
        <ul className={s.list}>
          {data.map(({ id, image, title, description }) => (
            <li className={s.item} key={id}>
              <ScrollAnimation x={0} y={100}>
                <div className={s.topSection}>
                  <p className={s.titleIcon}>{title}</p>
                  <img className={s.imageIcon} src={image} alt={title} />
                </div>
                <p className={s.description}>{description}</p>
              </ScrollAnimation>
            </li>
          ))}
        </ul>
        <div className={s.titleContainer2}>
          <div className={s.wrapper}>
            <ScrollAnimation x={-100} y={0}>
              <h2 className={s.title}>Conclusion</h2>
            </ScrollAnimation>
            <ScrollAnimation x={100} y={0}>
              <img className={s.icon} src={dots} alt="dots" />
            </ScrollAnimation>
          </div>
          <ScrollAnimation x={100} y={0}>
            <div className={s.subTitleContainer}>
              <p className={s.subTitle}>
                Trueplay’s B2G solution offers a revolutionary approach to
                online gambling regulation. We’re committed to creating a safe,
                transparent, and accountable environment for online gambling,
                aiding governments in their regulatory roles.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
}
