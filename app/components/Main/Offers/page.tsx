import { VioletButton } from "../../ReusableElements/violetButton";

export default function Offers() {
  const offers = [
    {
      name: "Planowanie wydatków",
      title: "Zaplanuj wydatki dla siebie, rodziny lub swoich bliskich",
    },
    {
      name: "Zarządzanie budżetem",
      title: "Zarządzaj swoim budżetem, planując i oszczędzając na własne cele",
    },
    {
      name: "Przewidywanie kosztów",
      title:
        "Skorzystaj z prognozowania dalszych finansów w określonych okresach czasu",
    },
  ];

  return (
    <div className="bg-[--darkGray] flex w-full flex-col px-20  border-white border-b-2">
      <h1 className="text-white font-bold text-[80px] my-10">Nasza oferta</h1>
      {offers.map((offer, index) => (
        <div
          key={index}
          className="py-8 flex items-center justify-between border-t-2 last:mb-10 last:border-b-2"
        >
          <h2 className="text-white font-bold text-2xl w-[25%]">
            {offer.name}
          </h2>
          <div className="w-[45%]">
            <p className="text-white">{offer.title}</p>
          </div>
          <VioletButton text="Sprawdź" />
        </div>
      ))}
    </div>
  );
}
