mapboxgl.accessToken = mapToken; // ✅ correct case

  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: listing.geometry.coordinates, // should be [lng, lat]
  zoom: 9
});

console.log(listing.geometry.coordinates); // log the correct variable

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // just single parentheses
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be Provided after booking</p>`)
  )
  .addTo(map);
