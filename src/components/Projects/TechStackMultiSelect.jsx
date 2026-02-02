import React from "react";
import Image from "next/image";
import Select from "react-select";
import { fullTechList } from "@/utils/techList";
import { useTheme } from "../ThemeProvider";

const techOptions = fullTechList.map((tech) => ({
  value: tech.name,
  label: tech.name,
  logo: `/TechLogos/${tech.name}.png`,
}));

const colours = {
  light: {
    background: "#ffffff",
    text: "#000000",
    border: "#d1d5db",
    hoverBackground: "#f3f4f6",
  },
  dark: {
    background: "#282a36",
    text: "#ffffff",
    border: "#374151",
    hoverBackground: "#161616",
  },
};

export default function TechStackMultiSelect({
  value,
  onChange,
}) {
  const { theme } = useTheme();


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
        input: (base) => ({
          ...base,
          color: 'white',
        }),
        placeholder: (base) => ({
          ...base,
          color: 'white',
        }),
        control: (base, state) => ({
          ...base,
          borderRadius: "6px",
          borderWidth: "2px",
          padding: "0.35rem",
          borderRadius: "10px",
          backgroundColor: "#ca054d",
          borderColor: state.isFocused ? colours[theme].border : "#ca054d",
          boxShadow: state.isFocused ? "0 0 0 1px #ca054d" : "none",
          "&:hover": {
            borderColor: "#ca054d",
          },
          color: "white",
          zIndex: 60,
        }),
        option: (base, state) => ({
          ...base,
          marginTop: "-4px",
          marginBottom: "-4px",
          backgroundColor: state.isFocused ? colours[theme].hoverBackground : colours[theme].background,
          color: colours[theme].text,
          cursor: "pointer",
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#B10041",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "white",
        }),
        multiValueRemove: (base) => ({
          ...base,
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#B10041",
            color: "black",
          },
        }),
      }}
    />
  );
}
