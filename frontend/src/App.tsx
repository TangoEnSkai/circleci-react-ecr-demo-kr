import { useState} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function App() {
  const [showText, setShowText] = useState(false)
  return (
    <div className="App">
      <Grid 
        container
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <header className="App-header">
          <Button
            data-testid="Button"
            variant="contained"
            onClick={ () => { setShowText(true)} }
          >
            <Typography variant="h3">CLICK ME!</Typography>
          </Button>
            { showText ? <p data-testid="Text" className="text-4xl pt-10 text-center">Hello!</p> : null }
        </header>
      </Grid>
    </div>
  );
}

export default App;
