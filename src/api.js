import axios from 'axios';

const url = 'http://localhost:5000/';

export const getGreeting = async () => {
  const result = await axios('http://localhost:5000/');
  return result;
};

export default url;
