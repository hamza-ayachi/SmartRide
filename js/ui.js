const rides = document.querySelector('.rides');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add ride form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render ride data
const renderRide = (data, id) => {

  const html = `
    <div class="card-panel ride white row" data-id="${id}">
      <img src="/img/driver.png" alt="ride thumb">
      <div class="ride-details">
        <div class="ride-title">Driver:&nbsp; <font color = "#ff4411">${data.driver}</font><br></div>
        <div class="ride-ingredients" ><br> Pick up location:&nbsp; <font color = "#b48608">${data.pickUp}</font> </div>
        <div class="ride-ingredients">Destination:&nbsp; <font color = "green">${data.destination}</font><br></div>
        <div class="ride-ingredients"><br>Date:&nbsp; <font color ="#d04764">${data.time}</font><br></div>
        <div class="ride-ingredients"><br>Vacant seats: &nbsp;  <font color ="##d54d7b">${data.places}</font></div>
      </div>
      <div class="ride-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;
  rides.innerHTML += html;

};

//remove ride from DOM
const removeRide = (id) => {
  const ride = document.querySelector("[data-id= "+ CSS.escape(id) +"]");
  ride.remove();
};
