import { create } from "zustand";
import { switchDataProps } from "../data";

// PASSWORD LENGTH
interface LengthState {
  passLength: number;
  setPassLength: (by: number) => void;
}

export const useLengthStore = create<LengthState>()((set) => ({
  passLength: 0,
  setPassLength: (passLength) => set({ passLength }),
}));

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// CHECKBOXES STATE
interface CheckboxStateProps {
  checkboxStates: switchDataProps[];
  setCheckboxStates: (description: switchDataProps) => void;
  deleteCheckboxState: (id: number) => void;
}

export const useCheckboxState = create<CheckboxStateProps>()((set) => ({
  checkboxStates: [],

  // ADD OPTION
  setCheckboxStates: (description) =>
    set((state) => ({
      checkboxStates: [
        ...state.checkboxStates,
        {
          id: description.id,
          name: description.name,
          arrayForShuffle: description.arrayForShuffle,
        },
      ],
    })),

  // DELETE OPTION
  deleteCheckboxState: (id) =>
    set((state) => ({
      checkboxStates: state.checkboxStates.filter((el) => el.id != id),
    })),
}));

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// FINAL PASSWORD
interface finalPassportState {
  finalPassword: string;
  setFinalPassword: (password: string) => void;
}

export const useFinalPassword = create<finalPassportState>()((set) => ({
  finalPassword: "",
  setFinalPassword: (finalPassword) => set({ finalPassword }),
}));
