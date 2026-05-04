export default function Footer() {
  return (
    <>
      {/* CONTACT BAR */}
      <div className="contact-bar">
        <a href="mailto:zyroxlabs@gmail.com" className="contact-item">
          <span className="contact-icon">✉</span> zyroxlabs@gmail.com
        </a>
        <a href="tel:+919150811600" className="contact-item">
          <span className="contact-icon">📞</span> +91 91508 11600
        </a>
        <a href="tel:+919150811600" className="contact-item">
          <span className="contact-icon">📞</span> +91 91508 11600
        </a>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Zyrox Labs</div>
        <div className="footer-copy">© {new Date().getFullYear()} Zyrox Labs. All rights reserved.</div>
        <div className="footer-founders">Built by <span>Reet Jain</span> &amp; <span>Laqshya Ajmera</span></div>
      </footer>
    </>
  )
}
