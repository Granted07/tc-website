import { FlipWords } from "../components/ui/flip-words";
 
export function FlipWordsDemo() {
  const words = ["envision.", "think.", "conceptualize.", "imagine."];
 
  return (
    <div className="h-[20rem] flex justify-center items-center ">
      <div className="text-5xl font-bold text-neutral-600 dark:text-neutral-400 tracking-wide ">
            <p className=" pb-5">Code as fast as you can</p>
            <FlipWords className="tracking-wide -ml-2 " words={words} />
      </div>
    </div>
  );
}
