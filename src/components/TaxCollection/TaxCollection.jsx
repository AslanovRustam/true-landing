import ScrollAnimation from "../../helpers/ScrollAnimation";
import cube from "../../assets/Images/cube4.png";
import audit from "../../assets/Images/auditBet.png";
import Container from "../Container/Container";
import s from "./taxCollection.module.css";

export default function TaxCollection() {
  return (
    <>
      <Container>
        <div className={s.container}>
          <ScrollAnimation x={100} y={0}>
            <h2 className={s.title}>
              Tax <br className={s.mob}></br> Collection
            </h2>
          </ScrollAnimation>
          <div className={s.wrapper}>
            <ScrollAnimation x={-100} y={0}>
              <p className={s.subTitle}>Revolutionizing the iGaming Taxation</p>
            </ScrollAnimation>
            <p className={s.description}>
              Welcome to a new era of tax collection in the iGaming industry.
              With AuditBet, we bridge the gap between iGaming operators, like
              our partner Casino Royale, and governmental authorities,
              facilitating seamless, real-time tax data exchange. Discover how
              our revolutionary technology is bringing transparency, efficiency,
              and accuracy to the forefront of iGaming taxation.
            </p>
            <img className={s.cube} src={cube} alt="cube" />
          </div>
        </div>
      </Container>
      <div className={s.section}>
        <Container>
          <div className={s.containerAudit}>
            <div className={s.wrapperAudit}>
              <ScrollAnimation x={-100} y={0}>
                <p className={s.subTitle}>AuditBet</p>
              </ScrollAnimation>
              <p className={s.description}>
                We utilize a blockchain-based technology that records every bet,
                win, and rollback within the iGaming ecosystem. We operate as a
                proxy, receiving and transmitting game data in real time between
                game providers and casinos. For the government, this equates to
                on-demand access to precise Gross Gaming Revenue (GGR)
                information for efficient tax calculation.
              </p>
            </div>
            <img className={s.audit} src={audit} alt="audit" />
          </div>
        </Container>
      </div>
    </>
  );
}
