const logos = [
  "/logos/logo_1.png",
  "/logos/logo_2.png",
  "/logos/logo_3_0.png",
  "/logos/logo_4.png",
  "/logos/logo_5_.png",
  "/logos/logo_6_.png",
  "/logos/logo_7_.png",
  "/logos/logo_8.png",
  "/logos/logo_9.png",
  "/logos/logo_10.png",
  "/logos/logo_11.png",
];

export default function LogoBanner() {
  return (
    <section className="logo-banner">
      <div className="logo-track">

        {/* First set */}
        {logos.map((logo, index) => (
          <div className="logo-item" key={`first-${index}`}>
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              className={`logo-image ${
                logo === "/logos/logo_6_.png" ? "logo-image-large" : ""
              }`}
            />
          </div>
        ))}

        {/* Duplicate set */}
        {logos.map((logo, index) => (
          <div className="logo-item" key={`second-${index}`}>
            <img
              src={logo}
              alt=""
              className={`logo-image ${
                logo === "/logos/logo_6_.png" ? "logo-image-large" : ""
              }`}
            />
          </div>
        ))}

      </div>
    </section>
  );
}