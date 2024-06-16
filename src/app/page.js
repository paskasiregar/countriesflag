import Image from "next/image";
import { AddCountry } from "@/component/addCountry";
import { CountryCard } from "@/component/countryCard";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fDEV7iyXh64i", {
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <main className="max-w-2xl m-auto py-2 space-y-4">
      <h1 className="text-4xl font-bold ">All the countries</h1>
      <div className="space-y-4 grid grid-cols-2">
        {data.map((item) => {
          return <CountryCard key={item._id} item={item} />;
        })}
      </div>
      <AddCountry />
    </main>
  );
}
