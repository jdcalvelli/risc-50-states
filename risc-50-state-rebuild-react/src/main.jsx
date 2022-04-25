import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//add css here
import 'leaflet/dist/leaflet.css'
import './style.css'

import { Heading } from "../components/heading";
import { MapSection } from "../components/map";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Heading/>
    <MapSection/>
  </StrictMode>
);