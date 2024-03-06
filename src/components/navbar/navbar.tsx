import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import DataArrayIcon from '@mui/icons-material/DataArray';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <AppBar position="sticky" enableColorOnDark>
                <Toolbar sx={{justifyContent:"space-between"}}>
                    <IconButton color="inherit">
                        <DataArrayIcon></DataArrayIcon>
                        <Link to={'/table'} color='white'>
                        <Typography variant="h6">Data.Faker</Typography>
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar