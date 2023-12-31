import ScrollAnimation from "../../helpers/ScrollAnimation";
import Container from "../Container/Container";
import Button from "../Button/Button";
import video from "../../assets/Images/video1.png";
import cube from "../../assets/Images/cube1.png";
import s from "./hero.module.css";

export default function Hero() {
  return (
    <Container>
      <div className={s.container}>
        <div className={s.left}>
          <ScrollAnimation x={-100} y={0}>
            <h2 className={s.title}>
              Regulating Online Gambling with Transparency and Efficiency
            </h2>
          </ScrollAnimation>
          <ScrollAnimation x={100} y={0}>
            <p className={s.description}>
              A solution founded on blockchain technology, ushering in an
              unparalleled level of transparency and efficiency in the
              regulation of online gambling.
            </p>
          </ScrollAnimation>
          <div className={s.btnContainer}>
            <Button
              type="button"
              text="Learn more"
              onClick={() => console.log("click")}
            />
          </div>
        </div>
        <img className={s.image} src={video} alt="video" />
        <img className={s.cube} src={cube} alt="cube" />
      </div>
    </Container>
  );
}
