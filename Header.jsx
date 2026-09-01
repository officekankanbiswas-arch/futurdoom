import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Bell,
  ChevronDown,
  House,
  LogOut,
  Search,
  Share2,
  UserRound,
  Users,
  MessageCircle,
  X,
  Settings,
  CircleUserRound,
  Mail,
  PlayCircle,
  Info,
} from "lucide-react";

import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN HEADER
      ===================================================== */}
      <header className="site-header">
        <div className="header-container">
          {/* Logo */}
          <NavLink to="/" className="brand" onClick={closeMenu}>
            <div className="brand-icon">
              <img src="/logo.png" alt="FuturDooM" />
            </div>

            <span className="brand-text">
              futur<span>DooM</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            <NavLink to="/find-people" className="nav-item">
              <span className="nav-icon">
                <Search size={18} />
              </span>
              <span>Search</span>
            </NavLink>

            <NavLink to="/" className="nav-item">
              <span className="nav-icon">
                <House size={18} />
              </span>
              <span>Home</span>
            </NavLink>

            <NavLink to="/me" className="nav-item">
              <span className="nav-icon">
                <UserRound size={18} />
              </span>
              <span>Me</span>

              <span className="dropdown">
                <ChevronDown size={14} />
              </span>
            </NavLink>

            <NavLink to="/share" className="nav-item">
              <span className="nav-icon">
                <Share2 size={18} />
              </span>
              <span>Share</span>
            </NavLink>

            <NavLink to="/notifications" className="nav-item notification-item">
              <span className="nav-icon">
                <Bell size={18} />
              </span>

              <span className="notification-dot"></span>

              <span>Notifications</span>
            </NavLink>
          </nav>

          {/* Desktop Logout */}
          <NavLink to="/logout" className="logout">
            <span className="logout-icon">
              <LogOut size={18} />
            </span>

            <span>Logout</span>
          </NavLink>
        </div>
      </header>

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}
      <div className="mobile-header">
        <NavLink to="/" className="mobile-logo">
          <span>futur</span>
          <strong>DooM</strong>
        </NavLink>

        <div className="mobile-top-actions">
          <NavLink to="/find-people" className="mobile-top-item">
            <Search size={20} />
            <span>Search</span>
          </NavLink>

          <NavLink to="/groups" className="mobile-top-item">
            <Users size={20} />
            <span>Groups</span>
          </NavLink>

          <NavLink to="/discussion" className="mobile-top-item">
            <MessageCircle size={20} />
            <span>Discussion</span>
          </NavLink>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}

      {/* =====================================================
          MOBILE SIDE DRAWER
      ===================================================== */}
      <aside
        className={`mobile-drawer ${menuOpen ? "mobile-drawer-open" : ""}`}
      >
        {/* Drawer Top */}
        <div className="drawer-top">
          <div className="drawer-top-actions">
            <NavLink
              to="/find-people"
              className="drawer-top-item"
              onClick={closeMenu}
            >
              <Search size={20} />
              <span>Search</span>
            </NavLink>

            <NavLink
              to="/groups"
              className="drawer-top-item"
              onClick={closeMenu}
            >
              <Users size={20} />
              <span>Groups</span>
            </NavLink>

            <NavLink
              to="/discussion"
              className="drawer-top-item"
              onClick={closeMenu}
            >
              <MessageCircle size={20} />
              <span>Discussion</span>
            </NavLink>

            <button
              className="drawer-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={23} />
            </button>
          </div>
        </div>

        {/* =====================================================
            USER CARD
        ===================================================== */}
        <div className="drawer-content">
          <div className="drawer-user-card">
            <div className="drawer-avatar">
              <span>FD</span>
              <span className="avatar-online"></span>
            </div>

            <div className="drawer-user-info">
              <h3>futurDooM User</h3>
              <p>@futurdoom</p>

              <div className="drawer-user-stats">
                <span>128 posts</span>
                <span>•</span>
                <span>2.1k interested</span>
              </div>
            </div>
          </div>

          {/* =================================================
              MAIN MENU
          ================================================= */}
          <div className="drawer-section">
            <h4>MAIN MENU</h4>

            <NavLink
              to="/find-people"
              className="drawer-menu-item"
              onClick={closeMenu}
            >
              <Search size={20} />
              <span>Search</span>
            </NavLink>

            <NavLink to="/" className="drawer-menu-item" onClick={closeMenu}>
              <House size={20} />
              <span>Home</span>
            </NavLink>

            <NavLink to="/me" className="drawer-menu-item" onClick={closeMenu}>
              <UserRound size={20} />
              <span>Me</span>
            </NavLink>

            <NavLink
              to="/share"
              className="drawer-menu-item"
              onClick={closeMenu}
            >
              <PlayCircle size={20} />
              <span>Share</span>
            </NavLink>

            <NavLink
              to="/notifications"
              className="drawer-menu-item drawer-notification"
              onClick={closeMenu}
            >
              <Bell size={20} />

              <span>Notifications</span>

              <span className="drawer-notification-dot"></span>

              <span className="notification-count">3</span>
            </NavLink>
          </div>

          {/* =================================================
              MORE
          ================================================= */}
          <div className="drawer-section drawer-more">
            <h4>MORE</h4>

            <div className="drawer-grid">
              <NavLink
                to="/profile"
                className="drawer-more-item"
                onClick={closeMenu}
              >
                <div className="more-icon">
                  <CircleUserRound size={19} />
                </div>
                <span>Profile</span>
              </NavLink>

              <NavLink
                to="/settings"
                className="drawer-more-item"
                onClick={closeMenu}
              >
                <div className="more-icon">
                  <Settings size={19} />
                </div>
                <span>Settings</span>
              </NavLink>

              <NavLink
                to="/groups"
                className="drawer-more-item"
                onClick={closeMenu}
              >
                <div className="more-icon">
                  <Users size={19} />
                </div>
                <span>Groups</span>
              </NavLink>

              <NavLink
                to="/discussion"
                className="drawer-more-item"
                onClick={closeMenu}
              >
                <div className="more-icon">
                  <MessageCircle size={19} />
                </div>
                <span>Discussion</span>
              </NavLink>

              <NavLink
                to="/contact"
                className="drawer-more-item"
                onClick={closeMenu}
              >
                <div className="more-icon">
                  <Mail size={19} />
                </div>
                <span>Contact</span>
              </NavLink>

              <NavLink
                to="/visit-us"
                className="drawer-more-item"
                onClick={closeMenu}
              >
                <div className="more-icon">
                  <PlayCircle size={19} />
                </div>
                <span>Visit Us</span>
              </NavLink>
            </div>
          </div>

          {/* =================================================
              DRAWER FOOTER
          ================================================= */}
          <div className="drawer-footer">
            <div className="active-status">
              <span className="active-status-dot"></span>
              <span>Active now</span>
            </div>

            <span className="version">v2.0</span>

            <p>© 2025 futurDooM · All rights reserved</p>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
      ===================================================== */}
      <nav className="mobile-bottom-nav">
        <NavLink to="/" className="bottom-nav-item">
          <House size={21} />
        </NavLink>

        <NavLink to="/share" className="bottom-nav-item">
          <PlayCircle size={21} />
        </NavLink>

        <NavLink to="/me" className="bottom-nav-item">
          <UserRound size={21} />
        </NavLink>

        <NavLink
          to="/notifications"
          className="bottom-nav-item bottom-notification"
        >
          <Bell size={21} />
          <span className="bottom-notification-badge">3</span>
        </NavLink>

        <NavLink to="/logout" className="bottom-nav-item">
          <LogOut size={21} />
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
