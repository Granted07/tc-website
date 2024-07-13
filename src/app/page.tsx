import "./globals.css";
import { FlipWordsDemo } from "@/components/starting-text";
import myVideo from '../../src/app/videos/video.mp4'; 

export default function Home() {
  return (
      <main>
        <FlipWordsDemo></FlipWordsDemo>
            <div className="z-30 flex justify-center">
                
                {/* <video src={myVideo} /> */}
                <iframe width="800" height="460" src="https://www.youtube.com/embed/c_piJLyxm98?si=qm6hSB1vdR0qiT1r&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; " allowFullScreen></iframe>
                {/* <div className="controls">
                    <button className="play-button control-button">
                    <svg viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="57.5" cy="57.6182" r="57.3891" fill="white"></circle>
                        <path d="M44.3381 79.3962C43.8738 79.3962 43.4286 79.2118 43.1004 78.8836C42.7721 78.5553 42.5877 78.1101 42.5877 77.6459V39.1378C42.5878 38.8336 42.6671 38.5347 42.8178 38.2705C42.9686 38.0064 43.1856 37.786 43.4474 37.6312C43.7092 37.4765 44.0069 37.3926 44.311 37.3879C44.6152 37.3832 44.9153 37.4578 45.1818 37.6044L80.1891 56.8585C80.4635 57.0096 80.6924 57.2316 80.8518 57.5013C81.0112 57.771 81.0953 58.0785 81.0953 58.3918C81.0953 58.7051 81.0112 59.0126 80.8518 59.2823C80.6924 59.5521 80.4635 59.774 80.1891 59.9251L45.1818 79.1792C44.9233 79.3215 44.6331 79.3961 44.3381 79.3962Z" fill="black"></path>
                    </svg>
                    </button>
                </div> */}
            </div>
      </main>
  );
}
