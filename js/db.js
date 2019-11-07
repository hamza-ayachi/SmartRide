// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

// real-time listener
db.collection('rides').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'added'){
        renderRide(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        removeRide(change.doc.id);
      }
    });
  });

  // add new ride
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  const ride = {
    driver: form.driver.value,
    pickUp: form.pickUp.value,
    destination: form.destination.value,
    time: form.date.value.replace("T", "  Time: "),
    places: form.places.value
  };

  db.collection('rides').add(ride)
    .catch(err => console.log(err));

  form.driver.value = '';
  form.pickUp.value = '';
  form.destination.value = '';
  form.date.value = '';
  form.places.value = '';
});

//delete a ride
const rideContainer1 = document.querySelector('.rides');
rideContainer1.addEventListener('click', evt => {
  console.log(evt);
  if(evt.target.id === "delete"){
    const id = evt.target.getAttribute('data-id');
    db.collection('rides').doc(id).delete();
  }
});

//join a ride
const rideContainer2 = document.querySelector('.rides');
rideContainer2.addEventListener('click', evt => {
  console.log(evt);
  if(evt.target.id === "join"){
    const id = evt.target.getAttribute('data-id');
    db.collection('rides').doc(id).update({
      places: decrease
    });
    removeRide(id);
    var docRef = db.collection('rides').doc(id);
    docRef.get().then(function(doc) {
      renderRide(doc.data(), id);
    });
  }
});