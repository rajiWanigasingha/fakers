import { faker } from "@faker-js/faker/locale/en";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Wantfakerdata = {
  wantFake: [
    {
      id: string;
      data: {
        name: string;
        method: any;
      };
    }
  ];
};

const nameData = [
  "Bio",
  "First Name -Male",
  "Firts Name -Female",
  "Full Name -Male",
  "Full Name -Female",
  "Job Area",
  "Job Description",
  "Job Title",
  "Job Type",
  "Suffix",
  "Zodiac Sign",
  "Phone Number",
  "Country",
  "City",
  "Gps coordinate",
  "Street Address",
  "Time Zone",
  "Zip Code",
  "Paragraphs",
  "Email",
  "Avatar",
];

const initialState: Wantfakerdata = {
  //@ts-expect-error
  wantFake: [],
};

const wantFakeDataSlice = createSlice({
  name: "Wantfaker",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<object>) => {
      //@ts-expect-error
      state.wantFake.push(action.payload);
    },
    removeData: (state, action: PayloadAction<number>) => {
      state.wantFake.splice(action.payload, 1);
    },
    genarate: (state, action: PayloadAction<{ loop: number; name: any }>) => {
      const names = action.payload.name.length;
      const name = action.payload.name;
      const loop = action.payload.loop;

      for (let i = 0; i < names; i++) {
        if (name[i] == nameData[0]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.bio());
          }
        } else if (name[i] == nameData[1]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.firstName("male"))
          }
        } else if (name[i] == nameData[2]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.firstName("female"))
          }
        } else if (name[i] == nameData[3]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.fullName({sex:"male"}))
          }
        } else if (name[i] == nameData[4]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.fullName({sex:"female"}))
          }
        } else if (name[i] == nameData[5]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.jobArea());
          }
        } else if (name[i] == nameData[6]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.jobDescriptor());
          }
        } else if (name[i] == nameData[7]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.jobTitle());
          }
        } else if (name[i] == nameData[8]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.jobType());
          }
        } else if (name[i] == nameData[9]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.suffix());
          }
        } else if (name[i] == nameData[10]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.person.zodiacSign());
          }
        } else if (name[i] == nameData[11]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.phone.number());
          }
        } else if (name[i] == nameData[12]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.location.city());
          }
        } else if (name[i] == nameData[13]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.location.country());
          }
        } else if (name[i] == nameData[14]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.location.nearbyGPSCoordinate());
          }
        } else if (name[i] == nameData[15]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.location.streetAddress());
          }
        } else if (name[i] == nameData[16]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.location.timeZone());
          }
        } else if (name[i] == nameData[17]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.location.zipCode());
          }
        } else if (name[i] == nameData[18]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.lorem.paragraphs(3));
          }
        } else if (name[i] == nameData[19]) {
          for (let j = 0; j < loop; j++) {
            state.wantFake[i].data.method.push(faker.internet.email());
          }
        }else if (name[i] == nameData[19]) {
            for (let j = 0; j < loop; j++) {
              state.wantFake[i].data.method.push(faker.image.avatar());
            }
          }
      }
      console.log(state.wantFake);
    },
  },
});

export const { addData, removeData, genarate } = wantFakeDataSlice.actions;

export default wantFakeDataSlice.reducer;
