export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ29yYW5raXRpYyIsImEiOiJja2Y1dWdlcjIwcWRpMzJvZjJ0cDd3aWp2In0.7bwLKyjeMHDVtC-flV8a4g';
    
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/gorankitic/cklu1ahak1j2g17o43lwezo2t',
        scrollZoom: false
    });
    
    const bounds = new mapboxgl.LngLatBounds()
    
    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div')
        el.className='marker'
    
        // Add marker
        new mapboxgl.Marker({ element: el, anchor: 'bottom' })
            .setLngLat(loc.coordinates)
            .addTo(map)
    
        // Add popup
        new mapboxgl.Popup({ offset: 30 })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map)
    
        // Extend map bound to include current location
        bounds.extend(loc.coordinates)
    })
    
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 200,
            left: 100,
            right: 100
        }
    })
}
