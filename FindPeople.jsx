import { useState } from "react";
import {
  Search,
  MapPin,
  Users,
  Star,
  Zap,
  ChevronRight,
  Heart,
  UserPlus,
  Camera,
  Globe2,
  BriefcaseBusiness,
  Code2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import "./FindPeople.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const people = [
  {
    name: "Dipankar Porey",
    location: "Kolkata, India",
    role: "Full-stack developer | AI enthusiast | Tech blogger",
    status: "Online",
    type: "Interested",
    color: "pink",
    initials: "DP",
  },
  {
    name: "Aarav Mehta",
    location: "Mumbai, India",
    role: "UI/UX Designer | Creative director | Design thinker",
    status: "Offline",
    lastActive: "15m ago",
    type: "Interesting",
    color: "blue",
    initials: "AM",
  },
  {
    name: "Sneha Rao",
    location: "Bengaluru, India",
    role: "Product Manager | Tech lead | Startup mentor",
    status: "Offline",
    lastActive: "3h ago",
    type: "Interesting",
    color: "green",
    initials: "SR",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    role: "Data Scientist | ML Engineer | Researcher",
    status: "Offline",
    lastActive: "yesterday",
    type: "Interested",
    color: "purple",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    location: "Pune, India",
    role: "Content Creator | Digital Marketer | Storyteller",
    status: "Online",
    type: "Interesting",
    color: "orange",
    initials: "PS",
  },
];

function FindPeople() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredPeople = people.filter((person) => {
    const query = search.toLowerCase();

    return (
      person.name.toLowerCase().includes(query) ||
      person.location.toLowerCase().includes(query) ||
      person.role.toLowerCase().includes(query)
    );
  });

  return (
    <div className="find">
      <Header />
      <div className="find-container">
        <div className="find-page">
          <aside className="profile-sidebar">
            {/* Profile Cover */}

            <div className="profile-cover">
              <div className="cover-circle circle-one"></div>
              <div className="cover-circle circle-two"></div>
            </div>

            {/* Profile Image */}

            <div className="profile-image-wrapper">
              <div className="profile-image">
                <span>SK</span>
              </div>

              <span className="profile-online"></span>
            </div>

            <div className="profile-content">
              <h2>Shiv Kumar</h2>

              <div className="profile-location">
                <MapPin size={13} />
                <span>San Francisco, CA</span>
              </div>

              <div className="profile-role">
                <Sparkles size={12} />
                Senior Product Designer
              </div>

              <div className="profile-divider"></div>

              {/* Social Links */}

              <div className="profile-socials">
                <a href="#" aria-label="Instagram">
                  <Camera size={15} />
                </a>

                <a href="#" aria-label="Website">
                  <Globe2 size={15} />
                </a>

                <a href="#" aria-label="Messages">
                  <MessageCircle size={15} />
                </a>

                <a href="#" aria-label="LinkedIn">
                  <BriefcaseBusiness size={15} />
                </a>

                <a href="#" aria-label="Github">
                  <Code2 size={15} />
                </a>
              </div>

              {/* About */}

              <div className="profile-about">
                <span>ABOUT</span>

                <p>
                  Full-stack engineer with 6+ years building scalable web
                  products....
                </p>
              </div>

              <div className="profile-divider"></div>

              {/* Profile Actions */}

              <div className="profile-actions">
                <button className="profile-action interested">
                  <Heart size={15} />
                  <span>Interested</span>
                  <b>3</b>
                </button>

                <button className="profile-action interesting">
                  <UserPlus size={15} />
                  <span>Interesting</span>
                  <b>3</b>
                </button>
              </div>
            </div>
          </aside>

          {/* =================================
          MAIN FIND PEOPLE
      ================================= */}

          <main className="find-main">
            {/* Header */}

            <section className="find-hero">
              <div className="hero-decoration hero-decoration-one"></div>
              <div className="hero-decoration hero-decoration-two"></div>

              <div className="discover-label">
                <span></span>
                DISCOVER
              </div>

              <h1>
                Find People
                <Sparkles size={21} />
              </h1>

              <p>Connect with amazing individuals</p>
            </section>

            {/* Content */}

            <section className="find-content">
              {/* Search */}

              <div className="people-search">
                <Search size={18} />

                <input
                  type="text"
                  placeholder="Search people..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Tabs */}

              <div className="people-tabs">
                <button
                  className={activeTab === "all" ? "active" : ""}
                  onClick={() => setActiveTab("all")}
                >
                  <Users size={15} />
                  All
                </button>

                <button
                  className={activeTab === "interested" ? "active" : ""}
                  onClick={() => setActiveTab("interested")}
                >
                  <Star size={15} />
                  Interested (2)
                </button>

                <button
                  className={activeTab === "interesting" ? "active" : ""}
                  onClick={() => setActiveTab("interesting")}
                >
                  <Zap size={15} />
                  Interesting (3)
                </button>
              </div>

              {/* Section Heading */}

              <div className="people-heading">
                <span>ALL PEOPLE</span>

                <small>{filteredPeople.length} found</small>
              </div>

              {/* People List */}

              <div className="people-list">
                {filteredPeople.map((person) => (
                  <div className="person-row" key={person.name}>
                    <div className={`person-avatar ${person.color}`}>
                      {person.initials}

                      <span
                        className={
                          person.status === "Online"
                            ? "person-status online"
                            : "person-status offline"
                        }
                      ></span>
                    </div>

                    <div className="person-info">
                      <div className="person-name-row">
                        <h3>{person.name}</h3>

                        <span
                          className={
                            person.status === "Online"
                              ? "status-badge online-badge"
                              : "status-badge offline-badge"
                          }
                        >
                          • {person.status}
                        </span>

                        <span
                          className={
                            person.type === "Interested"
                              ? "interest-badge interested-badge"
                              : "interest-badge interesting-badge"
                          }
                        >
                          {person.type === "Interested" ? (
                            <>
                              <Star size={11} />
                              Interested
                            </>
                          ) : (
                            <>
                              <Zap size={11} />
                              Interesting
                            </>
                          )}
                        </span>
                      </div>

                      <div className="person-location">{person.location}</div>

                      <div className="person-role">{person.role}</div>

                      {person.lastActive && (
                        <div className="last-active">
                          Last active: {person.lastActive}
                        </div>
                      )}
                    </div>

                    <button className="person-arrow">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <div className="find-bottom">
              © 2025 futurdoom · Connect with others
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FindPeople;
