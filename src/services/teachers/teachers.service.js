export const teachersRequest = () => {
  return fetch(`urlhttps://distributable-soldi.000webhostapp.com/?action=getTeachers`).then((teacher) => {
    return teacher.json();
  });
};
