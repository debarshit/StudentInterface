export const teachersRequest = (location="Kanpur") => {
  return fetch(`https://distributable-soldi.000webhostapp.com/?action=getTeachers`).then((teacher) => {
    return teacher.json();
  });
};

//add get request based on location input by user
