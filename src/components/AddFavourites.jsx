import React, { useState } from "react";

const AddFavourites = () => {
  const [showFavourite, setShowFavourite] = useState(false);

  return (
    <>
      <span>Add to Favourites</span>

      <i
        className={`fa-${showFavourite ? "solid" : "regular"} fa-heart`}
        style={{ cursor: "pointer", color: showFavourite ? "red" : "gray" }}
        onClick={() => setShowFavourite(!showFavourite)}
      ></i>
    </>
  );
};

export default AddFavourites;

