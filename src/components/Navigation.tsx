import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background: white;
    padding: 15px 0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 20px;
`;

const NavContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.a`
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    
    &:hover {
        color: #007bff;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 30px;
    
    @media (max-width: 768px) {
        gap: 20px;
    }
`;

const NavLink = styled.a`
    color: #555;
    text-decoration: none;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 5px;
    transition: all 0.3s ease;
    
    &:hover {
        color: #007bff;
        background-color: #f8f9fa;
    }
    
    &.active {
        color: #007bff;
        background-color: #e3f2fd;
    }
`;

interface NavigationProps {
    currentPath?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath = '/' }) => {
    return (
        <Nav>
            <NavContainer>
                <Logo href="/">Card IQ</Logo>
                <NavLinks>
                    <NavLink 
                        href="/" 
                        className={currentPath === '/' ? 'active' : ''}
                    >
                        Calculator
                    </NavLink>
                    <NavLink 
                        href="/blog/" 
                        className={currentPath.startsWith('/blog') ? 'active' : ''}
                    >
                        Blog
                    </NavLink>
                </NavLinks>
            </NavContainer>
        </Nav>
    );
};

export default Navigation;