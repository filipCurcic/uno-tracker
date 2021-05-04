import React from 'react';
import { Link } from 'react-router-dom';

const Session = (session) => {
  // const date = session.session.createdAt.toDate().toDateString();
  // const date = session.session.createdAt.seconds;
  // if (date === null) {
  //   return (
  //     <div>
  //       <h1>loading</h1>
  //     </div>
  //   );
  // }
  return (
    <Link
      to={{
        pathname: `/session/${session.session.id}`,
        state: session.session,
      }}
    >
      <div className="session">
        {/* <h1>{date}</h1> */}
        <h1>{session.session.title}</h1>
      </div>
    </Link>
  );
};

export default Session;
