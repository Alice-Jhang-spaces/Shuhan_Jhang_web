import React from 'react';
import { companyList } from '../../Utilities/siteData';
import CompanyInfoCard from './CompanyInfoCard'
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CompanyPage = () => {

    const navigate = useNavigate();

        //handles navigating to company details page and passes the company data into state
    const handleCardClick = (company) => {
        navigate(`/company-showcase-details/${company.id}`, { state: { currentCompanyData: company}})
    }

    return(
        <div>
            <h1>Company Page</h1>
            <div>
                {
                    companyList.map(company => <Box onClick={() => handleCardClick(company)}><CompanyInfoCard someCompanyName={company.name}/></Box>)
                }
            </div>
        </div>
    )
}

export default CompanyPage