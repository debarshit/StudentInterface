export const locationRequest = (searchTerm) => {
  return fetch(`https://distributable-soldi.000webhostapp.com/?action=getTeachers`).then((teacher) => {
    return searchTerm;
  });
};

//We'll add cities from google maps api and use lat long with meals to go app as reference. And we calling random fetch url link just so that thennable function works on he teachers.service. Also try to add a message that notifies if the service is not available to a selected city.