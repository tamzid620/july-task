'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { fontReddit } from '@/app/config/fontsProvider';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: `5px` ,
  borderRadius: `10px` ,
  backgroundColor: `#F3F6FF` ,
  gap: `10px`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
    
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={` ${fontReddit.weight} lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto md:px-3 px-2 py-8 `}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontWeight: 'bold' }} component="span">What is NEET 2026 and who conducts it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{ fontWeight: '300' }}>
          NEET 2026 is a national-level entrance exam for admission into MBBS, BDS, AYUSH, and other medical courses. It is conducted by the National Testing Agency (NTA).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span"  sx={{ fontWeight: 'bold' }}>When will NEET 2026 be conducted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{ fontWeight: '300' }}>
            The NEET UG 2026 exam is expected to be held on the first Sunday of May 2026, most likely on May 3, 2026.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span"  sx={{ fontWeight: 'bold' }}>What is the syllabus for NEET 2026?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{ fontWeight: '300' }}>
           The official syllabus for NEET 2026 has not been released yet. Students are advised to follow the NEET 2025 syllabus, which was based on the NEET 2024 pattern and includes Class 11 and 12 NCERT topics.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography component="span"  sx={{ fontWeight: 'bold' }}>How many questions will NEET 2026 have and what is the marking scheme?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{ fontWeight: '300' }}>
           NEET 2026 will consist of 180 compulsory MCQs across Physics, Chemistry, and Biology. Each correct answer carries 4 marks, and 1 mark will be deducted for each incorrect answer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography component="span"  sx={{ fontWeight: 'bold' }}>What is the eligibility criteria for NEET 2026?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{ fontWeight: '300' }}>
          Candidates must be at least 17 years old by December 31, 2026, and should have passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and English. There is no upper age or attempt limit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography component="span"  sx={{ fontWeight: 'bold' }}>In how many languages will NEET 2026 be conducted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{ fontWeight: '300' }}>
          NEET 2026 will be held in 13 languages including English, Hindi, Bengali, Gujarati, Tamil, Telugu, Marathi, Kannada, Malayalam, Odia, Assamese, Urdu, and Punjabi.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
