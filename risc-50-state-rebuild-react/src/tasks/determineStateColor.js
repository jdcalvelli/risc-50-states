//helper script for setting display color based on a particular factor

import { features } from '../assets/RJoinedGeoJSON.json'

function determineStateColor(property) {
    
    switch (property) {
        case 'A':
            //return a color
            return ({
                color: '#d9ef8b'
            })
    
        case 'B':
            //return a yellow
            return {color: '#fee08b'};

        case 'C':
            //return a return a yellowish red
            return {color: '#f46d43'};
        
        case 'D':
            //return a red
            return {color: '#d73027'};

        case 'F':
            //return a deep red
            return {color: '#a50026'};

        default:
            //return grey for no data
            return {color: '#808080'};
    }
}

export { determineStateColor }