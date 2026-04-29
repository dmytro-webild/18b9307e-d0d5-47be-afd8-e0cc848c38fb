"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Forva Studios"
      button={{
        text: "Get Started",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="FORVA"
      description="Where innovation meets professional creative direction. We help brands thrive in a digital-first world."
      buttons={[
        {
          text: "Explore Work",          href: "#about"},
        {
          text: "Contact Us",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320710.jpg",          imageAlt: "Workspace"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-discussing-new-ideas_176420-1662.jpg",          imageAlt: "Collaboration"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-seamless-pattern-design_23-2151179209.jpg",          imageAlt: "Studio"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wallpaper-blue-orange-cubes-dark-background_1123-370.jpg",          imageAlt: "Tech"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/professional-video-camera-stand-with-monitors-table-studio-virtual-production_1268-17880.jpg",          imageAlt: "Equipment"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-hands-holding-paper_23-2149930960.jpg",          imageAlt: "Design"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Crafting the Future of Digital Experiences"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Legacy design constraints",          "Outdated workflows",          "Fragmented branding"],
      }}
      positiveCard={{
        items: [
          "Innovative digital strategy",          "Future-proof development",          "Cohesive brand identity"],
      }}
      title="The Forva Difference"
      description="We balance creative vision with technical precision."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "What is the timeline?",          content: "Projects typically last between 8-12 weeks."},
        {
          id: "q2",          title: "Do you work remotely?",          content: "Yes, we are a global, remote-first studio."},
        {
          id: "q3",          title: "How do we start?",          content: "Book a discovery call through our contact form."},
      ]}
      sideTitle="Questions? Answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Let's Chat"
      title="Ready to build something iconic?"
      description="We are ready to work with you on your next big vision."
      buttons={[
        {
          text: "Contact Us",          href: "mailto:hello@forva.studios"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Services",              href: "#features"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Privacy",              href: "#"},
          ],
        },
      ]}
      logoText="FORVA"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}