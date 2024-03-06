import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addData } from "../../features/tableFakerSlice";

function Allfaker() {

  const allFakeData = useSelector((state: RootState) => state.AllFaker);
  const dispatch = useDispatch()

  const clickHadeler = (index:number) => {

    const dataPiece = allFakeData.allFake[index];
    dispatch(addData(dataPiece))
  }



  return (
    <>
      <Box>
        <Paper elevation={3} sx={{ p: 1 }}>
          <Stack sx={{ display: "flex", flexDirection: "row", p: 2 }}>
            <Typography variant="h6" align="center">Chose fake data you want to generate</Typography>
          </Stack>
        </Paper>
        {allFakeData.allFake.map((val: any ,index: number) => (
          <>
            <Divider></Divider>
            <Paper elevation={3} sx={{ p: 1 }} key={index}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "5px",
                  outline: "2px solid white",
                  p: 1,
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h6">{val.data.name}</Typography>
                <IconButton onClick={() => clickHadeler(index)} color="inherit">
                  <AddCircleIcon></AddCircleIcon>
                </IconButton>
              </Stack>
            </Paper>
          </>
        ))}
      </Box>
    </>
  );
}

export default Allfaker;
