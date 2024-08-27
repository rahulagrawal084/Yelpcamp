//coming from show.ejs script part
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: campground.geometry.coordinates,  //campground coming from show.ejs script part
    zoom: 10
});

//Add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());

//to add marker on our location in maps
new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)