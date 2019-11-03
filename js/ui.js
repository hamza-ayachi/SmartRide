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
      <img src="/img/dish.png" alt="ride thumb">
      <div class="ride-details">
        <div class="ride-title">Driver: ${data.driver}</div>
        <div class="ride-ingredients">Pick up location: ${data.pickUp}</div>
        <div class="ride-ingredients">Pick up time: ${data.time}</div>
      </div>
      <div class="ride-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;
  rides.innerHTML += html;

};