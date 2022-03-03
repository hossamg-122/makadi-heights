// this function detects user location after his permission

export const getLocalCoords = (direction) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (err) => {
        reject(err);
      }
    );
  });
};
