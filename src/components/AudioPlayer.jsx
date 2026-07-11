import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 px-3 sm:px-6 py-10">

      <div className="w-full max-w-xl rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl p-6 sm:p-8 border border-white/10">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          HUUFF
        </h2>
<div className="mb-8 text-center">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
    Hi Moon 🌙
  </h2>

  <p className="text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">
    Sebelum kamu menekan tombol ini,
    aku hanya ingin meminta satu hal.
    <br /><br />
    Dengarkan sampai selesai.
    <br /><br />
    Karena mungkin, inilah saat nya kamu mendengarkan lagih
    suara yang setara Justin Bieber itu Mwheehehe
  </p>
</div>
        <button
          onClick={toggleAudio}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-indigo-600 flex items-center justify-center hover:scale-110 transition"
        >
          {playing ? <FaPause /> : <FaPlay />}
        </button>

        <audio
          ref={audioRef}
          src="/audio/huf.mp3"
          onEnded={() => setPlaying(false)}
        />

      </div>

    </section>
  );
}