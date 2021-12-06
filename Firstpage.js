import React from 'react';
import Nav from "../components/Nav";
import Cards from '../pages/Cards';
import Box from '@mui/material/Box';

import '../CSS/design.css'
import { Typography } from '@mui/material';

//import GridList from './GridList'

export default function Header() {

    return (
        <div>
            <Nav />
        
        <Box sx={{ mt: 5, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Box>
                <Typography variant="h5" sx={{ mb: 2, color: "#D1D4C9" }}> Top Students </Typography>
            </Box>

{/* top students cards */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center", p: 2, m: 2 }}>

                    {/* logic na here, marsie */}
                <Cards />
                <Cards />
                <Cards />
                <Cards />

            </Box>

{/* sorting and filter */}
            <Box>

            </Box>

{/* list of students grid */}
       
        </Box>
        </div>
    )
}
