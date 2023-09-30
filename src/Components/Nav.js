import React from 'react'
import { AppBar, Toolbar, IconButton, 
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    San Antonio Small Businesses
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/listing">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/addlisting">Add</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Nav