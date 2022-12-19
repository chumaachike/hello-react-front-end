import { getGreeting } from '../../api';
/* eslint-disable default-param-last */

const GET = 'greetings/greetings/GET_GREETINGS';

export const getGreetingRedux = () => async (dispatch) => {
  const data = await getGreeting();
  dispatch({ type: GET, payload: data.data.message });
};

const Greetings = (state = '', action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
};

export default Greetings;
