const PlaceHolderSection = ({ title }) => {
  return (
    <section
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        background:
          "linear-gradient(135deg, #f8faff 0%, #eef4ff 50%, #f7fbff 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "820px",
          textAlign: "center",
          background: "#ffffff",
          padding: "60px 50px",
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0, 8, 90, 0.08)",
        }}
      >
        <div
          style={{
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#1b46a4",
            marginBottom: "18px",
          }}
        >
          Inkonsul Training Academy
        </div>

        <h1
          style={{
            fontSize: "48px",
            lineHeight: "1.2",
            color: "#00075b",
            marginBottom: "24px",
            fontWeight: "700",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#444",
            maxWidth: "680px",
            margin: "0 auto 30px",
          }}
        >
          We’re building something valuable here.
          A thoughtfully designed learning experience is currently
          being crafted to deliver practical skills, industry insight,
          and future-ready expertise.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
            maxWidth: "620px",
            margin: "0 auto 40px",
          }}
        >
          This programme page is being updated with complete details
          including curriculum, learning outcomes, certification,
          tools covered, and enrollment information.
          Please check back shortly.
        </p>

        <div
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: "40px",
            background: "#00075b",
            color: "#ffffff",
            fontWeight: "600",
            fontSize: "15px",
            letterSpacing: "1px",
          }}
        >
          Page Update in Progress
        </div>
      </div>
    </section>
  );
};

export default PlaceHolderSection;