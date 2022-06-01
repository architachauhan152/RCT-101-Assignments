import FormContainer from "../components/Form.component";
import Card from "../components/Card";
// import Container from "./Container";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
`;
const CardDiv = styled.div`
  /* background-color: teal; */
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Div = styled.div``;

const Button = styled.button``;
let fetchData;
const Home = () => {
  const [restaurent, setRestaurent] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [costoreder,setCostorder]=useState("desc")
  const [rating,setRating]=useState("asc")

  useEffect(() => {
    fetchData();
  }, [page,costoreder]);
  fetchData = async () => {
    setLoading(true);
    try {
      let data = await axios.get("http://localhost:8080/data", {
        params: {
          _page: page,
          _limit: 3,
          _sort:"cost,review",
          _order:costoreder
        },
      });
      setLoading(false);
      setError(false)
      setRestaurent(data.data);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormContainer />
      <Div>
        <Div>
          <Button onClick={()=>setCostorder("asc")}>sort by ascending price</Button>
          <Button  onClick={()=>setCostorder("desc")}>sort by decending price</Button>
        </Div>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button disabled={loading || error} onClick={() => setPage(page + 1)}>Next</Button>
        {loading ? (
          <div>Loading....</div>
        ) : (
          <CardDiv>
            {restaurent?.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </CardDiv>
        )}
        {error && <div>Something went wrong</div>}
      </Div>
    </Container>
  );
};

export { Home, fetchData };
