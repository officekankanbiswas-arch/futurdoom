import {
  MapPin,
  Sparkles,
  Camera,
  MessagesSquare,
  Globe,
  BriefcaseBusiness,
  AtSign,
  X,
  Heart,
  UserPlus,
  Share2,
  Trash2,
  Copy,
  MessageCircle,
  CalendarDays,
  ChevronRight,
  CheckCheck,
} from "lucide-react";

import "./Share.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


const conversations = [
  {
    id: 1,
    date: "Feb 19, 2026",
    person: "Dipankar Porey",
    question: "Hello, can you tell me about futurdoom.",
    answer: "Futurdoom not found 🤷",
    nextQuestion: "Can you show me a complete example with CSS?",
    aiResponse:
      "Absolutely! Here's a complete example with responsive design...",
    avatar: "DP",
  },
  {
    id: 2,
    date: "Feb 12, 2026",
    person: "Acilok Kolifca",
    question: "Tell about mango shake",
    answer:
      "Mango Shake is a refreshing beverage made with mango pulp and milk 🥭",
    nextQuestion: "What ingredients are required?",
    aiResponse:
      "You can make it with mango, chilled milk, sugar and a few ice cubes...",
    avatar: "AK",
  },
];

function ProfileCard() {
  return (
    <aside className="share-profile">
      <div className="profile-cover">
        <div className="profile-cover-grid" />
        <div className="profile-circle" />
      </div>

      <div className="profile-avatar-wrap">
        <div className="profile-avatar">SK</div>

        <span className="online-dot" />
      </div>

      <div className="share-profile-content">
        <h2>Shiv Kumar</h2>

        <div className="share-location">
          <MapPin size={14} />
          San Francisco, CA
        </div>

        <div className="share-job">
          <Sparkles size={13} />
          Senior Product Designer
        </div>

        <div className="profile-line" />

        <div className="share-socials">
          <a href="#" aria-label="Instagram">
            <Camera size={17} />
          </a>

          <a href="#" aria-label="Facebook">
            <MessagesSquare size={17} />
          </a>

          <a href="#" aria-label="X">
            <X size={17} />
          </a>

          <a href="#" aria-label="LinkedIn">
            <BriefcaseBusiness size={17} />
          </a>

          <a href="#" aria-label="GitHub">
            <AtSign size={17} />
          </a>
        </div>

        <div className="profile-about">
          <span>ABOUT</span>

          <p>
            Full-stack engineer with 6+ years building scalable web products....
          </p>
        </div>

        <div className="profile-line" />

        <div className="profile-buttons">
          <button className="interested-button">
            <Heart size={15} />
            Interested
            <b>3</b>
          </button>

          <button className="interesting-button">
            <UserPlus size={15} />
            Interesting
            <b>3</b>
          </button>
        </div>
      </div>
    </aside>
  );
}

function ConversationCard({ conversation }) {
  return (
    <article className="conversation-card">
      {/* Date bar */}
      <div className="conversation-topbar">
        <div className="date-chip">
          <CalendarDays size={14} />
          {conversation.date}
        </div>

        <div className="conversation-actions">
          <Share2 size={16} />
          <Heart size={16} />
          <Trash2 size={16} />
        </div>
      </div>

      <div className="conversation-body">
        {/* Left icons */}
        <div className="conversation-mini-actions">
          <Trash2 size={15} />
          <Heart size={15} />
          <Share2 size={15} />
          <Copy size={15} />
        </div>

        {/* Question */}
        <div className="question-row">
          <div className="question-avatar">{conversation.avatar}</div>

          <div className="question-content">
            <div className="asked-by">
              <strong>{conversation.person}</strong>
              <span>asked</span>
            </div>

            <div className="question-bubble">{conversation.question}</div>

            <span className="message-time">10:30 AM</span>
          </div>
        </div>

        {/* Reply */}
        <div className="reply-row">
          <div className="reply-content">
            <div className="reply-label">
              <span>replied</span>
              <strong>futurdoom</strong>
              <Sparkles size={13} />
            </div>

            <div className="reply-bubble">{conversation.answer}</div>

            <div className="reply-time">
              10:32 AM
              <CheckCheck size={15} />
            </div>
          </div>

          <div className="reply-avatar">FD</div>
        </div>

        {/* Continue Reading */}
        <div className="continue-box">
          <div className="continue-header">
            <div>
              <span className="continue-icons">
                <Sparkles size={14} />
                <MessageCircle size={14} />
              </span>

              <strong>Continue reading...</strong>
            </div>

            <ChevronRight size={17} />
          </div>

          <div className="next-question-label">
            <span>U</span>
            Next question
          </div>

          <div className="next-question">{conversation.nextQuestion}</div>

          <div className="ai-label">
            AI response
            <span>
              <Sparkles size={13} />
            </span>
          </div>

          <div className="ai-response">{conversation.aiResponse}</div>

          <p className="view-full">Click to view full conversation</p>
        </div>

        {/* Card Footer */}
        <div className="conversation-footer">
          <button className="share-thread">
            <Share2 size={16} />
            Share
          </button>

          <button className="view-thread">
            View Thread
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

function Share() {
  return (
    <div className="share-shell">
      <Header />

      <main className="share-page">
        <div className="share-container">
          <div className="share-layout">
            <ProfileCard />

            <section className="share-main">
              {/* Hero */}
              <div className="share-hero">
                <div className="share-hero-grid" />
                <div className="share-hero-circle one" />
                <div className="share-hero-circle two" />

                <div className="share-hero-content">
                  <div className="community-label">
                    <span />
                    COMMUNITY
                  </div>

                  <h1>
                    Share &amp; Connect
                    <Share2 size={22} />
                  </h1>

                  <p>Latest discussions and replies</p>
                </div>

                <div className="conversation-count">
                  <MessageCircle size={15} />2 conversations
                </div>
              </div>

              {/* Conversations */}
              <div className="conversation-list">
                {conversations.map((conversation) => (
                  <ConversationCard
                    key={conversation.id}
                    conversation={conversation}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Share;
