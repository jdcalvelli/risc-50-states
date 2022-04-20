import './style.css'
import m from "mithril";

import { Nav } from "./components/nav";
import { Header } from "./components/header"
import { Map } from "./components/map"

let root = document.body;

const App = {
  view: function() {
    return m('div', {class: 'app'}, [
      m(Nav),
      m(Header),
      m(Map)
    ])
  }
}

m.mount(root, App);
