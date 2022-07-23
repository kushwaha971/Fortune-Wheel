import React  from 'react';
import './App.css';
import Wheel from './component/Wheel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button, Dialog } from '@mui/material';

// const offers = ['10%','20%','30%','50%','90%']
// const [discount,setDiscount] = useState(offers);

function App() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
     <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >   <Wheel  open = {open} setOpen={setOpen}/></Dialog>
       <Button variant="outlined" onClick={handleClickOpen}>
        Wheel of Fortune- Low Engagement
      </Button>
  
    </div>
  );
}

export default App;
