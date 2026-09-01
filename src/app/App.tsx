import { useState, useEffect } from "react";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CompaniesSection } from "./components/CompaniesSection";
import { UpcomingVentures } from "./components/UpcomingVentures";
import { WhySAPSection } from "./components/WhySAPSection";
import { ChairmanSection } from "./components/ChairmanSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { InnovationSection } from "./components/InnovationSection";
import { SustainabilitySection } from "./components/SustainabilitySection";
import { TimelineSection } from "./components/TimelineSection";
import { InvestorSection } from "./components/InvestorSection";
import { AwardsSection } from "./components/AwardsSection";
import { NewsSection } from "./components/NewsSection";
import { CareersSection } from "./components/CareersSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

// Company Pages

import Textiles from "./pages/Textiles";


export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);


  /* ============================================================
     LOADING SCREEN
  ============================================================ */

  useEffect(() => {

    const timer = setTimeout(
      () => setIsLoading(false),
      2200
    );

    return () => clearTimeout(timer);

  }, []);


  /* ============================================================
     DARK MODE
  ============================================================ */

  useEffect(() => {

    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };


  /* ============================================================
     SIMPLE PAGE ROUTING
  ============================================================ */

  const path = window.location.pathname;


  /*
     Company pages
  */

  

  if (path === "/companies/textiles") {
    return <Textiles />;
  }


  /* ============================================================
     MAIN SAP GROUPS WEBSITE
  ============================================================ */

  return (

    <div
      className={`
        min-h-screen
        bg-white
        dark:bg-[#040D1A]
        transition-colors
        duration-500
        ${darkMode ? "dark" : ""}
      `}
    >

      <LoadingScreen
        isLoading={isLoading}
      />

      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />


      <main>

        {/* ======================================================
            HERO
        ====================================================== */}

        <HeroSection />


        {/* ======================================================
            WHO WE ARE
        ====================================================== */}

        <AboutSection />


        {/* ======================================================
            OUR COMPANIES
        ====================================================== */}

        <CompaniesSection />


        {/* ======================================================
            UPCOMING VENTURES
        ====================================================== */}

        <UpcomingVentures />


        {/* ======================================================
            WHY SAP
        ====================================================== */}

        <WhySAPSection />


        {/* ======================================================
            CHAIRMAN
        ====================================================== */}

        <ChairmanSection />


        {/* ======================================================
            LEADERSHIP
        ====================================================== */}

        <LeadershipSection />

     
             {/* ======================================================
            TIMELINE
        ====================================================== */}

        <TimelineSection />


        {/* ======================================================
            CAREERS
        ====================================================== */}

        


        {/* ======================================================
            CONTACT
        ====================================================== */}

        <ContactSection />

      </main>


      {/* ========================================================
          FOOTER
      ======================================================== */}

      <FooterSection />

    </div>
  );
}