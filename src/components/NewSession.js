import React from 'react';
import { ReactComponent as AddIcon } from '../assets/add.svg';

const NewSession = ({ click }) => {
  return (
    <div className="button-container" onClick={click}>
      <AddIcon />
    </div>
  );
};

export default NewSession;
