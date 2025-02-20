import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  padding: 46px 20px 24px ;
  max-width: 310px;
  margin: 0 auto;

  @media only screen and (min-width: 375px) {    
    max-width: 375px;
  }
  
  @media only screen and (min-width: 768px) {
    padding: 26px 32px 32px;
    max-width: 768px;
  }

  @media only screen and (min-width: 1440px) {
   padding: 10px 24px 8px ;
    max-width: 1132px;
  }
`;
export const Text = styled.p`  
  margin-top: 258px;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${p => p.theme.currentTheme.homeText};

  @media only screen and (min-width: 375px) and (max-width: 767px) {
    margin-top: 258px;
    max-width: 335px;    
  }
  @media only screen and (min-width: 768px) {
    margin-top: 368px;
    max-width:486px;
    font-size: 14px;    
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 247px;
    
  }
`;
export const ButtonText= styled.button`
    padding: 0;
    font-size: 12px;
    border :none;
    background-color: inherit;
    color: ${p => p.theme.currentTheme.accent};

    @media only screen and (min-width: 768px) {      
      font-size: 14px;
    }
`;