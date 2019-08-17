
var data = [
//enter the detail of product 1 deals
//enter the name,description,location,image and price of product 1 deals 
  
  {
     
    "name": "A bean-squeezing stress reliever",
     "description": "$8.99; buy now on Amazon Nothing quite relieves stress like popping a cute little emoji-faced bean out of a pod—right?.",
     "image":"bean.jpg",
     "price":"$8.50",
     "location": "college plaza ",
     
     
    },
    //enter the detail of product 2 deals
    //enter the name,description,location,image and price of product 2 deals 
  
    {
      
      "name": "A cat carrier dress",
      "description": "Bringing your cat around in a plastic carrier is so passé. If you need to keep your cat closer, you can always opt for this dress with a cat pouch instead.",
      "image": "dress.jpg",
      "price":"$16.99",
      "location": "kennedy road",
    
    },
    //enter the detail of product 3 deals
    //enter the name,description,location,image and price of product 3 deals 
  
    {

      
      "name": "A Nicolas Cage sequin pillowcase",
      "description": "This pillow is very fun and addicting to play with, it can be a fun / unique gift idea for Christmas, birthday, birthday, boyfriend, girlfriend ",
      "image": "pillow.jpg",
      "price":"$36.40",
      "location": "square one",
    
    },
]

var htmlText = '';
// to create the head statement  file and describe the data key
for ( var key in data ) {
htmlText += '<div style="box-shadow: 0 4px 8px 0 rgba(0,0,255, 0.1); text-align: center;font-family: arial;" class="div-conatiner">';
htmlText += '<h2 class="p-name"> Name: ' + data[key].name + '</h2>';
htmlText += '<img style=" max-width: 300px;" src= ' +data[key].image +'>';
htmlText += '<h3 class="p-loc"> Location: ' + data[key].location + '</h3>';
htmlText += '<h3 class="p-loc"> Price: ' + data[key].price + '</h3>';

htmlText += '<h4 class="p-desc"> Description: ' + data[key].description + '</h4>';
htmlText += '</div>';
}

$('body').append(htmlText);
    
        function getJSONMarkers() {
          const markers = [
            {
              //enter the name of the product 1 as well as location
              name:  "A bean-squeezing stress reliever",
              location: [25.1212, 55.1535]
            },
            {
               //enter the name of the product 2 as well as location
              name: "A cat carrier dress",
              location: [25.2084, 55.2719]
            },
            {
               //enter the name of the product 3 as well as location
              name: "A Nicolas Cage sequin pillowcase",
              location: [25.2285, 55.3273]
            }
          ];
          return markers;
        }

        function loadMap() {
          // Initialize Google Maps
          const mapOptions = {
            center:new google.maps.LatLng(25.2048, 55.2708),
            zoom: 11
          }
          const map = new google.maps.Map(document.getElementById("map"), mapOptions);

          // Load JSON Data
          const hotelMarkers = getJSONMarkers();

          // Initialize Google Markers
          for(hotel of hotelMarkers) {
            let marker = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(hotel.location[0], hotel.location[1]),
              title: hotel.name
            })
          }
        }
  