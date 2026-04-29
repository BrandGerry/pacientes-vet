import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientsState = {
  patienst: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientId: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientsState>()(
  devtools(
    persist(
      (set, get) => ({
        patienst: [],
        activeId: "",
        addPatient: (data) => {
          console.log("data", data);
          const newPatient = createPatient(data);
          set((state) => ({
            patienst: [...state.patienst, newPatient],
          }));
        },
        deletePatient: (id) => {
          set((state) => ({
            patienst: state.patienst.filter((pat) => pat.id !== id),
          }));
        },
        getPatientId: (id) => {
          set((state) => ({
            activeId: id,
          }));
        },
        updatePatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patienst: state.patienst.map((pat) =>
              pat.id === state.activeId ? { id: state.activeId, ...data } : pat
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "patient-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
