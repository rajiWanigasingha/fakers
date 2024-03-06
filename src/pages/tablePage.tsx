import { Container } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import Tables from "../components/table/table";

function TablePage() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Tables></Tables>
      </Container>
    </>
  );
}

export default TablePage;
