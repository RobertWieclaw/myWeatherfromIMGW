

// Init storage
const storage = new Storage();
// Get stored location data
const imgwhttpLocation = storage.getLocationData();
// Init weather object

const imgwhttp = new ImgwHTTP(imgwhttpLocation.stacja);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded',getImgwHTTP);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const stacja = document.getElementById('stacja').value;
  // Change location
 imgwhttp.changeLocation(stacja);

 // Set location in LS
  storage.setLocationData(stacja);
 

 

  // Get and display weather
  getImgwHTTP();

  // Close modal
  $('#locModal').modal('hide');
 


});



//imgwhttp.changeLocation('rzeszow');
function getImgwHTTP(){
  imgwhttp.getImgwHTTP()
    .then(results => { 
      ui.paint(results);
    })
    .catch(err => console.log(err));

}   
  






  
  
