mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates,
  zoom: 9,
});

// console.log(coordinates);

// const marker = new mapboxgl.Marker()
//   .setLngLat(coordinates) //listing.geometry.coordinate
//   .addTo(map);

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      " <p>Exact location will be Provided after booking!</p>"
    )
  )
  .addTo(map);
