import { FlipWords } from "@/components/ui/flip-words";
 
export function StartingText() {
  const words = ["envision.", "think.", "conceptualize.", "imagine."];
 
  return (
    <div className="pt-[2rem] overflow-hidden flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-neutral-300  ">
      <div className="overflow-hidden relative pb-32 -z-30">
            <p className="tracking-wide pb-5 -z-30">Code as fast as you can</p>
            <FlipWords className="tracking-wide absolute overflow-hidden -z-30 -ml-2" words={words} />
      </div>
    </div>
  );
}
