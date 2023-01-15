  // Initialize the map
  var map = L.map('map').setView([0, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 24,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:'pk.eyJ1IjoiMjU2Yml0cyIsImEiOiJja3pjcDhmcW0wZXNxMnBweWlibjJqc3l0In0.le4TGVn-uombhMfZILJ2iw' 

});

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 30,
    subdomains:['mt0','mt1','mt2','mt3']
});
var baseLayers = {
    
    "Mapbox": mapbox,
    "OpenStreetMap": osm,
    "satilite": googleSat,
    "hybrid": googleHybrid
    };
    var control = L.control.layers(baseLayers).addTo(map);

  // Initialize variables for layers, current layer, and edit
var layers = [];
var currentLayer = 0;
var editMode = 'add';
  // Import and export functions

// Import function
function importFile() {
    // Create a file input element
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".geojson, .shp"; // allow only geojson and shapefile formats
    fileInput.onchange = function() {
      var file = fileInput.files[0];
      if (file) {
        // File reader to read the file
        var reader = new FileReader();
        reader.onload = function() {
          // Parse the file based on its file type
          if (file.name.endsWith(".geojson")) {
            var geojson = JSON.parse(reader.result);
            //console.log(geojson.features);
            points=[];
            
            addGeoJSONToMap(geojson);
          } else if (file.name.endsWith(".shp")) {
            // Code for parsing shapefile and adding to map
          }
        };
        reader.readAsText(file);
      }
    };
    fileInput.click();
  }
  var myLayerStyle = {
    color: "orange",//"#add8e6",
    radius: 1.9
  };

function createCircles (feature, latlng) {
    return L.circleMarker(latlng, myLayerStyle)
  };

  var myLayerOptions = {
    pointToLayer: createCircles
  };
  
  // Function to add GeoJSON to the map
function addGeoJSONToMap(geojson) {
    // Create a layer from the GeoJSON data
    for ( var i=0, len=geojson.features.length; i<len; i++  ){
      //cond = geojson.features[i].geometry.type;
      //console.log(cond);
       if(geojson.features[i].geometry.type ==='Point')
       {
         //console.log(geojson.features[i]);
         var layer = L.geoJSON(geojson, myLayerOptions);
         
         
       }
       else{
        var layer = L.geoJSON(geojson);

       }
      };

    //console.log(layer);

    // Add the layer to the map
    layer.addTo(map);
    // Add the layer to the layers array
    layers.push(layer);
    map.fitBounds(layer.getBounds());
  }
  

function exportFile() {
// Code for file export function
}

// Multi-layer support functions
function addLayer() {
// Code for adding a new layer
}

function removeLayer() {
// Code for removing the current layer
}

function prevLayer() {
// Code for switching to the previous layer
}

function nextLayer() {
// Code for switching to the next layer
}

// Advanced editing functions
function addPoint(latlng) {
// Code for adding a new point
}

function movePoint(latlng) {
// Code for moving a point
}

function deletePoint(latlng) {
// Code for deleting a point
}

function splitFeature(latlng) {
// Code for splitting a feature
}

function mergeFeatures(feature1, feature2) {
// Code for merging two features
}

// Query and Analysis functions
function queryWithin(area) {
// Code for finding all features within a certain area
}

function queryNearest(point) {
// Code for finding the nearest feature to a point
}

function calculateAreaAndPerimeter(feature) {
// Code for calculating the area and perimeter of a feature
}

// Raster data support functions
function addRasterLayer(url) {
// Code for adding a raster layer
}

function mosaicRaster(layer1, layer2) {
// Code for performing a mosaic operation on a raster layer
}

function hillshadeRaster(layer, azimuth, altitude) {
}
function slopeAspectRaster(layer) {
// Code for performing a slope and aspect calculation on a raster layer
}

function NDVIRaster(layer) {
// Code for performing a NDVI calculation on a raster layer
}

// Collaboration functions
function initializeFirebase() {
// Code for initializing Firebase
}

function startCollaboration() {
// Code for starting real-time collaboration
}

// Scripting and Automation functions
function runScript() {
// Code for running a script
}

// Add event listeners for editing features
map.on('click', function (e) {
if (editMode === 'add') {
  addPoint(e.latlng);
} else if (editMode === 'move') {
  movePoint(e.latlng);
} else if (editMode === 'delete') {
  deletePoint(e.latlng);
} else if (editMode === 'split') {
  splitFeature(e.latlng);
}
});