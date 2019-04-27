import styled from "@emotion/styled";

export const ImageContainer = styled(`div`)`
  position: relative;
  text-align: center;
  color: white;
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Clear Sans;
  }
  .image_style {
    background-size: cover;
    margin: 0.2rem;
    border-radius: 4px;
    backface-visibility: hidden;
    background-position: center;
    width: 120px;
    height: 65px;
  }
`;

export const ProductContainer = styled(`div`)`
 

  @media only screen and (max-width: 599px) {
    margin-top: 2rem;
  margin-bottom: 2rem;
  }
`;

export const ProductCardContainer = styled(`div`)`
.name_margin{
    margin-bottom:0.5rem;
    text-align:center;
  }
    .details_prod{
    margin-left: 0rem;
  }
  
  margin: 0rem;
  @media only screen and (max-width: 599px) {
    .margin_design {
        margin-right: 1rem;
      }
      .margins{
          margin-top:0.5rem;
          margin-bottom:0.5rem;
      }
      .name_margin{
        margin-bottom:0.5rem;
        text-align:left
      }
      .details_prod{
        margin-left: 1rem;
      }
    
      
  }
`;
