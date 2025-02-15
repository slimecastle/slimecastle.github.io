import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    border: none;
    outline: none;
    box-shadow: none; 
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;


export const InfoButton = styled.button`
    background-color: #007bff;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s, transform 0.2s;
    &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
`;

export const InfoBox = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px; /* Add margin to prevent overlap */
    margin-top: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #333;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    
    &:hover {
        background-color: #0056b3;
    }
`;

export const RecommendationsStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledCardContainer = styled(CardContainer)`
    padding-top: 30px;
    flex: 1 1 calc(33.333% - 20px);
    min-height: 500px; /* Further increase the height to ensure everything fits */
    max-width: calc(33.333% - 20px);
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        flex: 1 1 100%;
        max-width: 100%;
    }
`;

export const CardImage = styled.img`
    width: 300px;
    height: 200px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

export const CardInfo = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`;

export const CardBottomRight = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-align: right;
    font-size: 14px;
    color: #555;
`;

export const CardTitle = styled.h2`
    margin: 0;
    font-size: 20px;
    color: #007bff;
    height: 50px;
    text-align: center;
    @media (max-width: 768px) {
        min-height: 50px;
        height: auto;
    }
`;

export const CardText = styled.p`
    margin: 0;
    font-size: 16px;
    color: #555;
`;

export const Highlight = styled.span`
    font-weight: bold;
    color: #28a745;
`;

export const CardLink = styled.a`
    display: inline-block; 
    padding: 10px 20px; 
    margin-top: 10px; 
    color: #fff; 
    background-color: #007bff; 
    border: none; 
    border-radius: 5px; 
    text-decoration: none; 
    font-size: 16px; 
    text-align: center; 
    cursor: pointer; transition: background-color 0.3s;

    &:hover {
        text-decoration: underline;
    }
`;

export const BackButton = styled(Button)`
    position: relative;
    margin-top: 50px;
    left: 50%; 
    transform: translateX(-50%);
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
`;

export const StyledHeader = styled.h1`
    margin: 10px 0;
    font-size: 36px;  // Even larger font size
    font-weight: bold;  // Bold font
    color: #2c3e50;  // Darker blue color for a financial vibe
    text-align: center;  // Center align the title
    position: relative;
    z-index: 1;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 28px; // Reduce font size for smaller screens
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Extend the existing styled components to include the fade-in effect
export const FadeInContainer = styled.div<{ fadeIn: boolean }>`
  animation: ${props => (props.fadeIn ? fadeIn : 'none')} 0.5s ease-in;
`;

export const TopMessage = styled.div`
    margin-bottom: 20px;
    font-size: 1.1em;
    font-weight: normal; /* Less bold */
    color: #333; /* Adjust text color as needed */
    padding: 10px; /* Add padding for better spacing */
    border-radius: 5px; /* Optional: Add rounded corners */
    text-align: center; /* Center align text */
    max-width: 600px; /* Set maximum width */
    margin: 0 auto;
`;

export const MethodologyButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
`;

export const MethodologyContainer = styled.div`
    position: fixed;
    bottom: 80px;
    right: 20px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    max-width: 300px;
    z-index: 10;
`;

export const MethodologyTextBox = styled.div`
    font-size: 14px;
    line-height: 1.5;
    color: #333;
`;
