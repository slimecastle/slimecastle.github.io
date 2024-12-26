import React from 'react';
import styled from 'styled-components';
import CreditCardForm from '../components/CreditCardForm'; // Ensure the correct file path and case sensitivity
import { StyledHeader } from '../components/CreditCardFormStyles';


const IndexPage: React.FC = () => (
    <main>
        <StyledHeader>Credit Card Rewards Calculator</StyledHeader>
        <CreditCardForm />
    </main>
);

export default IndexPage;
