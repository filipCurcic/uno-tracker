import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestoreSingle = (collection, id) => {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .doc(id)
      .onSnapshot((snap) => {
        let document = { ...snap.data(), id: snap.id };

        setDoc(document);
      });

    return () => unsub();
  }, [collection, id]);

  return { doc };
};

export default useFirestoreSingle;
