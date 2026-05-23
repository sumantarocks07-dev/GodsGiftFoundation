export const siteConfig = {
  name: "God's Gift Foundation",
  description:
    "God's Gift Foundation is a rehabilitation and old age care centre in Howrah, West Bengal, offering detoxification, addiction recovery support, meditation therapy, yoga wellness, and compassionate residential care.",
  url: "https://www.godsgiftfoundation.in",
  ogImage: "https://www.godsgiftfoundation.in/og-image.png",
  links: {
    facebook: "https://www.facebook.com/share/1GxH3M1e95/",
    instagram: "https://www.instagram.com/godsgiftfoundation.in?igsh=MXN6dzh5MzZndWppbg==",
    whatsapp: "https://wa.me/918240232359",
  },
  contact: {
    phone: "+91 8240232359",
    email: "godsgiftfoundation2021@gmail.com",
    address: "19 V Rd, near Apanjan club, Dasnagar, Howrah, West Bengal 711105",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "God's Gift Foundation",
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/image/logo.png`,
  image: siteConfig.ogImage,
  sameAs: [siteConfig.links.facebook, siteConfig.links.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    contactType: "Customer Service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "19, V Rd, near Apanjan club, Panchanantala, Dasnagar",
    addressLocality: "Howrah",
    addressRegion: "West Bengal",
    postalCode: "711105",
    addressCountry: "IN",
  },
};

export const medicalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "God's Gift Foundation",
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  image: siteConfig.ogImage,
  areaServed: "IN",
  knowsAbout: [
    "Detoxification",
    "Addiction Rehabilitation",
    "De-addiction Support",
    "Mental Wellness",
    "Meditation Therapy",
    "Yoga Therapy",
    "Old Age Care",
    "Residential Care",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "God's Gift Foundation",
  image: siteConfig.ogImage,
  "@id": siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  priceRange: "Affordable",
  areaServed: {
    "@type": "State",
    name: "West Bengal",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};
