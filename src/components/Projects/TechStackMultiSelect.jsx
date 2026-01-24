import React from "react";
import Image from "next/image";
import Select from "react-select";
import { fullTechList } from "@/utils/techList";

const techOptions = fullTechList.map((tech) => ({
  value: tech.name,
  label: tech.name,
  logo: `/TechLogos/${tech.name}.png`,
}));

export default function TechStackMultiSelect({
  value,
  onChange,
}) {
  return (
    <Select
      isMulti
      options={techOptions}
      value={value}
      onChange={onChange}
      placeholder="Filter by tech stack"
      closeMenuOnSelect={false}
      classNamePrefix="select"
      getOptionLabel={(option) => (
        <div className="flex items-center gap-2 z-60">
          <Image
            src={option.logo}
            alt={option.label}
            width={20}
            height={20}
            className="object-contain"
          />
          <span>{option.label}</span>
        </div>
      )}
      styles={{
        control: (base, state) => ({
          ...base,
          borderRadius: "6px",
          borderWidth: "2px",
          padding: "0.25rem",
          borderColor: state.isFocused ? "black" : "#d1d5db",
          boxShadow: state.isFocused ? "0 0 0 1px black" : "none",
          "&:hover": {
            borderColor: "black",
          },
          zIndex: 60,
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "#f3f4f6" : "white",
          color: "black",
          cursor: "pointer",
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#f3f4f6",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "#111827",
        }),
        multiValueRemove: (base) => ({
          ...base,
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#e5e7eb",
            color: "black",
          },
        }),
      }}
    />
  );
}
