import React from "react";
type PatientDetailIteamProps = {
  label: string;
  data: string;
};
export const PatientDetailIteam = ({
  label,
  data,
}: PatientDetailIteamProps) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: <span className="font-normal normal-case">{data}</span>
    </p>
  );
};
