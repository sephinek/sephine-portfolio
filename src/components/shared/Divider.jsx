export default function Divider({ icon }) {
  return (
    <section className="flex items-center justify-between max-w-6xl mx-auto my-8">
      <div className="border-b-[1px] border-lightgrey w-[46%]"></div>
      <span className="text-2xl">{icon}</span>
      <div className="border-b-[1px] border-lightgrey w-[46%]"></div>
    </section>
  );
}
