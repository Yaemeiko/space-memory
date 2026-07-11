export default function StarsBackground() {
  const stars = Array.from({ length: 250 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, index) => {
        const size = Math.random() * 3 + 1;

        return (
          <span
            key={index}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        );
      })}
    </div>
  );
}