import React from "react";
import { usePatientStore } from "../store/store";
import { PatientDetail } from "./PatientDetail";

export const PatiensList = () => {
  const patients = usePatientStore((state) => state.patienst);
  console.log("patients", patients);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length > 0 ? (
        <>
          <h2 className="text-3xl text-center font-black">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administa tus
            <span className="text-indigo-500 font-bold">
              {" "}
              Pacientes y citas
            </span>
          </p>
          {patients.map((pat) => (
            <PatientDetail key={pat.id} pat={pat} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes
            <span className="text-indigo-500 font-bold">
              {" "}
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
