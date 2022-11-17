import './App.css';
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Paper,
} from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        <Card
          variant="elevation"
          elevation={10}
          sx={{
            margin: '3rem auto',
            background: 'gray',
            maxWidth: '25rem',
            paddingTop: '1rem',
          }}
        >
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Task List
          </Typography>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={8}>
                  <Typography color="text.secondary" gutterBottom>
                    Task 1
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={8}>
                  <Typography color="text.secondary" gutterBottom>
                    Task 2
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={8}>
                  <Typography color="text.secondary" gutterBottom>
                    Task 3
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={8}>
                  <Typography color="text.secondary" gutterBottom>
                    Task 4
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
