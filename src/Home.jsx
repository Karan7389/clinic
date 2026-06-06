import React, { useEffect, useState } from "react";
import LeadForm from "./LeadForm";
import Hero from "./Hero";
import "./Home.css";
import {
  ShieldCheck,
  Users,
  HandHeart,
  Scan,
  Wallet,
  Smile,
  Building2,
  Armchair,
  Microscope,
  Droplets,
  Frame,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import API from "./api";

const Home = () => {
  // ✅ All useState hooks declared first — before any useEffect
  const [leadOpen, setLeadOpen] = useState(false);
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedDoctor, setExpandedDoctor] = useState({ anand: false, swati: false });

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0;
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, Number(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Fetch treatments
  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        setLoading(true);
        const response = await API.get("/treatments");
        const rawData = Array.isArray(response.data) ? response.data : [];
        const treatmentData = rawData.slice(0, 6);
        setTreatments(treatmentData);
      } catch (error) {
        console.error("Error fetching treatments:", error);
        setTreatments([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTreatments();
  }, []);

  return (
    <main>
      <Hero />

      {/* =========================================================
          MEET SENIOR DOCTORS
      ========================================================== */}
      <section className="core-doctors-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2>Meet Our Senior Doctors</h2>
            <p style={{ maxWidth: "760px", margin: "0 auto" }}>
              Our clinical leadership brings decades of experience and compassionate care.
            </p>
          </div>

          <div className="core-doctors-grid">
            {/* DR. ANAND CHAUDHARY */}
            <article className="core-doctor-card reveal-on-scroll">
              <div className="core-doctor-photo">
                <img src="/Images/DrAnandChaudhary.webp" alt="Dr Anand Chaudhary" loading="lazy" />
              </div>
              <div className="core-doctor-body">
                <h3>Dr. Anand Chaudhary</h3>
                <p className="doctor-qualification">
                  Founder, Crown Dental | Dental Surgeon | Implant & Smile Design Specialist
                </p>
                <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
                  Dr. Anand Chaudhary is the visionary founder of Crown Dental with 12+ years of
                  extensive experience in advanced implantology and comprehensive smile design. His
                  commitment to excellence has transformed countless smiles with cutting-edge dental
                  solutions.
                  {!expandedDoctor.anand && (
                    <>
                      {" "}
                      <button
                        className="doc-btn-read-more-inline"
                        onClick={() =>
                          setExpandedDoctor((prev) => ({ ...prev, anand: !prev.anand }))
                        }
                      >
                        Read More →
                      </button>
                    </>
                  )}
                </p>
                {expandedDoctor.anand && (
                  <>
                    <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
                      Specializing in advanced implant dentistry, Dr. Chaudhary combines technical
                      precision with artistic vision to create natural-looking, functional
                      restorations. His expertise spans complex cases and full-mouth rehabilitation,
                      making him a trusted choice for patients seeking comprehensive dental
                      transformation.
                    </p>
                    <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
                      With a patient-centric philosophy and state-of-the-art technology, he ensures
                      every procedure exceeds expectations in comfort, aesthetics, and longevity.
                      Over 4,500 successful treatments and 4,000+ satisfied patients are testament
                      to his excellence.
                    </p>
                    <p style={{ fontWeight: "600", marginBottom: "16px", color: "#6f6048" }}>
                      Signature Expertise: Advanced Implants | Smile Makeovers | Laser Dentistry |
                      Full Mouth Rehabilitation
                    </p>
                    <button
                      className="doc-btn-read-more-inline"
                      onClick={() =>
                        setExpandedDoctor((prev) => ({ ...prev, anand: !prev.anand }))
                      }
                    >
                      Read Less ↑
                    </button>
                  </>
                )}
                <div className="doc-btn-container">
                  <button className="doc-btn" onClick={() => setLeadOpen(true)}>
                    Book a Consultation
                  </button>
                </div>
              </div>
            </article>

            {/* DR. SWATI CHAUDHARY */}
            <article className="core-doctor-card reveal-on-scroll">
              <div className="core-doctor-photo">
                <img src="/Images/DrSwaatiChaudhary.webp" alt="Dr Swati Chaudhary" loading="lazy" />
              </div>
              <div className="core-doctor-body">
                <h3>Dr. Swati Chaudhary</h3>
                <p className="doctor-qualification">
                  Executive Director, AngelLife Cosmetology & Wellness | Aesthetic Physician &
                  Dental Surgeon
                </p>
                <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
                  Dr. Swati Chaudhary is an accomplished aesthetic physician and dental surgeon with
                  10+ years of experience in cosmetic dentistry and advanced aesthetic treatments.
                  As Executive Director of AngelLife Cosmetology & Wellness, she specializes in
                  transforming smiles and rejuvenating facial aesthetics.
                  {!expandedDoctor.swati && (
                    <>
                      {" "}
                      <button
                        className="doc-btn-read-more-inline"
                        onClick={() =>
                          setExpandedDoctor((prev) => ({ ...prev, swati: !prev.swati }))
                        }
                      >
                        Read More →
                      </button>
                    </>
                  )}
                </p>
                {expandedDoctor.swati && (
                  <>
                    <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
                      Dr. Swati excels in integrating dental aesthetics with facial rejuvenation,
                      utilizing the latest laser technologies and anti-aging treatments. Her holistic
                      approach ensures not just beautiful teeth, but a harmonious, youthful facial
                      appearance that enhances overall confidence.
                    </p>
                    <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
                      With a keen eye for aesthetic harmony and deep understanding of facial anatomy,
                      she creates personalized treatment plans that bring out each patient's natural
                      beauty. Her dedication to excellence is reflected in 3,800+ successful
                      treatments and 3,500+ delighted patients.
                    </p>
                    <p style={{ fontWeight: "600", marginBottom: "16px", color: "#6f6048" }}>
                      Signature Expertise: Skin Rejuvenation | Anti-Aging Treatments | Laser
                      Aesthetics | Facial Contouring
                    </p>
                    <button
                      className="doc-btn-read-more-inline"
                      onClick={() =>
                        setExpandedDoctor((prev) => ({ ...prev, swati: !prev.swati }))
                      }
                    >
                      Read Less ↑
                    </button>
                  </>
                )}
                <div className="doc-btn-container">
                  <button className="doc-btn" onClick={() => setLeadOpen(true)}>
                    Book a Consultation
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================== */}
      <section className="why-choose-section" id="why-us">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2>Why Patient Trust Crown Dental</h2>
            <p style={{ maxWidth: "680px", margin: "0 auto" }}>
              Your health and comfort are our top priorities.
            </p>
          </div>

          <div className="highlights-grid">
            <article className="highlight-card reveal-on-scroll" data-reveal-delay="0">
              <ShieldCheck size={48} strokeWidth={1.4} className="why-icon" />
              <h3>Strict Sterilization</h3>
              <p>International protocols ensure complete safety.</p>
            </article>

            <article className="highlight-card reveal-on-scroll" data-reveal-delay="80">
              <Users size={48} strokeWidth={1.4} className="why-icon" />
              <h3>Expert Team</h3>
              <p>Highly qualified specialists with years of experience.</p>
            </article>

            <article className="highlight-card reveal-on-scroll" data-reveal-delay="160">
              <HandHeart size={48} strokeWidth={1.4} className="why-icon" />
              <h3>Compassionate Care</h3>
              <p>Patient comfort and satisfaction are paramount.</p>
            </article>

            <article className="highlight-card reveal-on-scroll" data-reveal-delay="240">
              <Scan size={48} strokeWidth={1.4} className="why-icon" />
              <h3>Advanced Technology</h3>
              <p>Latest diagnostic and treatment equipment.</p>
            </article>

            <article className="highlight-card reveal-on-scroll" data-reveal-delay="320">
              <Wallet size={48} strokeWidth={1.4} className="why-icon" />
              <h3>Transparent Pricing</h3>
              <p>Clear costs with no hidden charges.</p>
            </article>

            <article className="highlight-card reveal-on-scroll" data-reveal-delay="400">
              <Smile size={48} strokeWidth={1.4} className="why-icon" />
              <h3>Results You'll Love</h3>
              <p>Proven track record of beautiful, lasting smiles.</p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          MODERN FACILITY
      ========================================================== */}
      <section className="facility-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2>Our Modern Facility</h2>
            <p style={{ maxWidth: "700px", margin: "0 auto" }}>
              Take a virtual tour of our state-of-the-art clinic designed for your comfort and
              safety.
            </p>
          </div>

          <div className="facility-grid">
            <a
              href="/gallery"
              className="facility-card reveal-on-scroll"
              data-reveal-delay="0"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <Building2 size={52} strokeWidth={1.5} className="facility-icon" />
              <p className="facility-title">Reception Area</p>
            </a>

            <a
              href="/gallery"
              className="facility-card reveal-on-scroll"
              data-reveal-delay="70"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <Armchair size={52} strokeWidth={1.5} className="facility-icon" />
              <p className="facility-title">Treatment Rooms</p>
            </a>

            <a
              href="/gallery"
              className="facility-card reveal-on-scroll"
              data-reveal-delay="140"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <Microscope size={52} strokeWidth={1.5} className="facility-icon" />
              <p className="facility-title">Modern Equipment</p>
            </a>

            <a
              href="/gallery"
              className="facility-card reveal-on-scroll"
              data-reveal-delay="210"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <Droplets size={52} strokeWidth={1.5} className="facility-icon" />
              <p className="facility-title">Sterilization Unit</p>
            </a>

            <a
              href="/gallery"
              className="facility-card reveal-on-scroll"
              data-reveal-delay="280"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <Frame size={52} strokeWidth={1.5} className="facility-icon" />
              <p className="facility-title">Waiting Lounge</p>
            </a>

            <a
              href="/gallery"
              className="facility-card reveal-on-scroll"
              data-reveal-delay="350"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <Sparkles size={52} strokeWidth={1.5} className="facility-icon" />
              <p className="facility-title">Cosmetic Suite</p>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADVANCED TECHNOLOGY
      ========================================================== */}
      <section className="technology-section">
        <div className="tech-header">
          <h2>Advanced Technology We Use</h2>
          <p>
            State-of-the-art equipment ensuring precision, safety, and comfort in every procedure.
          </p>
        </div>

        <div className="technology-grid">
          <article className="tech-card reveal-on-scroll" data-reveal-delay="0">
            <div className="tech-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop&q=80"
                alt="Digital X-Rays"
                className="tech-image"
                loading="lazy"
              />
            </div>
            <h3>Digital X-Rays</h3>
            <p>90% less radiation exposure with instant high-resolution imaging for accurate diagnosis.</p>
          </article>

          <article className="tech-card reveal-on-scroll" data-reveal-delay="100">
            <div className="tech-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400&h=300&fit=crop&q=80"
                alt="Laser Dentistry"
                className="tech-image"
                loading="lazy"
              />
            </div>
            <h3>Laser Dentistry</h3>
            <p>Minimally invasive procedures with faster healing and reduced discomfort.</p>
          </article>

          <article className="tech-card reveal-on-scroll" data-reveal-delay="200">
            <div className="tech-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop&q=80"
                alt="Intraoral Scanner"
                className="tech-image"
                loading="lazy"
              />
            </div>
            <h3>Intraoral Scanner</h3>
            <p>3D digital impressions eliminating messy traditional molds for precise results.</p>
          </article>

          <article className="tech-card reveal-on-scroll" data-reveal-delay="300">
            <div className="tech-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=400&h=300&fit=crop&q=80"
                alt="Autoclave Sterilization"
                className="tech-image"
                loading="lazy"
              />
            </div>
            <h3>Autoclave Sterilization</h3>
            <p>Hospital-grade sterilization ensuring complete elimination of pathogens.</p>
          </article>
        </div>
      </section>

      {/* =========================================================
          LEAD FORM MODAL
      ========================================================== */}
      {leadOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: 30,
              borderRadius: 14,
              width: "90%",
              maxWidth: 420,
              position: "relative",
            }}
          >
            <button
              onClick={() => setLeadOpen(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontSize: 20,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h2 style={{ marginBottom: 16 }}>Book a Consultation</h2>

            <LeadForm source="Home Page - Consultation" onSuccess={() => setLeadOpen(false)} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
