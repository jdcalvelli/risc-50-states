import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//add css here
import 'leaflet/dist/leaflet.css'
import './style.css'

import { Heading } from "./components/heading";
import { MapSection } from "./components/map";
import { WhySection } from "./components/WhySection";
import { HowSection } from "./components/HowSection"
import { ClosingSection } from "./components/ClosingSection";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Heading/>
    <MapSection/>
    <WhySection/>
    <HowSection/>
    <ClosingSection/>
  </StrictMode>
);