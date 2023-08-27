import React from "react";
function Users({ isLoading, items }) {
  if (isLoading) {
    return <div id="loading">Loading....</div>;
  }
  return (
    <div>
      {items.map((name, index) => (
        <div key={index} className="user">
          {name}
        </div>
      ))}
    </div>
  );
}
export default Users;
