import styled from "styled-components";

const Wrapper = styled.div`
  .pane-content {
    display: flex;
    align-items: flex-start;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    max-width: 1040px;
    margin: 0 auto;
    h2,
    h3 {
      margin-top: 0;
    }
    padding-top: 50px;
  }

  h2 {
    text-align: center;
    padding-top: 50px;
    margin: 0;
  }

  &.StatBlock {
    background: linear-gradient(to right, #0c2499 31%,#007ad0 100%);
    color: #ffffff;
    position: relative;
    .pane-content {
      padding-top: 0;
    }
    .stat-block {
      margin-top: 50px;
      margin-bottom: 50px;
      h2 {
        font-size: 64px;
        display: inline-block;
        color: white;
        font-weight: 300;
        margin: 0 0 0 15px;
        padding: 0;
      }
      i {
        color: ${props => props.theme.secondaryDark};
        font-size: 48px;
        display: inline-block;
      }
      p {
        text-align: center;
        margin: 0;
      }
    }
  }
  &.StepsBlock {
    background-color: #ffffff;
    border-top: 1px solid ${props => props.theme.grayLight};
    .steps-block {
      position: relative;
      padding: 0 20px;
      margin-bottom: 50px;
      text-align: center;
      max-width: 33%;
      h3 {
        margin-top: 65px;
        text-align: center;
      }
    }
    .steps-step {
      position: absolute;
      width: 50px;
      height: 50px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 100%;
      border: 2px solid ${props => props.theme.borderColor};
      line-height: 50px;
      font-size: 2.4rem;
      color: ${props => props.theme.primaryDark};
      text-align: center;
      font-family: 'Geometria W01 Bold','WorkSansBold',Arial,sans-serif; 
    }
  }

  @media screen and (max-width: 768px) {
    .pane-content {
      flex-wrap: wrap;
      .steps-block {
        max-width: 100%;
      }
    }
  }
`;

export default Wrapper;
