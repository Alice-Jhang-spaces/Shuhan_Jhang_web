import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchImagesFromAPI } from '../../Utilities/api';
import CompanyImageList from './ImageList';
import { Box } from '@mui/material';

const CompanyAboutPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const companyData = location.state.currentCompanyData
    const [images, setImages] = useState([])

    console.log("IMAGES IN STATE", images);



    useEffect( () => {
        const fetchedImages = async() => {
            try{
                 const data = await fetchImagesFromAPI()
                 setImages(data)
            } catch {
                console.log("ERROR GETTING IMAGES FROM UNSPLASH");
            }
        }
        fetchedImages()
        console.log("IMAGES IN STATE", images);
        
    }, [])
    //Return UI with company name
    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', textAlign: 'center' }}>

          {/* Company Name */}
          <h1>{companyData.name}</h1>
    
          {/* Company Description */}
          <p>
            {companyData.description}
          </p>
    
          {/* Additional Information */}
          <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <p><strong>Founded:</strong> 1975</p>
            <p><strong>Headquarters:</strong> Redmond, Washington, USA</p>
            <p><strong>Employees:</strong> Over 220,000</p>
            <p><strong>Revenue:</strong> $198 billion (2022)</p>
            <p>
              <strong>Website:</strong>{' '}
            </p>
          </div>

          <Box sx={{width: '100%'}}>
            <CompanyImageList images={images}/>
          </Box>
    
          {/* Back Button */}
          <a
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#0078D4',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
            onClick={() => navigate(-1)}
          >
            Back to Company List
          </a>
        </div>
      );
}

export default CompanyAboutPage