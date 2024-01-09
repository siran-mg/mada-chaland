export default function Footer() {
  return (
    <div className="bg-primary text-onPrimary px-56 py-8 grid grid-cols-3">
      <div className="font-bold text-xl flex items-center">Mada Chaland</div>
      <div className="flex flex-col gap-2">
        <div className="cursor-pointer">A propos de nous</div>
        <div className="cursor-pointer">Notre équipe</div>
        <div className="cursor-pointer">Contact</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="cursor-pointer">Circuit Ouest</div>
        <div className="cursor-pointer">Circuit Sud</div>
      </div>
    </div>
  );
}
