onmessage = (event) => {
    let features = event.data.features;
    let processedFeatures = {};
    // Perform certain function on the features based on their type
    if (event.data.type === "Point") {
        processedFeatures = features.map((feature) => {
            feature.properties.marker = L.circleMarker(feature.geometry.coordinates.reverse(), {
                radius: 1.8,
                fillColor: "blue",
                color: "white",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
            return feature;
        });
    } else if (event.data.type === "LineString") {
        processedFeatures = features.map((feature) => {
            feature.properties.style = {
                "color": "red",
                "weight": 5,
                "opacity": 0.65
            };
            return feature;
        });
    } else if (event.data.type === "Polygon") {
        processedFeatures = features.map((feature) => {
            feature.properties.style = {
                "color": "green",
                "weight": 2,
                "fillOpacity": 0.1
            };
            return feature;
        });
    }
    postMessage({type: event.data.type, features: processedFeatures});
}

