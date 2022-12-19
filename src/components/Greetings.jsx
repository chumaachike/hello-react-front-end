import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingRedux } from '../redux/Greetings/Greetings';

function Greeting() {
  let renderedItem = '';
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.Greetings);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getGreetingRedux());
    };

    fetchData();
  }, []);
  if (greeting === undefined || greeting.length === 0) {
    renderedItem = (
      <p>
        Loading..
      </p>
    );
  } else {
    renderedItem = greeting;
  }
  return (
    <h1>
      {renderedItem}
    </h1>
  );
}

export default Greeting;
