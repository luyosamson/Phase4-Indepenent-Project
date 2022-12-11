import React from "react";

function Home({ user }) {
  return (
    <div className="home">
      Welcome Home {user.first_name} {user.last_name}!
    </div>
  );
};

export default Home