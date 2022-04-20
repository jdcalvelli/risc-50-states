// have to create a leaflet and then have it be displayed through mithril
//put the map in a div and have the inside be the map
//how to track across this component to the other with the data? - global variable?
import L from 'leaflet';
import provider from 'leaflet-providers';
import m from 'mithril';

const Map = {
    view: function() {
        return m('h1', 'this is where the map needs to go')
    }
}

export { Map }