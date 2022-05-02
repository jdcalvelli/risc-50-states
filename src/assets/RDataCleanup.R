### rscript for cleaning data and combining into one json file

### LOAD LIBRARIES
library(tidyverse)
library(jsonlite)

### LOAD BASE DATA
geobase <- fromJSON('us-states.json')
reportcard <- read_csv('reportcard2022.csv')

### REPORTCARD CLEANUP

#remove unused rows
reportcard <- reportcard[1:51, ]

#rename State column to name to match with geobase for inner join
colnames(reportcard)[1] <- 'name'

#rename long NGSS row to short NGSS? for ease of use with geobase
colnames(reportcard)[15] <- 'NGSS?'

#rename D.C to District of Columbia
reportcard$name[reportcard$name == "D.C"] <- 'District of Columbia'

#add empty puerto rico row to line up with geobase
reportcard[nrow(reportcard)+1, ] <- NA
reportcard$name[52] <- 'Puerto Rico'

### JOIN REPORTCARD TO GEOBASE

#joined data as copy of geobase
joinedData <- geobase

joinedData$features$properties <- inner_join(geobase$features$properties, reportcard, by = 'name')

### REMOVE THE PUERTO RICO FEATURE
joinedData$features <- joinedData$features[1:51,]

### OUTPUT GEOJSON FOR USE IN REACT
outputJSON <- toJSON(joinedData)
write(outputJSON, 'RJoinedGeoJSON.json')
