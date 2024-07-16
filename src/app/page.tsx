import { Imajesr } from "@/components/imajes_right";
import { Imajesl } from "@/components/imajes_left";
import "./globals.css";
import { StartingText } from "@/components/starting-text";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export default function Home() {
  return (
      <main>
        <StartingText></StartingText>
          <div className="flex flex-row justify-center py-[1rem] sm:px-6 lg:px-8">
              <div className="flex-col gap-5 hidden sm:flex sm:-translate-y-10 lg:-translate-y-0 w-min py-4 sm:px-3 md:px-4 lg:px-5 scale-20 sm:scale-50 md:scale-75 lg:scale-100 justify-start">
                  {/*<div className="bg-cover" style={{*/}
                  {/*    backgroundImage: `url(${yt.src})`,*/}
                  {/*    width: "32px",*/}
                  {/*    height: '32px',*/}
                  {/*}}></div>*/}
                  <div className="mx-auto">
                      <LinkPreview url="https://www.youtube.com/@techclubdpsrpk"
                                   className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
                          <div className="hidden dark:inline-block">
                              <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_7_56)">
                                      <path
                                          d="M12.4882 3.10071H12.6263C13.9013 3.10536 20.3618 3.1519 22.1037 3.62034C22.6303 3.7633 23.1101 4.04197 23.4953 4.42849C23.8805 4.81501 24.1574 5.29585 24.2986 5.82295C24.4552 6.41238 24.5653 7.19261 24.6398 7.99765L24.6553 8.15896L24.6894 8.56226L24.7018 8.72358C24.8027 10.1413 24.8151 11.4691 24.8166 11.7592V11.8755C24.8151 12.1764 24.8011 13.5941 24.6894 15.0708L24.677 15.2337L24.6631 15.395C24.5855 16.2823 24.4707 17.1633 24.2986 17.8117C24.1579 18.339 23.881 18.8201 23.4958 19.2066C23.1106 19.5932 22.6305 19.8718 22.1037 20.0143C20.3044 20.4983 13.4654 20.5324 12.5177 20.5339H12.2974C11.8181 20.5339 9.83576 20.5246 7.75723 20.4533L7.49354 20.444L7.35859 20.4378L7.09335 20.4269L6.8281 20.416C5.10634 20.34 3.46679 20.2175 2.71139 20.0127C2.18476 19.8703 1.7048 19.5921 1.31959 19.2058C0.934379 18.8195 0.657444 18.3387 0.516528 17.8117C0.344352 17.1649 0.229568 16.2823 0.152011 15.395L0.139602 15.2321L0.127193 15.0708C0.0506409 14.0198 0.00822082 12.9665 0 11.9127L0 11.7219C0.00310227 11.3884 0.0155114 10.2359 0.0992727 8.964L0.110131 8.80424L0.114784 8.72358L0.127193 8.56226L0.161318 8.15896L0.17683 7.99765C0.251284 7.19261 0.361415 6.41083 0.51808 5.82295C0.658758 5.29564 0.935587 4.81458 1.32081 4.42799C1.70604 4.0414 2.18612 3.76288 2.71294 3.62034C3.46834 3.41869 5.10789 3.2946 6.82965 3.21704L7.09335 3.20619L7.36014 3.19688L7.49354 3.19223L7.75878 3.18137C9.23501 3.13386 10.7118 3.10749 12.1888 3.10226H12.4882V3.10071ZM9.92727 8.07986V15.5532L16.3753 11.8181L9.92727 8.07986Z"
                                          fill="white"></path>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_7_56">
                                          <rect width="24.8182" height="24.8182" fill="black"></rect>
                                      </clipPath>
                                  </defs>
                              </svg>
                          </div>
                          <div className="dark:hidden inline-block">
                              <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_7_56)">
                                      <path
                                          d="M12.4882 3.10071H12.6263C13.9013 3.10536 20.3618 3.1519 22.1037 3.62034C22.6303 3.7633 23.1101 4.04197 23.4953 4.42849C23.8805 4.81501 24.1574 5.29585 24.2986 5.82295C24.4552 6.41238 24.5653 7.19261 24.6398 7.99765L24.6553 8.15896L24.6894 8.56226L24.7018 8.72358C24.8027 10.1413 24.8151 11.4691 24.8166 11.7592V11.8755C24.8151 12.1764 24.8011 13.5941 24.6894 15.0708L24.677 15.2337L24.6631 15.395C24.5855 16.2823 24.4707 17.1633 24.2986 17.8117C24.1579 18.339 23.881 18.8201 23.4958 19.2066C23.1106 19.5932 22.6305 19.8718 22.1037 20.0143C20.3044 20.4983 13.4654 20.5324 12.5177 20.5339H12.2974C11.8181 20.5339 9.83576 20.5246 7.75723 20.4533L7.49354 20.444L7.35859 20.4378L7.09335 20.4269L6.8281 20.416C5.10634 20.34 3.46679 20.2175 2.71139 20.0127C2.18476 19.8703 1.7048 19.5921 1.31959 19.2058C0.934379 18.8195 0.657444 18.3387 0.516528 17.8117C0.344352 17.1649 0.229568 16.2823 0.152011 15.395L0.139602 15.2321L0.127193 15.0708C0.0506409 14.0198 0.00822082 12.9665 0 11.9127L0 11.7219C0.00310227 11.3884 0.0155114 10.2359 0.0992727 8.964L0.110131 8.80424L0.114784 8.72358L0.127193 8.56226L0.161318 8.15896L0.17683 7.99765C0.251284 7.19261 0.361415 6.41083 0.51808 5.82295C0.658758 5.29564 0.935587 4.81458 1.32081 4.42799C1.70604 4.0414 2.18612 3.76288 2.71294 3.62034C3.46834 3.41869 5.10789 3.2946 6.82965 3.21704L7.09335 3.20619L7.36014 3.19688L7.49354 3.19223L7.75878 3.18137C9.23501 3.13386 10.7118 3.10749 12.1888 3.10226H12.4882V3.10071ZM9.92727 8.07986V15.5532L16.3753 11.8181L9.92727 8.07986Z"
                                          fill="black"></path>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_7_56">
                                          <rect width="24.8182" height="24.8182" fill="white"></rect>
                                      </clipPath>
                                  </defs>
                              </svg>
                          </div>
                      </LinkPreview>
                  </div>
                  <div className="mx-auto">
                      <div className="hidden dark:inline-block mx-auto">
                          <svg className="bg-foreground bg-clip-text mx-auto" width="23" height="19" viewBox="0 0 23 19"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.4091 18.7273L0.662497 0.113655L22.1557 0.113657L11.4091 18.7273Z"
                                    fill="#a1a1aa"></path>
                          </svg>
                      </div>
                      <div className="dark:hidden inline-block mx-auto">
                          <svg className="bg-foreground bg-clip-text" width="23" height="19" viewBox="0 0 23 19"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.4091 18.7273L0.662497 0.113655L22.1557 0.113657L11.4091 18.7273Z"
                                    fill="#3f3f46"></path>
                          </svg>
                      </div>

                  </div>
                  <div className="mx-auto">
                      <div className="hidden dark:inline-block mx-auto">
                          <svg className="bg-foreground bg-clip-text mx-auto" width="23" height="19" viewBox="0 0 23 19"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.4091 18.7273L0.662497 0.113655L22.1557 0.113657L11.4091 18.7273Z"
                                    fill="#a1a1aa"></path>
                          </svg>
                      </div>
                      <div className="dark:hidden inline-block mx-auto">
                          <svg className="bg-foreground bg-clip-text" width="23" height="19" viewBox="0 0 23 19"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.4091 18.7273L0.662497 0.113655L22.1557 0.113657L11.4091 18.7273Z"
                                    fill="#3f3f46"></path>
                          </svg>
                      </div>
                  </div>
                  <div className="mx-auto">
                      <div className="hidden dark:inline-block mx-auto">
                          <svg className="" width="1" height="35" viewBox="0 0 1 35" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <line x1="0.5" y1="34.9091" x2="0.499999" y2="0.636333" stroke="white"></line>
                          </svg>
                      </div>
                      <div className="dark:hidden inline-block">
                          <svg className="" width="1" height="35" viewBox="0 0 1 35" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <line x1="0.5" y1="34.9091" x2="0.499999" y2="0.636333" stroke="black"></line>
                          </svg>
                      </div>
                  </div>
                  <div className="-rotate-90">
                      <div className="text-black dark:text-white font-bold tracking-widest py-6 text-xl">LEARN</div>
                  </div>
              </div>
              <div className="flex justify-center">
                  <iframe className="max-w-full h-[10rem] md:h-[17rem] sm:h-[15rem] lg:h-[20rem] xl:h-[30rem] 2xl:h-[35rem] aspect-video"
                          src="https://www.youtube.com/embed/Ba53ZbzIuTw?si=Y3z7acl3EOYv18gs&amp;controls=0"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen autoFocus>
                  </iframe>
              </div>
              <div className="sm:flex hidden flex-col gap-5 -translate-y-28 sm:-translate-y-10 lg:-translate-y-0 w-min py-4 sm:px-3 md:px-4 lg:px-5 scale-20 sm:scale-50 md:scale-75 lg:scale-100 justify-start">
                  {/*<div className="bg-cover" style={{*/}
                  {/*    backgroundImage: `url(${yt.src})`,*/}
                  {/*    width: "32px",*/}
                  {/*    height: '32px',*/}
                  {/*}}></div>*/}
                  <div className="mx-auto">
                      <LinkPreview url="https://chat.whatsapp.com/DyDTrGkl2jp7IhoOtJU0Bs"
                                   className="">
                          <div className="hidden dark:inline-block">
                              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                                        fill="#ffffff"/>
                              </svg>
                          </div>
                          <div className="dark:hidden inline-block">
                              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                                        fill="#000000"/>
                              </svg>
                          </div>
                      </LinkPreview>
                  </div>
                  <div className="mx-auto">
                      <LinkPreview url="https://discord.gg/Hf5WWQjPK8" className="">
                          <div className="hidden dark:inline-block mx-auto">
                              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
                                      fill="#ffffff"/>
                              </svg>
                          </div>
                          <div className="dark:hidden inline-block mx-auto">
                              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
                                      fill="#000000"/>
                              </svg>
                          </div>
                      </LinkPreview>

                  </div>
                  <div className="mx-auto">
                      <div className="hidden dark:inline-block mx-auto">
                          <svg className="" width="1" height="35" viewBox="0 0 1 35" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <line x1="0.5" y1="34.9091" x2="0.499999" y2="0.636333" stroke="white"></line>
                          </svg>
                      </div>
                      <div className="dark:hidden inline-block">
                          <svg className="" width="1" height="35" viewBox="0 0 1 35" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <line x1="0.5" y1="34.9091" x2="0.499999" y2="0.636333" stroke="black"></line>
                          </svg>
                      </div>
                  </div>
                  <div className="-rotate-90">
                      <div className="text-black dark:text-white font-bold tracking-widest py-11 text-xl">CONNECT</div>
                  </div>
              </div>
          </div>
          <div className="w-full py-0 md:py-10 lg:py-20 px-[3rem] sm:px-[4rem] md:px-[5rem] lg:px-[7rem] bg-gradient-to-t from-background to-transparent from-90% flex flex-col gap-2 ">
              <TextGenerateEffect className="pt-0 md:pt-4" words={`In our pursuit of excellence, the Tech Club of DPS RPK envisions a new era of realities through ingenious ideation and compelling visualisations. With unwavering dedication, we strive to push the boundaries of innovation, crafting immersive experiences and revolutionary solutions for the future.`} />
              <Imajesr></Imajesr>  
              <Imajesl></Imajesl>  
          </div>
          
      </main>
  );
}
