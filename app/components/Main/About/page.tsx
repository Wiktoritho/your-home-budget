import { VioletButton } from "../../ReusableElements/violetButton";
import { space } from "@/app/ui/fonts";

export default function About() {
  return (
    <div className="flex w-full flex-col bg-[--black] px-20">
      <div className="flex gap-[50px] border-white border-b-2">
        <div className="flex flex-col justify-end w-[calc((100%-50px)/2)] gap-10 pb-20">
          <h1 className="text-white font-bold text-[80px] mt-10">
            O aplikacji
          </h1>
          <h2 className="text-white font-medium text-2xl">
            Innowacyjne zarządzanie budżetem
          </h2>
          <p className={`${space.className} text-white w-4/5`}>
            Nasza strona to przydatna aplikacja, która umożliwi Ci w praktyczny
            sposób zarządzać swoimi finansami. Chcesz zobaczyć na czym możesz
            oszczędzić zbierając pieniadze na swój cel? Chcesz zaplanować
            wydatki dla swojego gospodarstwa domowego?
          </p>
          <VioletButton text="Dowiedz się więcej" />
        </div>
        <div className="flex w-[calc((100%-50px)/2)] justify-center items-center">
          <img className="w-2/4" src="/images/wallet1.png" />
          <img className="w-2/4" src="/images/wallet2.png" />
        </div>
      </div>
    </div>
  );
}
