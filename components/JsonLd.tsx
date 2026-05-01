export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ASM Sprinkler & Landscaping",
    description:
      "Family-owned Visalia sprinkler and landscape contractor since 1971. Sprinkler repair, installation, drip irrigation, valve replacement, yard drainage, and landscape design across Tulare County.",
    url: "https://asmsprinkler-landscaping.example.com/",
    telephone: "+15597302284",
    foundingDate: "1971",
    founder: { "@type": "Person", name: "Stacy Mattoon" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2726 W Whitendale Ave",
      addressLocality: "Visalia",
      addressRegion: "CA",
      postalCode: "93277",
      addressCountry: "US",
    },
    areaServed: ["Visalia", "Tulare", "Farmersville", "Patterson Tract", "Tulare County"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    hasCredential: [
      "CSLB licensed",
      "$15,000 contractor bond",
      "BBB on file since 1975",
      "BuildZoom score 93/100",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
