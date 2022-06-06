import styled from 'styled-components';

const deviceMinWidths = {
  tablet: '481px',
  laptop: '769px',
  desktop: '1281px',
};

export const StyledNavbar = styled.nav`
  display: flex;
  background-color: red;
  flex-direction: column;

  @media screen and (min-width: ${deviceMinWidths.tablet}) {
    flex-direction: row;
  }

  & ul {
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
    display: none;
    @media screen and (min-width: ${deviceMinWidths.tablet}) {
      display: flex;
      flex-direction: row;
    }
    &.responsive-navbar {
      display: flex;
    }
  }

  & img[alt='menu'] {
    height: 32px;
    align-self: flex-end;
    @media screen and (min-width: ${deviceMinWidths.tablet}) {
      display: none;
    }
  }
  & li {
    height: 2rem;
    display: flex;
    list-style-type: none;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    @media screen and (min-width: ${deviceMinWidths.tablet}) {
      flex: 1;
    }
  }

  & a {
    flex: 1;
    transition: all 0.2s ease;
    display: flex;
    justify-content: center;
    align-self: stretch;
    align-items: center;
    text-decoration: none;
    &:link {
      color: white;
    }
    &:visited {
      color: white;
    }
    &:hover {
      font-size: 1.3rem;
      background-color: #cc0000;
    }
  }
`;
