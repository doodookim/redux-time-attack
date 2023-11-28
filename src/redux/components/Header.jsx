import React from 'react';
import styled from 'styled-components';

function Header() {
  return <StyledHeader>
    <p>Header</p>
    <p>Header</p>
    </StyledHeader>
}

export default Header;

const StyledHeader = styled.div`
    background: bisque;
    padding: 20px;
    font-size: larger;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
`;