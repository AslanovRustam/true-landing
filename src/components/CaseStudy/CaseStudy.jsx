import Container from "../Container/Container";
import ScrollAnimation from "../../helpers/ScrollAnimation";
import equal from "../../assets/Images/equal.png";
import arrow from "../../assets/Images/arrow.png";
import cube from "../../assets/Images/cube2.png";
import s from "./caseStudy.module.css";

export default function CaseStudy() {
  return (
    <Container>
      <div className={s.container}>
        <ScrollAnimation x={-100} y={0}>
          <p className={s.subTitle}>Case Study</p>
        </ScrollAnimation>
      </div>
      <div className={s.wrapper}>
        <ScrollAnimation x={-100} y={0}>
          <div className={s.description}>
            To fully understand the impact of AuditBet, let’s step into the
            shoes of Casino A. Imagine Casino A is a popular online platform,
            with thousands of players placing bets daily. In one month, the
            total bets made by players amount to a staggering $10M. <br></br>{" "}
            <br></br>
            However, players also win. Out of the $10M in total bets, players
            win back $9M. This leaves Casino A with a Gross Gaming Revenue (GGR)
            of $1M.
          </div>
        </ScrollAnimation>
        <ScrollAnimation x={100} y={0}>
          <div className={s.values}>
            <div className={s.itemValue}>
              <p className={s.amount}>$10M</p>
              <p className={s.in}>in total bets</p>
              <img className={s.image} src={arrow} alt="arrow" />
            </div>
            <div className={s.itemValue}>
              <p className={s.amount}>$9M</p>
              <p className={s.in}>in winnings</p>
              <img className={s.image} src={equal} alt="equal" />
            </div>
            <div className={s.itemValue}>
              <p className={s.amount}>$1M</p>
              <p className={s.in}>GGR</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className={s.subTitleContainer}>
        <p className={s.subTitleSecond}>
          Normally, Casino A would need to manually calculate the GGR, track all
          the transactions, and report it all to the authorities, creating space
          for potential errors, inefficiencies, and lack of transparency.
        </p>
      </div>
      <div className={s.scenario}>
        <p className={s.intro}>
          Now, let’s reimagine this scenario with AuditBet in the picture.
        </p>
        From the moment AuditBet is integrated, it starts working as a proxy,
        sitting at the core of every gaming transaction. Each bet, win, or
        rollback is instantly recorded and stored on the blockchain, creating a
        transparent, immutable record. The total bets and the total wins are
        monitored in real time. <br></br> <br></br>
        At the end of the month, AuditBet can instantly calculate the GGR for
        Casino A. It isn’t just a random figure on a page; it’s a result backed
        by a complete record of the month’s transactions, openly verifiable in
        the Explorer.
      </div>
      <div className={s.scenarioSecond}>
        In our hypothetical case, the country where Casino A operates has a 15%
        tax on the GGR. With the GGR accurately calculated at $1M, the tax
        payable comes out to be $150,000.<br></br> <br></br> AuditBet provides
        an open-source solution — the tax authorities don’t have to rely on
        Casino A’s reports. They can access the GGR directly, calculate the tax
        independently, and cross-verify it with the casino’s payments, ensuring
        accuracy and eliminating any potential discrepancy.
      </div>
      <div className={s.borderedContainer}>
        In effect, AuditBet empowers Casino A to streamline its operations while
        creating an open, transparent communication line with authorities. This
        fosters mutual trust and sets the stage for a transparent iGaming
        environment.
      </div>
      <div className={s.container}>
        <ScrollAnimation x={-100} y={0}>
          <p className={s.subTitleAudit}>
            Take Control <br className={s.mob}></br>with AuditBet
          </p>
        </ScrollAnimation>
      </div>
      <div className={`${s.scenario} ${s.unsetMargin}`}>
        Get ready to experience superior accuracy, real-time data access, and
        ease of tax calculation. With AuditBet, ensure every gaming activity is
        tracked, every taxable cent is accounted for, and the trust between
        iGaming operators and regulatory authorities is fortified.<br></br>{" "}
        <br></br>The future of iGaming is transparent, efficient, and regulated
        — and it’s happening right now with AuditBet. As we revolutionize the
        online gaming industry, we invite you to come on board and experience
        the difference.
        <img className={s.cube} src={cube} alt="cube" />
      </div>
      <div className={s.subTitleContainer}>
        <p className={s.subTitleSecond}>
          Whether you’re a regulator seeking to modernize oversight, a tax
          authority wanting to streamline tax calculation and collection, or a
          concerned body looking to strengthen responsible gambling measures,
          AuditBet has a solution for you.
        </p>
      </div>
      <div className={s.infoContainer}>
        <p className={s.subTitleSecond}>
          <span className={s.boldText}>Interested?</span> We’re eager to show
          you how AuditBet can make your iGaming operations more transparent,
          fair, and profitable.
        </p>
      </div>
    </Container>
  );
}
