import React from "react";
import { toast } from "react-toastify";
import { Patient } from "../types";
import { PatientDetailIteam } from "./PatientDetailIteam";
import { usePatientStore } from "../store/store";

type PatDetailsProp = {
  pat: Patient;
};

export const PatientDetail = ({ pat }: PatDetailsProp) => {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientId = usePatientStore((state) => state.getPatientId);
  const handleClick = () => {
    deletePatient(pat.id);
    toast.error("Paciente eliminado");
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 rounded-xl shadow-md bg-white">
      <PatientDetailIteam label="ID" data={pat.id} />
      <PatientDetailIteam label="NOMBRE" data={pat.name} />
      <PatientDetailIteam label="EMAIL" data={pat.email} />
      <PatientDetailIteam label="FECHA" data={pat.date} />
      <PatientDetailIteam label="SINTOMAS" data={pat.symptoms} />
      <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
        <button
          onClick={() => getPatientId(pat.id)}
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
