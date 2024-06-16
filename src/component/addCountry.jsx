"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; //hook untuk trigger navigasi

export const AddCountry = () => {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [flag, setFlag] = useState("");

  async function handleAddNewCountry() {
    fetch("https://v1.appbackend.io/v1/rows/fDEV7iyXh64i", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ country, capital, flag }]),
    });

    router.refresh();
    setCountry("");
    setCapital("");
    setFlag("");
  }

  return (
    <div>
      <input
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <textarea
        placeholder="Capital"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
      />
      <textarea
        placeholder="Flag"
        value={flag}
        onChange={(e) => setFlag(e.target.value)}
      />
      <button onClick={handleAddNewCountry}>Add New</button>
    </div>
  );
};

export default AddCountry;
