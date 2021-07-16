import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

Test.propTypes = {
  color: PropTypes.string,
  func: PropTypes.func,
};

Test.defaultProps = {
  color: '',
  func: null,
}

function Test(props) {
  const { color, func } = props;

  const [data, setData] = useState(color);
  const handleClick = () => {
    console.log("jztroi");
    const rand = Math.trunc(Math.random() * 1000);
    if (func)
      func(`${rand}`);

  }
  console.log("will mounting");


  // useEffect(() => {
  //   console.log("haha");
  //   setData(color);
  // }, [])

  useEffect(() => {
    console.log(color);
    setData(color)
  }, [color])

  // useEffect(() => {
  //   console.log("hehe");
  //   setData(color);
  // })

  return (
    <div>
      {console.log("render")}
      <div>this is data: {data}</div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Test;