import React from 'react';
import styled from 'styled-components';
import CreditCardForm from '../components/CreditCardForm'; // Ensure the correct file path and case sensitivity
import { StyledHeader } from '../components/CreditCardFormStyles';
import { Helmet } from "react-helmet"


const IndexPage: React.FC = () => (
    <main>
        <Helmet>
            <title>Card IQ</title>
            <meta name="description" content="Credit Card Cashback Rewards Calculator" />
        </Helmet>
        <StyledHeader>Credit Card Rewards Calculator</StyledHeader>
        <CreditCardForm />
    </main>
);

export default IndexPage;
