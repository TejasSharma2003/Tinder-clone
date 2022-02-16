import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import "../styles/swipBtn.css";
import IconButton from "@mui/material/IconButton";
function swipBtn() {
  return (
    <div className="buttons_swipe">
      <IconButton className="icon-shadow">
      <ReplayIcon fontSize="large" className="replay" />
      </IconButton>
      

      <IconButton className="icon-shadow">
        <CloseIcon className="not-intersted" fontSize="large"/>
      </IconButton>

      <IconButton className="icon-shadow">
        <StarIcon className="favorite" fontSize="large" />
      </IconButton>

      <IconButton className="icon-shadow">
        <FavoriteIcon  className="intersted" fontSize="large"/>
      </IconButton >
      <IconButton className="icon-shadow">
        <FlashOnIcon className="flash" fontSize="large"/>
      </IconButton>
    </div>
  );
}

export default swipBtn;
