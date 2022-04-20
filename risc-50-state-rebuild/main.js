import './style.css'
import m from "mithril";

import { NavComponent } from "./components/nav";
import { HeaderComponent } from "./components/header"
import { MapComponent } from "./components/map"

let root = document.body;

const App = {
  view: function() {
    return m('div', {class: 'app'}, [
      m(NavComponent),
      m(HeaderComponent),
      m(MapComponent)
    ])
  }
}

m.mount(root, App);
