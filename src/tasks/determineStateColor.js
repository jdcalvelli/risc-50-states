//helper script for setting display color based on a particular factor

import { features } from '../assets/RJoinedGeoJSON.json'

function determineStateColor(property) {
    
    switch (property) {
        case 'A':
            //return a color
            return ({
                fillColor: '#d9ef8b',
                fillOpacity: 1,
                weight: 2,
                color: 'black',
            })
    
        case 'B':
            //return a yellow
            return ({
                fillColor: '#fee08b',
                fillOpacity: 1,
                weight: 2,
                color: 'black'
            })

        case 'C':
            //return a return a yellowish red
            return ({
                fillColor: '#f46d43',
                fillOpacity: 1,
                weight: 2,
                color: 'black'
            })
        
        case 'D':
            //return a red
            return ({
                fillColor: '#d73027',
                fillOpacity: 1,
                weight: 2,
                color: 'black'
            })
        case 'F':
            //return a deep red
            return ({
                fillColor: '#a50026',
                fillOpacity: 1,
                weight: 2,
                color: 'black'
            })

        default:
            //return grey for no data
            return ({
                fillColor: '#808080',
                fillOpacity: 1,
                weight: 2,
                color: 'black'
            })
    }
}

export { determineStateColor }