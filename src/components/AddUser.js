import React from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

const AddUser = () => {
  const handleSubmit = async (event) => {
    const collectionRef = projectFirestore.collection('users');
    event.preventDefault();
    const { name } = event.target.elements;
    console.log(event.target.elements.name.value);
    try {
      await collectionRef.add({
        value: name.value,
        label: name.value,
        createdAt: timestamp(),
      });
      console.log('ADD USER');
      event.target.reset();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="session-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default AddUser;
