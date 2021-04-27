import React from 'react';

const Session = (session) => {
  // const date = session.session.createdAt.toDate().toDateString();
  // const date = session.session.createdAt.seconds;
  console.log(session);
  // if (date === null) {
  //   return (
  //     <div>
  //       <h1>loading</h1>
  //     </div>
  //   );
  // }
  return (
    <div className="session">
      {/* <h1>{date}</h1> */}
      <h1>{session.session.title}</h1>
    </div>
  );
};

export default Session;
