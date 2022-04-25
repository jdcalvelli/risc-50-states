// helper script for loading in pre-combined data

import Papa from 'papaparse'
import { features } from '../assets/RJoinedGeoJSON.json'

function loadData() {
    //load in geojson and load/parse csv
    let joinedData = features;

    return joinedData;
}

export { loadData }