import React, { useEffect } from "react";
import { useAppointment } from "./AppointmentContext";
import { Star, Award, Heart } from "lucide-react";

export default function Doctors() {
  const { openModal } = useAppointment();

  const doctors = [
    {
      name: "Dr. Astitva Agarwal",
      title: "BDS, MDS | Orthodontist",
      img: "/Images/DrAstitvaAgarwal.webp",
      badges: ["Braces", "Aligners", "Smile Correction", "Jaw Alignment"],
      exp: 7,
      treatments: 2200,
      happy: 2000,
    },
    {
      name: "Dr. Prashashta Mishra",
      title: "Oral Cancer Specialist",
      img: "/Images/DrPrashashtaMishra.webp",
      badges: ["Oral Cancer Diagnosis", "Biopsy", "Preventive Care", "Early Detection"],
      exp: 9,
      treatments: 1800,
      happy: 1700,
    },
    {
      name: "Dr. Rahul Seth",
      title: "Oral and Maxillofacial Surgeon",
      img: "/Images/DrRahulSeth.JPG",
      badges: ["Jaw Surgery", "Facial Trauma", "Wisdom Tooth Removal", "Reconstructive Surgery"],
      exp: 11,
      treatments: 3200,
      happy: 3000,
    },
    {
      name: "Dr. (Col.) Satyam Singh",
      title: "Full Mouth Rehab Specialist",
      img: "/Images/DrSatyamSingh.webp",
      badges: ["Full Mouth Rehabilitation", "Prosthodontics", "Implants", "Smile Restoration"],
      exp: 15,
      treatments: 4000,
      happy: 3800,
    },
  ];

  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade");
    fadeEls.forEach((el, i) =>
      setTimeout(() => el.classList.add("visible"), i * 150)
    );
  }, []);

  return (
    <div style={{ background: "#faf6ed", paddingTop: 110, minHeight: "100vh" }}>
      {/* PAGE TITLE */}
      <h1
        style={{
          textAlign: "center",
          fontSize: 38,
          fontWeight: 700,
          color: "#6f6048",
          marginBottom: 10,
        }}
      >
        Meet Our Expert Doctors
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: 17,
          maxWidth: 750,
          margin: "0 auto 48px",
          color: "#5d5446",
          lineHeight: 1.6,
        }}
      >
        A team of experienced specialists dedicated to providing gentle,
        advanced, and ethical dental care.
      </p>

      {/* DOCTOR GRID */}
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 32,
          padding: "0 24px 80px",
        }}
      >
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="fade"
            style={{
              background: "#ffffff",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 8px 28px rgba(0,0,0,0.09)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.09)";
            }}
          >
            {/* IMAGE */}
            <div style={{ position: "relative", height: 300, overflow: "hidden", background: "#f2ebe0" }}>
              <img
                src={doc.img}
                alt={doc.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:90px;background:linear-gradient(135deg,#f2ebe0,#e8dcc6)">🦷</div>';
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 60,
                  background: "linear-gradient(to top, rgba(255,255,255,0.6), transparent)",
                }}
              />
            </div>

            {/* CARD BODY */}
            <div style={{ padding: "22px 24px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
              {/* NAME */}
              <h3 style={{ fontSize: 21, fontWeight: 700, color: "#6f6048", marginBottom: 5 }}>
                {doc.name}
              </h3>

              {/* DESIGNATION */}
              <p
                style={{
                  fontSize: 14,
                  color: "#7a6a54",
                  lineHeight: 1.5,
                  marginBottom: 16,
                  fontStyle: "italic",
                  borderLeft: "3px solid #c8b89a",
                  paddingLeft: 10,
                }}
              >
                {doc.title}
              </p>

              {/* SPECIALIST BADGES */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 7,
                  marginBottom: 20,
                }}
              >
                {doc.badges.map((b, bi) => (
                  <span
                    key={bi}
                    style={{
                      padding: "5px 11px",
                      background: "#f2ebe0",
                      borderRadius: 20,
                      fontSize: 12,
                      color: "#6f6048",
                      border: "1px solid #e0d4c0",
                      fontWeight: 500,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* STATS */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "14px 0",
                  marginBottom: 18,
                  borderTop: "1px solid #f0e8d8",
                  borderBottom: "1px solid #f0e8d8",
                }}
              >
                <Counter icon={<Award size={18} color="#6f6048" />} label="Years" value={doc.exp} />
                <Counter icon={<Star size={18} color="#6f6048" />} label="Treatments" value={doc.treatments} />
                <Counter icon={<Heart size={18} color="#6f6048" />} label="Happy" value={doc.happy} />
              </div>

              {/* BUTTON */}
              <button
                onClick={openModal}
                style={{
                  marginTop: "auto",
                  padding: "12px 0",
                  background: "#6f6048",
                  color: "white",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 15,
                  width: "100%",
                  transition: "background 0.25s ease",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#5b4f3d")}
                onMouseLeave={(e) => (e.target.style.background = "#6f6048")}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .fade {
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.7s ease;
        }
        .fade.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 600px) {
          .fade { transform: translateY(12px); }
        }
      `}</style>
    </div>
  );
}

function Counter({ icon, label, value }) {
  const displayValue = value > 999 ? `${(value / 1000).toFixed(1)}k+` : `${value}+`;
  return (
    <div style={{ textAlign: "center" }}>
      {icon}
      <div style={{ fontWeight: 700, fontSize: 15, color: "#6f6048", marginTop: 2 }}>
        {displayValue}
      </div>
      <div style={{ fontSize: 11, color: "#5d5446" }}>{label}</div>
    </div>
  );
}

