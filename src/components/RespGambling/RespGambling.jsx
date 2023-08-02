import Container from "../Container/Container";
import cube from "../../assets/Images/cube5.png";
import cube2 from "../../assets/Images/cube3.png";
import { dataGambling } from "../../assets/data/data";
import s from "./respGambling.module.css";

export default function RespGambling() {
  return (
    <>
      <Container>
        <div className={s.container}>
          <h2 className={s.title}>Responsible Gambling</h2>
          <div className={s.wrapper}>
            <p className={s.subTitle}>Overview</p>
            <p className={s.description}>
              AuditBet is driven by the belief in responsible and transparent
              online gambling. That is why we have developed a blockchain-based
              technology to address some of the industry’s major concerns:
              responsible gambling and underage betting.
            </p>
            <img className={s.cube} src={cube} alt="cube" />
            <img className={s.cube2} src={cube} alt="cube" />
          </div>
        </div>
        <ul className={s.list}>
          {dataGambling.map(({ id, image, title, description }) => (
            <li className={s.item} key={id}>
              <div className={s.topSection}>
                <p className={s.titleIcon}>{title}</p>
                <img className={s.imageIcon} src={image} alt={title} />
              </div>
              <p className={s.description}>{description}</p>
            </li>
          ))}
        </ul>
        <div className={s.scenario}>
          With AuditBet, operators have a reliable tool for enhancing
          transparency and promoting responsible gaming. We don’t just provide a
          product for operators to manage their businesses; we provide a tool
          for ensuring that these businesses are a positive influence in the
          world of online gaming. With AuditBet, responsible gaming and
          age-appropriate entertainment aren’t just goals — they’re assured
          realities.
        </div>
        <div className={s.borderedContainer}>
          In effect, AuditBet empowers Casino A to streamline its operations
          while creating an open, transparent communication line with
          authorities. This fosters mutual trust and sets the stage for a
          transparent iGaming environment.
        </div>
        <div className={s.scenario2}>
          Whether you’re a regulator seeking to modernize oversight, a tax
          authority wanting to streamline tax calculation and collection, or a
          concerned body looking to strengthen responsible gambling measures,
          AuditBet has a solution for you.
          <img className={s.cube3} src={cube2} alt="cube" />
        </div>
        <div className={s.infoContainer}>
          <p className={s.subTitleSecond}>
            <span className={s.boldText}>Interested?</span> We’re eager to show
            you how AuditBet can make your iGaming operations more transparent,
            fair, and profitable.
          </p>
        </div>
      </Container>
    </>
  );
}
