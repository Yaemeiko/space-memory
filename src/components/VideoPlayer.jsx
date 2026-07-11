export default function VideoPlayer() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-3 sm:px-6 py-10">

      <div className="max-w-4xl w-full">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 px-2">
          Wleee
        </h2>

        <video
          controls
          className="rounded-2xl sm:rounded-3xl w-full shadow-2xl"
        >
          <source src="/video/hallo moon.mp4" type="video/mp4" />
        </video>

      </div>

    </section>
  );
}