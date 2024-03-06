import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  Stack,
  Button,
} from "@mui/material";
import DatasetIcon from "@mui/icons-material/Dataset";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { mkConfig, generateCsv, download } from "export-to-csv";

function Tables() {
  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  const tabledata = useSelector((state: RootState) => state.Wantfaker.wantFake);

  const tableRowData: any[] = [];
  const title: any[] = [];
  const cvsFile: any[] = [];

  function pushToArray(data: any) {
    tableRowData.push(data);
  }

  function pushToTitle(data: any) {
    title.push(data);
  }

  tabledata.map((val) => pushToArray(val.data.method));

  tabledata.map((val) => pushToTitle(val.data.name));

  const newTableData = tableRowData[0].map((_: any, index: number) =>
    tableRowData.map((val) => val[index])
  );

  function createObj(value: any[]) {
    let objects = {};
    for (let i = 0; i < title.length; i++) {
      //@ts-ignore
      objects[title[i]] = value[i];
    }
    return objects;
  }

  for (let i = 0; i < newTableData.length; i++) {
    const data = newTableData[i];
    const dataNew = createObj(data);
    cvsFile.push(dataNew);
  }

  const csv = generateCsv(csvConfig)(cvsFile);

  return (
    <>
      <Stack
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <a href="/">
        <Button variant="contained" color="primary" size="large">
          Creat a new csv
        </Button>
        </a>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<DatasetIcon />}
          sx={{ width: "fit-content" }}
          onClick={() => download(csvConfig)(csv)}
        >
          Make this data table into csv
        </Button>
      </Stack>
      <TableContainer>
        <Table aria-label="simple table" id="table">
          <TableHead>
            <TableRow>
              {tabledata.map((val: any) => (
                <TableCell>{val.data.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {newTableData.map((val: any, index: number) => (
              <TableRow key={index}>
                {val.map((value: any, index: number) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tables;
