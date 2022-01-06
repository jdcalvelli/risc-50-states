#LIBRARIES

library(tidyverse)
library(leaflet)
library(sf)
library(htmltools)

#LOAD IN SHAPEFILE

states_shp <- st_read("tl_2021_us_state/tl_2021_us_state.shp")

#LOAD IN DATA

state_grades <- read.csv("state_report_final.csv")

#CLEANING DATA

state_grades <- filter(state_grades, state_grades$State != "")

state_grades_simplified <- state_grades[c("State", "Final.Grade", "Reasoning..Presentable.")]

state_grades_simplified$State[state_grades_simplified$State == "California "] <- "California"
state_grades_simplified$State[state_grades_simplified$State == "D.C"] <- "District of Columbia"

state_grades_simplified$Final.Grade.Factor <- as.factor(state_grades_simplified$Final.Grade)
state_grades_simplified <- rename(state_grades_simplified, NAME = State)

state_grades_simplified_shp <- inner_join(states_shp, state_grades_simplified)

#MAP CREATION

#adding bins and color palette
bins <- as.numeric(as.factor(c("F", "D-", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+")))
pal <- colorBin(c( '#98b01e', '#b09d1e', '#b0621e', '#b03b1e', '#b01e1e'), 
                domain = state_grades_simplified_shp$Final.Grade.Factor, 
                bins = bins)

#creating labels
popups <- sprintf(
  '<div style = "text-align: center;"> %s </div>
  <div style = "text-align: center; font-weight: bold;"> %s </div>
  <div> %s </div>',
  state_grades_simplified_shp$NAME,
  state_grades_simplified_shp$Final.Grade,
  state_grades_simplified_shp$Reasoning..Presentable.
) %>%
  lapply(htmltools::HTML)

#making actual map
leaf <- leaflet(state_grades_simplified_shp, 
                options = leafletOptions(
                  maxZoom = 7,
                  minZoom = 2,
                )) %>%
  setView(-96, 37.8, 4) %>%
  addProviderTiles(providers$Stamen.Toner) #add basemap tiles

#adding polygons
leaf %>% addPolygons(
  fillColor = ~pal(as.numeric(Final.Grade.Factor)),
  weight = 2,
  opacity = 1,
  color = "white",
  dashArray = "3",
  fillOpacity = 0.7,
  highlightOptions = highlightOptions(
    weight = 5,
    color = "#666",
    dashArray = "",
    fillOpacity = 0.7,
    bringToFront = TRUE),
  popup = popups
)

#leaflet for r documentation: https://rstudio.github.io/leaflet/