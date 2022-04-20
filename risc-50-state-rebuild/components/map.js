// have to create a leaflet and then have it be displayed through mithril
//put the map in a div and have the inside be the map
//how to track across this component to the other with the data? - global variable?
import L from 'leaflet';
import { LeafletMap } from 'mithril-leaflet';
import m from 'mithril';


const Map = {
    view: function() {
        return m(LeafletMap, {
            style: 'height: 400px; margin-top: 20px;',
            baseLayers: {
                osm: {
                    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
                    options: {
                        subdomains: ['a', 'b', 'c', 'd'],
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    }
                }
            }
        })
    }
}

export { Map }