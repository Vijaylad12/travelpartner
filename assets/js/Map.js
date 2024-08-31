var map, direction_plugin;
function initMap1() {
    map = new mappls.Map('map', {
        center: [28.09, 78.3],
        zoom: 5,
    });

    const temp = [
        { label: 'panhala-Fort', geoposition: "16.8111961,74.1063813", bestTimeVisit: "m", visited: 0 },
        { label: "Dajipur Wildlife Sanctuary", geoposition: "16.3837901,73.858529", bestTimeVisit: "m", visited: 0 },
        { label: 'Shri Chatrapati Shahu Museum (New Palace)', geoposition: "16.7193627,74.2291601", bestTimeVisit: "m", visited: 0 },
        { label: 'Gaganbawada', geoposition: "16.5447467,73.8285768", bestTimeVisit: "m", visited: 0 },
        { label: 'Sagareshwar deer sanctuary', geoposition: "17.1524136,74.3756682", bestTimeVisit: "m", visited: 0 },
    ]

    map.addListener('load', function () {
        /*direction plugin initialization*/
        var direction_option = {
            map: map,
            divWidth: '350px',
            divHeight: '500px',
            isDraggable: true,
            end: { label: 'Rankala', geoposition: "16.6887228,74.2056566" },
            Profile: ['driving', 'biking', 'walking'],
            via:
                [
                    { label: 'panhala-Fort', geoposition: "16.8111961,74.1063813", bestTimeVisit: "m", visited: 0 },
                    { label: "Dajipur Wildlife Sanctuary", geoposition: "16.3837901,73.858529", bestTimeVisit: "m", visited: 0 },
                    { label: 'Shri Chatrapati Shahu Museum (New Palace)', geoposition: "16.7193627,74.2291601", bestTimeVisit: "m", visited: 0 },
                    { label: 'Gaganbawada', geoposition: "16.5447467,73.8285768", bestTimeVisit: "m", visited: 0 },
                    { label: 'Sagareshwar deer sanctuary', geoposition: "17.1524136,74.3756682", bestTimeVisit: "m", visited: 0 },
                    
                ]

        }
        mappls.direction(direction_option, function (data) {
            direction_plugin = data;
            console.log(direction_plugin);
            console.log('distance-->' + direction_plugin.data[0].distance);
            const dist = direction_plugin.data[0].distance
            const cost = parseFloat(dist.split("km"));
            console.log('cost -->' + ((temp.length / 3 ) * 1000 + cost * 3));
        });
    });
}