//helper script to determine color for chart name
//this and determineStateColor could be refactored together later if time allows

function determineChartNameColor(property) {
    switch (property) {
        case 'A':
            return '#93C851'
            break;
    
        
        case 'B':
            return '#F3D65C'
            break;
        
        case 'C':
            return '#FF8634'
            break;

        case 'D':
            return '#E24544'
            break;
        
        case 'F':
            return '#AA0201'
            break;

        default:
            return '#808080'
            break;
    }
}

export { determineChartNameColor }