import React from 'react';
import { IconButton } from '@material-ui/core';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipe-buttons">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipe-buttons__repeat"/>
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipe-buttons__left"/>
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" className="swipe-buttons__star"/>
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipe-buttons__right"/>
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" className="swipe-buttons__lightning"/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons
