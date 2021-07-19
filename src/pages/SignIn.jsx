import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

SignIn.propTypes = {

};

function SignIn({ onCheck }) {
  return (
    <div>
      <Form onCheck={onCheck} />
    </div>
  );
}

export default SignIn;