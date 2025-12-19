
export default function Marquee() {
  return (
    <div className="bg-three-colors overflow-hidden w-full flex items-center">
      <div className="marquee-right">
        <div className="flex items-center gap-5 py-1 font-sans [font-size:var(--font-size-20)] [font-weight:var(--font-weight-800)] [color:var(--font-color-white)]">
          <img className="w-[30px]" src="/marquee/om.svg" />
          <p>Trusted by 10,000 devotees</p>
          <img className="w-[30px]" src="/marquee/om.svg" />
        </div>
      </div>
    </div>
  );
}
