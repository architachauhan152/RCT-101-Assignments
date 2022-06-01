import styled from "styled-components";

const CardDiv = styled.div`
  background-color: white;
  padding: 10px;
  margin: 10px;
  width: 500px;
  box-shadow: white 0px 13px 27px -5px, #585656 0px 8px 16px -8px;
  border-radius: 5px;
  height: max-content;
`;
const Top = styled.div`
  display: flex;
  width: 100%;
`;
const ImgDiv = styled.div`
  display: flex;
  flex: 1;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const InfoDiv = styled.div`
  flex: 3;
  padding: 10px;
`;
const H2 = styled.h2`
  color: brown;
  margin: 0;
`;
const Span = styled.span`
  font-size: 12px;
  display: block;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  font-weight: bold;
  margin: 5px 0;
`;
const RatingDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Rating=styled.span`
  background-color: green;
  padding: 3px;
  border-radius: 4px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
`

const Bottom = styled.div`
display: flex;
justify-content: flex-end;
font-weight: normal;
`;
const P=styled.button`
  padding: 8px;
  margin: 0;
  color:green;
  background: #e4f3e4;
  border: none;
  cursor: pointer;
`
const Card = ({data}) => {
  return (
    <CardDiv>
      <Top>
        <ImgDiv>
          <Img
            src={
              data.picture_url
            }
          />
        </ImgDiv>
        <InfoDiv>
          <H2>{data.restaurent_name}</H2>
          <Span color="gray">{data.category}, Pizza, Asian, Desserts</Span>
          <Span color="gray">Cost ${data.cost} for one</Span>
          <Span color="black">Min $50 Up to 30 min</Span>
          <Span color="black">Accepts {data.payment_method} payments only</Span>
        </InfoDiv>
        <RatingDiv>
          <Rating background={"green"}>{data.rating}</Rating>
          <Span>{data.vote} votes</Span>
          <Span>{data.review} reviews</Span>
        </RatingDiv>
      </Top>
      <Bottom>
        <P>Order food Online	&gt; </P>
      </Bottom>
    </CardDiv>
  );
};

export default Card;
