import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AlbumIcon from '@material-ui/icons/Album';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from "@material-ui/core";

import "./Header.css";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <IconButton>
                <AlbumIcon fontSize="large" color="secondary" className="header__icon"/>
            </IconButton>
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
