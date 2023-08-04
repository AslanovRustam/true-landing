import Container from "../Container/Container";
import ScrollAnimation from "../../helpers/ScrollAnimation";
import cube from "../../assets/Images/cube2.png";
import cube2 from "../../assets/Images/cube6.png";
import cube3 from "../../assets/Images/cube7.png";
import decoration from "../../assets/Images/decoration.png";
import s from "./auditBet.module.css";

export default function AuditBet() {
  return (
    <Container>
      <div className={s.container}>
        <ScrollAnimation x={100} y={0}>
          <h2 className={s.title}>
            AuditBet <br className={s.mob}></br> Explorer
          </h2>
        </ScrollAnimation>
        <div className={s.wrapper}>
          <p className={s.description}>
            Welcome to Explorer — a real-time monitoring tool for online
            gambling. With Explorer, we bring the power of blockchain technology
            to offer transparency of every gambling transaction while keeping
            data privacy.
          </p>

          <img className={s.cube} src={cube} alt="cube" />
          <img className={s.cube2} src={cube2} alt="cube" />
        </div>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <ScrollAnimation x={0} y={100}>
            <p className={s.subTitle}>Embracing Real-Time Transparency</p>
            <p className={s.subDescription}>
              Transparency in online gambling is no longer a lofty ideal — it’s
              an achievable goal. With Explorer, you get real-time insights into
              every transaction happening on any AuditBet Explorer-integrated
              platform. From the smallest bet to the largest win, every rollback
              and payout — all events are recorded, accessible, and completely
              transparent.
            </p>
          </ScrollAnimation>
        </li>
        <li className={s.item}>
          <ScrollAnimation x={0} y={50}>
            <p className={s.subTitle}>Ensuring Anonymity, Always</p>
            <p className={s.subDescription}>
              We strike a perfect balance between transparency and privacy. All
              data available on Explorer is fully anonymized. Although player
              and casino identities are hashed and remain confidential, the
              information related to transactions remains transparent and
              accessible.
            </p>
          </ScrollAnimation>
        </li>
      </ul>
      <div className={s.containerOptions}>
        <ScrollAnimation x={-100} y={0}>
          <p className={s.subTitleOptions}>
            A World of Comprehensive Search Options
          </p>
        </ScrollAnimation>
      </div>
      <div className={s.wrapperOptions}>
        <div className={s.descriptionOptions}>
          AuditBet Explorer is all about making data accessible. That’s why
          we’ve built a search function, allowing you to deep dive into the data
          by casino ID, player ID (hash), game name, or game provider name. Rest
          assured, while you uncover the insights you need, anonymity is always
          preserved.
        </div>
        <img className={s.decoration} src={decoration} alt="decoration" />
      </div>
      <div className={s.infoContainer}>
        <p className={s.subTitleSecond}>
          The future of iGaming is transparent, efficient, and regulated — and
          it’s happening right now with AuditBet. As we revolutionize the online
          gaming industry, we invite you to come on board and make a difference.
        </p>
      </div>
      <div className={s.scenario2}>
        Whether you’re a regulator seeking to modernize oversight, a tax
        authority wanting to streamline tax calculation and collection, or a
        concerned body looking to strengthen responsible gambling measures,
        AuditBet has a solution for you.
        <img className={s.cube3} src={cube3} alt="cube" />
      </div>
      <div className={s.infoContainer}>
        <p className={s.subTitleSecond}>
          <span className={s.boldText}>Interested?</span> We’re eager to show
          you how AuditBet can make your iGaming operations more transparent,
          fair, and profitable.<br></br>
          <br></br> With Explorer, we take a step further in our commitment to
          bringing transparency, privacy, and data accessibility into online
          gambling. This is not just a tool, but a testament to the potential of
          blockchain technology in transforming the iGaming industry.
        </p>
      </div>
    </Container>
  );
}
