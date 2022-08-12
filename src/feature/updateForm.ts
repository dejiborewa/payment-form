import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FormType {
  value: {
    personalInfo: {
      name: string;
      email: string;
      address1: string;
      address2: string;
      localGovt: string;
    };
    cardInfo: {
      cardName: string;
      cardDetails: string;
      expiryDate: string;
      cvv: string;
    };
  };
}

const initialState: FormType = {
  value: {
    personalInfo: {
      name: "",
      email: "",
      address1: "",
      address2: "",
      localGovt: "",
    },
    cardInfo: {
      cardName: "",
      cardDetails: "",
      expiryDate: "",
      cvv: "",
    },
  },
};

export const updateFormSlice = createSlice({
  name: "updateForm",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<any>) => {
      state.value.personalInfo = action.payload;
    },

    updateCardInfo: (state, action: PayloadAction<any>) => {
      state.value.cardInfo = action.payload;
    },

    resetForm: (state) => {
      state.value = {
        personalInfo: {
          name: "",
          email: "",
          address1: "",
          address2: "",
          localGovt: "",
        },
        cardInfo: {
          cardName: "",
          cardDetails: "",
          expiryDate: "",
          cvv: "",
        },
      };
    },
  },
});

export const { updatePersonalInfo, updateCardInfo, resetForm } = updateFormSlice.actions;

export default updateFormSlice.reducer;
