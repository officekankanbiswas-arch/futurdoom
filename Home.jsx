import { NavLink } from "react-router-dom";
import { ArrowRight, Info, Mail, Sparkles } from "lucide-react";
import "./Home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function Home() {
  return (
    <div className="home">
      <Header />
      <main className="home-page">
        <div className="home-container">
          <section className="home-card home-card-animate">
            {/* Hero */}
            <div className="hero-section animate-hero">
              <div className="hero-grid"></div>

              <div className="hero-content">
                <div className="established">
                  <span className="established-line"></span>
                  EST. 2026
                </div>

                <h1>
                  futur<span>DooM</span>
                </h1>

                <p className="hero-title">
                  A new space where <strong>Intelligence</strong> meets{" "}
                  <strong>Community</strong>
                </p>

                <p className="hero-subtitle">
                  Enjoy a new experience with—futurDooM
                </p>
              </div>
            </div>

            {/* Get Started */}
            <section className="get-started-section animate-content">
              <p className="section-label">GET STARTED</p>

              <NavLink to="/find-people" className="start-button">
                <div className="start-icon">
                  <Sparkles size={21} />
                </div>

                <div className="start-text">
                  <strong>Let's Go</strong>
                  <span>Start your journey</span>
                </div>

                <span className="arrow">
                  <ArrowRight size={22} />
                </span>
              </NavLink>
            </section>

            {/* Quick Links */}
            <section className="quick-links animate-links">
              <NavLink to="/about" className="quick-card">
                <div className="quick-icon">
                  <Info size={20} />
                </div>

                <div className="quick-content">
                  <strong>About Us</strong>
                  <span>Learn our story</span>
                </div>

                <span className="quick-arrow">
                  <ArrowRight size={18} />
                </span>
              </NavLink>

              <NavLink to="/contact" className="quick-card">
                <div className="quick-icon">
                  <Mail size={20} />
                </div>

                <div className="quick-content">
                  <strong>Contact Us</strong>
                  <span>Get in touch</span>
                </div>

                <span className="quick-arrow">
                  <ArrowRight size={18} />
                </span>
              </NavLink>
            </section>

            {/* Footer */}
            <footer className="home-footer animate-footer">
              <div className="footer-links">
                <NavLink to="/terms">Terms</NavLink>
                <span>•</span>
                <NavLink to="/privacy">Privacy</NavLink>
                <span>•</span>
                <NavLink to="/disclaimer">Disclaimer</NavLink>
              </div>

              <p>© 2026 futurDooM · All rights reserved</p>
            </footer>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
