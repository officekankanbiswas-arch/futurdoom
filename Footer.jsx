import {
  Sparkles,
  ShieldCheck,
  Globe2,
  Camera,
  Users,
  BriefcaseBusiness,
  Code2,
  X,
} from "lucide-react";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      {/* =========================
          NEWSLETTER / BRAND CARD
      ========================= */}

      <section className="footer-newsletter">
        <div className="footer-brand-section">
          <h2 className="footer-logo">
            futur<span>DooM</span>
          </h2>

          <p className="footer-description">
            Where emotions meet AI — express freely, connect deeply,
            <br className="desktop-break" />
            feel authentically.
          </p>

          <div className="footer-features">
            <div className="footer-feature">
              <Sparkles size={14} />
              <span>AI-POWERED</span>
            </div>

            <div className="footer-feature">
              <ShieldCheck size={14} />
              <span>SSL SECURE</span>
            </div>

            <div className="footer-feature">
              <Globe2 size={14} />
              <span>GLOBAL</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}

        <div className="newsletter-section">
          <span className="newsletter-label">STAY IN THE LOOP</span>

          <p>Get updates on new features & AI releases.</p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
            />

            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* =========================
          FOOTER LINKS
      ========================= */}

      <div className="footer-columns">
        {/* Quick Links */}

        <div className="footer-column">
          <h3>QUICK LINKS</h3>

          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>

        {/* Contact */}

        <div className="footer-column">
          <h3>CONTACT</h3>

          <a href="mailto:feedbackfuturdoom@gmail.com">
            feedbackfuturdoom@gmail.com
          </a>

          <a href="https://www.futurdoom.com" target="_blank" rel="noreferrer">
            www.futurdoom.com
          </a>
        </div>

        {/* Platform */}

        <div className="footer-column">
          <h3>PLATFORM</h3>

          <a href="/emotion-feed">Emotion Feed</a>
          <a href="/chat">AI Chat</a>
          <a href="/community">Community</a>
          <a href="/explore">Explore</a>
        </div>

        {/* Social */}

        <div className="footer-column social-column">
          <h3>FOLLOW US</h3>

          <div className="social-links">
            <a
              href="#"
              aria-label="Instagram"
              className="social-icon instagram"
            >
              <Camera size={21} />
            </a>

            <a href="#" aria-label="Facebook" className="social-icon facebook">
              <Users size={21} />
            </a>

            <a href="#" aria-label="X" className="social-icon x-social">
              <X size={20} />
            </a>

            <a href="#" aria-label="LinkedIn" className="social-icon linkedin">
              <BriefcaseBusiness size={20} />
            </a>

            <a href="#" aria-label="GitHub" className="social-icon github">
              <Code2 size={21} />
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          COPYRIGHT
      ========================= */}

      <div className="footer-bottom">
        <p>© 2026 futurdoom. All rights reserved.</p>

        <p className="built-with">
          Built with Emotion AI
          <Sparkles size={15} />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
