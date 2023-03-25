import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Question({
  title,
  answer
}) {
  return (
  <Accordion>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
            backgroundColor: "#16181b",
            color: "white"
        }}
    >
        <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails
        sx={{
            backgroundColor: "#16181b",
            color: "white"
        }}>
        <Typography>
          {answer}
        </Typography>
    </AccordionDetails>
  </Accordion>
  )
}

export default Question