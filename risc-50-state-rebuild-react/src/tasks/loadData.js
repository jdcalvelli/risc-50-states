// helper script for loading in and combining data to be displayed on map

import { papa } from 'papaparse'
import { features } from '../assets/us-states.json'

    //WHAT DO I NEED TO DO
    //1 load in geojson
    //2 load and parse csv
    //3 join the two together
    //4 display the grade with a click of mouse on state
    //5 change color of map based on csv data

function loadData() {
    let geoBase = features;
    //let reportCard = Papa.parse()

    return geoBase;
}

export { loadData }