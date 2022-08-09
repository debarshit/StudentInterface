export const teachersRequest = () => {
  return fetch(`https://distributable-soldi.000webhostapp.com/?action=getTeachers`).then((teacher) => {
    return teacher.json();
  });
};
