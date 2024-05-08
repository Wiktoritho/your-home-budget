export const VioletButton = ({ text }: { text: string }) => {
  return (
    <div className="bg-[--violet] w-min py-2 px-7 rounded-3xl hover:bg-white cursor-pointer transition">
      <span className="text-nowrap">{text}</span>
    </div>
  );
};
