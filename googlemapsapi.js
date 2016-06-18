  // $(document).ready(function(){
   var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    // });





// $(document).ready(function(){
//    var map;

//   $ajax({
//     type:"GET",
//     url:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDDXPKM3P2ZJPTh58O3KnXiG_QDYG0KuBg&callback=initMap"
//     success: function(data, x) {
//         x =  function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }
//       }
//  })
// });