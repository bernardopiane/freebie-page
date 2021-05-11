import React from "react";
import Charges from "../components/Charges";
import ChooseApp from "../components/ChooseApp";
import Clients from "../components/Clients";
import Companies from "../components/Companies";
import Designed from "../components/Designed";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Jackpot from "../components/Jackpot";
import Trial from "../components/Trial";
import Ultimate from "../components/Ultimate";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Companies />
      <Features />
      <Jackpot />
      <Designed />
      <ChooseApp />
      <Ultimate />
      <Charges />
      <Clients />
      <FAQ />
      <Trial />
      <Footer />
    </div>
  );
}
