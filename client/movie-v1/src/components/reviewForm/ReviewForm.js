import { Button, InputLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const ReviewForm = ({ handleSubmit, inputText, labelText, setInputText }) => {
  return (
    <Box>
      <Box component='form' className='mb-3' display='flex' flexDirection='column'>
        <InputLabel htmlFor='review-input-text-field' sx={{color: 'white'}}>{labelText}</InputLabel>
        <TextField sx={{backgroundColor: 'white'}} multiline rows={5} value={inputText} onChange={(e) => setInputText(e.target.value)} id='review-input-text-field' />
      </Box>
      <Button sx={{ mt: 1, mb: 2}} onClick={handleSubmit} variant='outlined'>Submit</Button>
    </Box>

  )
}

export default ReviewForm