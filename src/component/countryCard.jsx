"use client";
import { useRouter } from "next/navigation";

export const CountryCard = ({ item }) => {
  const router = useRouter();

  async function handleDeleteCountry() {
    const url = "https://v1.appbackend.io/v1/rows/fDEV7iyXh64i";

    fetch("https://v1.appbackend.io/v1/rows/fDEV7iyXh64i", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    router.refresh();
  }

  return (
    <div>
      {" "}
      <div>
        <h3 className="text-lg font-bold">{item.country}</h3>
        <p className="text-sm">{item.capital}</p>
        <p className="text-4xl">{item.flag}</p>
        <button onClick={handleDeleteCountry}>Delete</button>
      </div>
    </div>
  );
};
