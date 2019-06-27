import styled from "styled-components";

export default styled.div`
  position: relative;
  display: block;
  clear: both;
  z-index: 1;

  .navbar {
      padding: 0 10px 5px 15px;
      background-color:rgb(12, 118, 188);
  }
  &.main-navigation.sa {
    height: 98px;
    .navbar {
      background-position: 50% 53%;
      padding-left: 32px;
      padding-right: 32px;
    }
    .search {
      position: absolute;
      top: 0;
      right: 32px;
    }
  }

  .dropdown-toggle::after {
    margin-left: .4em;
    margin-top: .8rem;
  }
  .navbar-toggler {
    margin: 5px;
  }
  .navbar a {
    display: inline-flex;
    padding: 0;
    margin: 28px 40px 20px 0;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    font-weight: 500;
    font-size: 1.8rem;
    color: ${props => props.theme.navBarLink};
    transition: all 0.2s linear;
    border-bottom: 2px solid transparent;
    &.active {
      border-color: ${props => props.theme.secondary};
    }

    &:hover {
      color: ${props => props.theme.navBarLink};
      text-decoration: none;
      border-bottom: 2px solid white;
    }
    &:hover.active,
    &:focus.active {
      background-color: none !important;
      border-bottom: 2px solid white;
      color: ${props => props.theme.navBarLink};
    }
  }

  @media screen and (max-width: 820px) {
    .navbar-nav .nav-link {
      padding-right: 10px;
      padding-left: 10px;
      display: block;
    }
    .search {
      position: relative;
      top: auto;
      right: auto;
    }
  }
`;
