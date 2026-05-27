export function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <strong>MUAY THAI FAMILY GYM</strong>
        <span>{t.footer.line}</span>
        <small>© {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}