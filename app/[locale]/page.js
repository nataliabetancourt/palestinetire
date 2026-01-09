import LandingSection from "@/components/home/LandingSection/LandingSection";
import AboutSection from "@/components/home/AboutSection/AboutSection";
import ServicesSection from "@/components/home/ServicesSection/ServicesSection";
import ValuesSection from "@/components/home/ValuesSection/ValuesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection/ContactSection";

// SEO Metadata for home page
export const metadata = {
  title: "Palestine Tire Center | Premium Tires & Auto Accessories in Palestine, TX",
  description:
    "Palestine Tire Center offers expert tire sales, premium auto accessories, and professional vehicle maintenance. Quality products and services you can trust in Palestine, Texas.",
  keywords:
    "Palestine Tire Center, tire shop Palestine TX, auto accessories, tire sales, car maintenance Palestine, wheel accessories, tire repair, premium tires, vehicle customization Palestine TX",
  openGraph: {
    title: "Palestine Tire Center | Premium Tires & Auto Accessories",
    description:
      "Expert tire sales, premium auto accessories, and professional vehicle maintenance in Palestine, Texas.",
    url: "https://www.palestinetire.com/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Palestine Tire Center",
      },
    ],
  },
  alternates: {
    canonical: "https://www.palestinetire.com/",
  },
};

export default function Home() {
  return (
    <>
      {/* Landing Section with Video Background */}
      <LandingSection />

      {/* Additional sections will be added here */}
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <TestimonialsSection />
      <ContactSection/>
    </>
  );
}