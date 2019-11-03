db.collection('rides').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'added'){
        renderRide(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        // remove the document data from the web page
      }
    });
  });