import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function Alertmessage(props) {
  
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={props.open}>
        <Alert
        //   action={
        //     <IconButton
        //       aria-label="close"
        //       color="inherit"
        //       size="small"
        //       onClick={() => {
        //         setOpen(false);
        //       }}
        //     >
        //       <CloseIcon fontSize="inherit" />
        //     </IconButton>
        //   }
          sx={{ mb: 2 }}
        >
{props.message}</Alert>
      </Collapse>
      
    </Box>
  );
}