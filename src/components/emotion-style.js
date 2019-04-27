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
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const AppBarContainer = styled(`span`)`
 

  @media only screen and (max-width: 599px) {
   padding:2rem;
   
  }
`;

export const ProductCardContainer = styled(`div`)`
.name_margin{
    margin-bottom:0.5rem;
    text-align:center;
    color: #000000;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.4px;
    overflow: hidden;
  }
    .details_prod{
    margin-left: 0rem;
  }
  .margins{
   
    margin-bottom:0.5rem;
}
.margin_design {
    margin-right: 1rem;
  }
  .MRP{
      text-decoration:line-through;
      font-size:0.8rem;
      font-weight:500;
      letter-spacing: 0.4px;
      color: #757575;
     
  }
  .finalPrice{
      font-weight:500;
      letter-spacing: 0.4px;
  }
  margin: 0rem;
  @media only screen and (max-width: 599px) {
   
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
      .image{
          padding:1.1rem
      }
    
      
  }
`;
