function createMarker(map, position, content, infowindow)//a reusable function to create multiple map markers
  {
    const marker = new google.maps.Marker({
        position: position,
        map: map
    });//creates new map marker and sets it to the proper map

    marker.addListener('click', function() {
        infowindow.setContent(content);
        infowindow.open(map, marker);
    });//if the marker is clicked, open the infowindow

    google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });//if the map is clicked, close the selected infowindow

    return marker;
}

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 44.9479, lng: -93.3056 },
        zoom: 10
    });//funciton to initialize the map
  
    const infowindow = new google.maps.InfoWindow();
//a array of text to fill the infowindows with
  const eventNames = ["Coastal Cleanup Day", "Plant a Tree", "Homeless Outreach Program", "Animal in Need", "Senior Citizen Support", "Community Garden Initiative", "Kids' Reading Program", "Disaster Relief Effort", "Veterans Support Program", "Community Food Drive"];
  const eventDescriptions = [ "Where volunteers gather to remove trash and debris from local beaches and coastlines", "Where volunteers gather to plant trees in local parks and community spaces", "Where volunteers assist in distributing food, clothing, and other essentials to homeless individuals in the community", "Where volunteers assist in caring for and providing enrichment activities for animals in shelters or rescue organizations", "Where volunteers assist in providing companionship and assistance to elderly individuals in the community", "Where volunteers gather to build and maintain community gardens in underprivileged neighborhoods", "Where volunteers read to and assist children with reading and literacy skills", "Where volunteers assist in rebuilding and providing aid to communities affected by natural disasters", "Where volunteers assist in providing support and resources for veterans and their families", "Where volunteers gather and collect non-perishable food items to be distributed to those in need within the community"];
//coordinates for
  const latitude = [44.9479, 44.9594, 44.8208, 44.8924, 44.9761, 44.9406, 44.9153, 44.8987, 44.8917, 44.9652 ];
  const longitude = [-93.3056, -93.1247, -93.1408, -93.2623, -93.1393, -93.2489, -93.3249, -93.2238, -93.1587, -93.2935];
  //for loop to create all the markers
  for(let i = 0; i <10; i++)
    {
    createMarker(map, { lat:latitude[i], lng:longitude[i] }, `
    <div id="content">
        <div id="siteNotice">
        </div>
        <h1 id="firstHeading" class="firstHeading">${eventNames[i]}</h1>
        <div id="bodyContent">
            <p>${eventDescriptions[i]}</p>
        </div>
    </div>`, infowindow)
    }

}
initMap();//initialize the map