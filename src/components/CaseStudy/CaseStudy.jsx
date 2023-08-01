import Container from "../Container/Container";
import equal from "../../assets/Images/equal.png";
import arrow from "../../assets/Images/arrow.png";
import s from "./caseStudy.module.css";

export default function CaseStudy() {
  return (
    <Container>
      <div className={s.container}>
        <p className={s.subTitle}>Case Study</p>
      </div>
      <div className={s.wrapper}>
        <div className={s.description}>
          To fully understand the impact of AuditBet, let’s step into the shoes
          of Casino A. Imagine Casino A is a popular online platform, with
          thousands of players placing bets daily. In one month, the total bets
          made by players amount to a staggering $10M. <br></br> <br></br>
          However, players also win. Out of the $10M in total bets, players win
          back $9M. This leaves Casino A with a Gross Gaming Revenue (GGR) of
          $1M.
        </div>
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
      </div>
    </Container>
  );
}
