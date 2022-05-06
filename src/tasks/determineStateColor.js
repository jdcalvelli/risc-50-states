//helper script for setting display color based on a particular factor

import { features } from '../assets/RJoinedGeoJSON.json'

function determineStateColor(property) {
    
    switch (property) {
        case 'A':
            //return a royal blue
            return ({
                fillColor: '#93C851',
                fillOpacity: 0.5,
                weight: 1.5,
                color: 'black',
            })
    
        case 'B':
            //return a green
            return ({
                fillColor: '#F3D65C',
                fillOpacity: 0.5,
                weight: 1.5,
                color: 'black'
            })

        case 'C':
            //return a yellow
            return ({
                fillColor: '#FF8634',
                fillOpacity: 0.5,
                weight: 1.5,
                color: 'black'
            })
        
        case 'D':
            //return an orange
            return ({
                fillColor: '#E24544',
                fillOpacity: 0.5,
                weight: 1.5,
                color: 'black'
            })
        case 'F':
            //return a red
            return ({
                fillColor: '#AA0201',
                fillOpacity: 0.5,
                weight: 1.5,
                color: 'black'
            })

        default:
            //return grey for no data
            return ({
                fillColor: '#808080',
                fillOpacity: 0.5,
                weight: 1.5,
                color: 'black'
            })
    }
}

export { determineStateColor }