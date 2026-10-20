
export default function Blueprint() {
  return (
    <>
      {/* Vertical Blueprint Axis */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-0
          hidden
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-blue-500/20
          to-transparent
          md:block
        "
      />

      {/* Horizontal Blueprint Axis */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[21%]
          hidden
          h-px
          w-[180px]
          bg-gradient-to-r
          from-blue-500/20
          to-transparent
          md:block
        "
      />

      {/* Blueprint Label */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[32%]
          top-[20%]
          hidden
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-blue-400/50
          md:block
        "
      >
        OMS
      </div>

      {/* Engineering Nodes */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[18%]
          hidden
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          border
          border-blue-400/50
          bg-[#05070d]
          md:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[42%]
          hidden
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          border
          border-blue-400/50
          bg-[#05070d]
          md:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[68%]
          hidden
          h-2
          w-2
          -translate-x-1/2
          rounded-full
          border
          border-blue-400/50
          bg-[#05070d]
          md:block
        "
      />
    </>
  );
}
