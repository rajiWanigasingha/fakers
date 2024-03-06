import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { genarate, removeData } from "../../features/tableFakerSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

function Wantfakers() {
  const data = useSelector((state: RootState) => state.Wantfaker);
  const wantdata = data.wantFake;
  const dispatch = useDispatch();
  const names: string[] = [];
  const [input, setInput] = useState("");

  return (
    <>
      <Box>
        <Paper
          elevation={3}
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "10px",
            marginBottom: "25px",
          }}
        >
          <TextField
            label="How much data rows you need"
            fullWidth
            onChange={(e) => setInput(e.target.value)}
          ></TextField>
          <Link to={"/table"}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                wantdata.map((val) => names.push(val.data.name));
                dispatch(genarate({ loop: Number(input), name: names }));
              }}
            >
              Genarate
            </Button>
          </Link>
        </Paper>
        {wantdata.map((val: any, index: number) => (
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
                <IconButton
                  color="inherit"
                  onClick={() => dispatch(removeData(index))}
                >
                  <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
                </IconButton>
              </Stack>
            </Paper>
          </>
        ))}
      </Box>
    </>
  );
}

export default Wantfakers;
