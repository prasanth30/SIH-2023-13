import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Navbar_ from './Navbar';
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  padding: theme.spacing(3),
}));

function MedicalReport({ name, gender, age, phone }) {
  const [medicalResults, setMedicalResults] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: name,
    gender: gender,
    age: age,
    phone: phone,
  });

  useEffect(() => {
    // Function to simulate processing the image and generating medical results
    const processImage = async () => {
      // In a real application, you would send the details to a backend server
      // for AI processing. For this example, we'll just simulate it.
      setMedicalResults('simulatedDiseaseName');
    };

    // Call the processImage function when the component mounts
    processImage();
  }, [userDetails]); // Trigger image processing when userDetails change

  return (
    <div>  
      <Navbar_/>
      <div className='container body-margin'>
        <StyledContainer maxWidth="md" >
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Medical Report
        </Typography>
        <div>
          <Typography variant="h6">User Details:</Typography>
          <Typography>Name: {userDetails.name}</Typography>
          <Typography>Gender: {userDetails.gender}</Typography>
          <Typography>Age: {userDetails.age}</Typography>
          <Typography>Phone: {userDetails.phone}</Typography>
        </div>
        {medicalResults && (
          <div>
            <Typography variant="h6">Disease Name:</Typography>
            <Typography>{medicalResults}</Typography>
          </div>
        )}
      </Paper>
    </StyledContainer>
    </div>
    </div>
  );
}

export default MedicalReport;
