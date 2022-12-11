import React from "react";
import RenovationCard from "./RenovationCard";

function RenovationList({ renovations, user, handleUpdateRenovation }) {


  return (
    <ul className="cards">
      {renovations.map((renovation) =>
      <RenovationCard
        key={renovation.id}
        renovation={renovation}
        handleUpdateRenovation={handleUpdateRenovation}
        user={user}
      />
      )}
    </ul>
  )
}

export default RenovationList




