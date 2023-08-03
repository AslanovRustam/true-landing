import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <p className={s.rights}>© 2023 Audit.bet</p>
      <ul className={s.list}>
        <li className={s.itemContact}>
          <p>contact us</p>
          <a className={s.mail} href="mailTo:contact@audit.bet">
            contact@audit.bet
          </a>
        </li>
        <li className={s.itemSocsals}>
          <div className={s.item}>
            <a
              className={s.link}
              target="_blank"
              href="https://www.linkedin.com/"
            >
              LinkedIn
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} target="_blank" href="https://twitter.com/">
              Twitter
            </a>
          </div>
          <div className={s.item}>
            <a
              className={s.link}
              target="_blank"
              href="https://www.facebook.com/"
            >
              Facebook
            </a>
          </div>
        </li>
      </ul>

      <ul className={s.listLinks}>
        <li className={s.itemLink}>Docs</li>
        <li className={s.itemLink}>KYC and AML policy</li>
        <li className={s.itemLink}>Privacy and Cookies Policy</li>
        <li className={s.itemLink}>Terms of use</li>
      </ul>
    </footer>
  );
}
