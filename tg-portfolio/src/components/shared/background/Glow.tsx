export default function Glow() {
  return (
    <>
      <div
        className="
          absolute
          left-1/2
          top-0
          -z-30
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/15
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          -z-30
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />
    </>
  );
}