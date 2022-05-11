import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//add css here
import 'leaflet/dist/leaflet.css'
import './style.css'

import { loadData } from "./tasks/loadData";

import { NavBarSection } from "./components/NavBarSection";
import { HeadingSection } from "./components/HeadingSection";
import { MapSection } from "./components/MapSection";
import { DistributionSection } from "./components/DistributionSection";
import { WhySection } from "./components/WhySection";
import { HowSection } from "./components/HowSection"
import { ClosingSection } from "./components/ClosingSection";
import { FooterSection } from "./components/FooterSection";

const loadedData = loadData();

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NavBarSection/>
    <HeadingSection/>
    <MapSection loadedData={loadedData}/>
    <DistributionSection loadedData={loadedData}/>
    <WhySection/>
    <HowSection/>
    <ClosingSection/>
    <FooterSection/>
  </StrictMode>
);