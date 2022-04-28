//helper script for setting display color based on a particular factor

import { features } from '../assets/RJoinedGeoJSON.json'

function determineStateColor(property) {
    
    switch (property) {
        case 'A':
            //return a royal blue
            return ({
                fillColor: '#2b83ba',
                fillOpacity: 1,
                weight: 2,
                color: 'black',
            })
    
        case 'B':
            //return a green
            return ({
                fillColor: '#abdda4',
                fillOpacity: 1,
                weight: 2,
                color: 'black'
            })

        case 'C':
            //return a yellow
            return ({
                fillColor: '#ffffbf',
                fillOpacity: 1,
                weight: 2,
                color: 'black'
            })
        
        case 'D':
            //return an orange
            return ({
                fillColor: '#fdae61',
                fillOpacity: 1,
                weight: 2,
                color: 'black'
            })
        case 'F':
            //return a red
            return ({
                fillColor: '#d7191c',
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