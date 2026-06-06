import React, { useEffect } from "react";
import { useAppointment } from "./AppointmentContext";
import { Star, Award, Heart, Sparkles } from "lucide-react";

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
      name: "Dr. Rahul Seth",
      title: "Oral and Maxillofacial Surgeon",
      img: "/Images/DrRahulSeth.webp",
      badges: ["Jaw Surgery", "Facial Trauma", "Wisdom Tooth Removal", "Reconstructive Surgery"],
      exp: 11,
      treatments: 3200,
      happy: 3000,
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
      name: "Dr. (Col.) Satyam Singh",
      title: "Full Mouth Rehab Specialist",
      img: "/Images/DrSatyamSingh.webp",
      badges: ["Full Mouth Rehabilitation", "Prosthodontics", "Implants", "Smile Restoration"],
      exp: 15,
      treatments: 4000,
      happy: 3800,
    },
    {
      name: "Dr. Shashwat Kumar",
      title: "Dental Surgeon",
      img: "/Images/DrShashwatKumar.webp",
      badges: ["General Dentistry", "Root Canal Specialist", "Preventive Care", "Restorative Dentistry"],
      exp: 4,
      treatments: 1500,
      happy: 1400,
    },
  ];

  // Fixed: IntersectionObserver so cards animate reliably on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
          margin: "0 auto 40px",
          color: "#5d5446",
        }}
      >
        A team of experienced specialists dedicated to providing gentle,
        advanced, and ethical dental care.
      </p>

      {/* DOCTOR GRID */}
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 30,
          padding: "0 20px 70px",
        }}
      >
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="fade"
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 20,
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
            }}
          >
            {/* IMAGE */}
            <img
              src={doc.img}
              alt={doc.name}
              style={{
                width: "100%",
                height: 340,
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: 16,
                marginBottom: 15,
              }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML =
                  '<div style="width:100%;height:340px;display:flex;align-items:center;justify-content:center;font-size:120px;background:linear-gradient(135deg,#f2ebe0,#e8dcc6);border-radius:16px;margin-bottom:15px">🦷</div>';
              }}
            />

            {/* NAME */}
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#6f6048" }}>
              {doc.name}
            </h3>

            <p
              style={{
                fontSize: 15,
                marginTop: 6,
                color: "#5d5446",
                lineHeight: 1.4,
                marginBottom: 15,
              }}
            >
              {doc.title}
            </p>

            {/* SPECIALIST BADGES */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
                marginBottom: 18,
              }}
            >
              {doc.badges.map((b) => (
                <span
                  key={b}
                  style={{
                    padding: "6px 12px",
                    background: "#f2ebe0",
                    borderRadius: 20,
                    fontSize: 12,
                    color: "#6f6048",
                    border: "1px solid #e0d4c0",
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
                justifyContent: "space-between",
                padding: "12px 10px 18px",
                marginBottom: 15,
                borderTop: "1px solid #eee",
              }}
            >
              <Counter icon={<Award size={20} color="#6f6048" />} label="Years" value={doc.exp} />
              <Counter icon={<Star size={20} color="#6f6048" />} label="Treatments" value={doc.treatments} />
              <Counter icon={<Heart size={20} color="#6f6048" />} label="Happy" value={doc.happy} />
            </div>

            {/* BUTTON */}
            <button
              onClick={openModal}
              style={{
                padding: "12px 24px",
                background: "#6f6048",
                color: "white",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "15px",
                transition: "0.25s ease",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#5b4f3d")}
              onMouseLeave={(e) => (e.target.style.background = "#6f6048")}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      <style>
        {`
          .fade {
            opacity: 0;
            transform: translateY(20px);
            transition: all .8s ease;
          }
          .fade.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
}

function Counter({ icon, label, value }) {
  const displayValue =
    value > 1000 ? `${(value / 1000).toFixed(1)}k+` : `${value}+`;

  return (
    <div style={{ textAlign: "center" }}>
      {icon}
      <div style={{ fontWeight: 700, fontSize: 16, color: "#6f6048" }}>
        {displayValue}
      </div>
      <div style={{ fontSize: 12, color: "#5d5446" }}>{label}</div>
    </div>
  );
}

