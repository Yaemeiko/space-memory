import { useState } from "react";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import AudioPlayer from "./components/AudioPlayer";
import VideoPlayer from "./components/VideoPlayer";
import StarsBackground from "./components/StarsBackground";
import FloatingPhotos from "./components/FloatingPhotos";

export default function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">

    <div className="fixed inset-0 -z-20">
        <StarsBackground />
    </div>

    <FloatingPhotos isClicked={isClicked} />

    <Hero onButtonClick={() => setIsClicked(true)} />
    <Letter />
    <AudioPlayer />
    <VideoPlayer />

</div>
  );
}