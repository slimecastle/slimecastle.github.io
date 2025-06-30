import React from 'react';
import styled from 'styled-components';
import CreditCardForm from '../components/CreditCardForm'; // Ensure the correct file path and case sensitivity
import { StyledHeader } from '../components/CreditCardFormStyles';
import Navigation from '../components/Navigation';
import { Helmet } from "react-helmet"


const IndexPage: React.FC = () => (
    <main>
        <Helmet>
            <title>Card IQ</title>
            <meta name="description" content="Credit Card Cashback Rewards Calculator" />
            <meta name="fo-verify" content="85e864e6-c079-496f-8057-1b402e20bc7b" />
        </Helmet>
        <Navigation currentPath="/" />
        <StyledHeader>Credit Card Rewards Calculator</StyledHeader>
        <CreditCardForm />
    </main>
);

export default IndexPage;
