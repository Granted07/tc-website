import { FlipWords } from "@/components/ui/flip-words";
 
export function StartingText() {
  const words = ["envision.", "think.", "conceptualize.", "imagine."];
 
  return (
    <div className="pt-[2rem] flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-neutral-300 tracking-wide ">
      <div className="">
            <p className=" pb-5">Code as fast as you can</p>
            <FlipWords className="tracking-wide -ml-2 " words={words} />
      </div>
    </div>
  );
}
