export const teachersRequest = () => {
  return fetch(`url`).then((teacher) => {
    return teacher.json();
  });
};
