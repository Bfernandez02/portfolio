import React from "react";
import Head from "next/head";

export default function SEOHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Brandon Fernandez - Software Developer & Web Development Specialist</title>
      <meta 
        name="description" 
        content="Portfolio of Brandon Fernandez, a passionate software developer and web development specialist based in Ontario. Explore professional work, AI experiments, and personal projects showcasing expertise in fullstack development and computer science." 
      />
      <meta name="keywords" content="Brandon Fernandez, Software Developer, Web Development, Fullstack Developer, Computer Science, AI Research, Ontario, Portfolio, React, Next.js, JavaScript, TypeScript" />
      <meta name="author" content="Brandon Fernandez" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://brandonhfernandez.com/" />
      <meta property="og:title" content="Brandon Fernandez - Software Developer & Web Development Specialist" />
      <meta 
        property="og:description" 
        content="Portfolio of Brandon Fernandez, a passionate software developer and web development specialist based in Ontario. Explore professional work, AI experiments, and personal projects." 
      />
      <meta property="og:image" content="https://brandonhfernandez.com/headshot.jpg" />
      <meta property="og:site_name" content="Brandon Fernandez Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://brandonhfernandez.com/" />
      <meta property="twitter:title" content="Brandon Fernandez - Software Developer & Web Development Specialist" />
      <meta 
        property="twitter:description" 
        content="Portfolio of Brandon Fernandez, a passionate software developer and web development specialist based in Ontario. Explore professional work, AI experiments, and personal projects." 
      />
      <meta property="twitter:image" content="https://brandonhfernandez.com/headshot.jpg" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://brandonhfernandez.com/" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Brandon Fernandez",
            "jobTitle": "Software Developer & Web Development Specialist",
            "description": "Passionate software developer with expertise in fullstack development, AI research, and computer science",
            "url": "https://brandonhfernandez.com",
            "image": "https://brandonhfernandez.com/headshot.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Ontario",
              "addressCountry": "CA"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Brock University"
            },
            "knowsAbout": [
              "Web Development",
              "Software Development",
              "Fullstack Development",
              "AI Research",
              "Computer Science",
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript"
            ],
            "sameAs": []
          })
        }}
      />
    </Head>
  );
}
