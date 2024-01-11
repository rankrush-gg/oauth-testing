"use client";
import { useState } from "react";

type Props = {
  title: string;
  templateUrl: string;
};

function ApiCard({ title, templateUrl }: Props) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const url = templateUrl.replace("{{input_data}}", value);

  return (
    <div className="api-card">
      <input
        type="text"
        placeholder={`Enter input_data`}
        value={value}
        onChange={handleChange}
        className="api-card-input"
      />
      <p>URL: {url}</p>
      {/* Render additional API Card content here */}
    </div>
  );
}

export default ApiCard;
