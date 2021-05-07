import React from "react";
import Charges from "../components/Charges";
import ChooseApp from "../components/ChooseApp";
import Companies from "../components/Companies";
import Designed from "../components/Designed";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Jackpot from "../components/Jackpot";
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
    </div>
  );
}