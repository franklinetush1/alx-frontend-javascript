import ClassRoom from './0-classroom.js';

const initializeRooms = () => {
  const array = [19, 20, 34];
  const classarray = [];
  for (const num of array) {
    classarray.push(new ClassRoom(num));
  }
  return (classarray);
};
export default initializeRooms;
