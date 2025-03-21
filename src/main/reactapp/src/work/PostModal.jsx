import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SignatureCanvas from 'react-signature-canvas'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PostModal( { onPost, signImgPath, resetSign, uploadFile } ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        variant="contained" 
        color="info" sx={{ mt: 3 }} 
        onClick={handleOpen}>
            작성
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              서명
            </Typography>
            <Box>
            <SignatureCanvas
              canvasProps={{
                className: 'sigCanvas',
              }}
            />
            </Box>


            <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
              <Button variant="contained" color="info" sx={{ mt: 3 }} onClick={ onPost } >
                      등록
              </Button>
              <Button variant="contained" color="info" sx={{ mt: 3, ml: 3 }} onClick={ handleClose } >
                      취소
              </Button>
            </div>
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
