import React from 'react'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function ReviewPage() {

    const [value, setValue] = React.useState();

    return (
        <div style={{
            backgroundColor: '#131414',
            height: '100vh',
        }}>

            {/* <ProfileCard /> */}

            <Box 
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
      <Typography component="legend">Add Your Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
            
        </div>
    )
}
