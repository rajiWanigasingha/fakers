import { createSlice, nanoid } from "@reduxjs/toolkit";

type Allfakerdata = {
  allFake: [
    {
      id: string;
      data: {
        name: string;
        method: any;
      };
    }
  ];
};

const initialState: Allfakerdata = {
  //@ts-expect-error
  allFake: [
    {
      id: nanoid(),
      data: { name: "Bio", method: [] },
    },
    {
      id: nanoid(),
      data: {
        name: "First Name -Male",
        method: [],
      },
    },
    {
      id: nanoid(),
      data: {
        name: "Firts Name -Female",
        method: [],
      },
    },
    {
      id: nanoid(),
      data: {
        name: "Full Name -Male",
        method:[],
      },
    },
    {
      id: nanoid(),
      data: {
        name: "Full Name -Female",
        method: [],
      },
    },
    {
      id: nanoid(),
      data: { name: "Job Area", method: []},
    },
    {
      id: nanoid(),
      data: { name: "Job Description", method: []},
    },
    {
      id: nanoid(),
      data: { name: "Job Title", method: []},
    },
    {
      id: nanoid(),
      data: { name: "Job Type", method: []},
    },
    { id: nanoid(), data: { name: "Suffix", method: []} },
    {
      id: nanoid(),
      data: { name: "Zodiac Sign", method: [] },
    },
    {
      id: nanoid(),
      data: { name: "Phone Number", method: [] },
    },
    { id: nanoid(), data: { name: "City", method: []} },
    {
      id: nanoid(),
      data: { name: "Country", method: [] },
    },
    {
      id: nanoid(),
      data: {
        name: "Gps coordinate",
        method: [],
      },
    },
    {
      id: nanoid(),
      data: { name: "Street Address", method: [] },
    },
    {
      id: nanoid(),
      data: { name: "Time Zone", method: [] },
    },
    {
      id: nanoid(),
      data: { name: "Zip Code", method: []},
    },
    {
      id: nanoid(),
      data: { name: "Paragraphs", method: []},
    },
    { id: nanoid(), data: { name: "Email", method: [] } },
    { id: nanoid(), data: { name: "Avatar", method: [] } },
  ],
};

const allFakeDataSlice = createSlice({
  name: "Allfaker",
  initialState,
  reducers: {},
});

export default allFakeDataSlice.reducer;
