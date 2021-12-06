import React from 'react'

import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#26CE8D',
    },
    '& .MuiRating-iconNotFilled': {
        color: '#2C2F31',
      },
  });

export default function Rate() {

    // hagis dito yung data ng overall rating :]

    const [value, setvalue] = React.useState();

    return (
        <StyledRating name="read-only"
        value={value}
        defaultValue={2}
        precision={0.5}
        readOnly />
    )
}
