import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestoreQuery = (
  collection,
  primaryField,
  operator,
  secondaryField
) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .where(`${primaryField}`, `${operator}`, `${secondaryField}`)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        console.log('USE FIRESTORE QUERY', documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestoreQuery;
