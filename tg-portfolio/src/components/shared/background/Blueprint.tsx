export default function Blueprint() {
  return (
    <>
      {/* Vertical Blueprint Axis */}
      <div
        className="
          absolute
          left-[15%]
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-blue-500/20
          to-transparent
        "
      />
      {/* Horizontal Blueprint Axis */}

      <div
        className="
          absolute
          left-[15%]
          top-[21%]
          h-px
          w-[180px]
          bg-gradient-to-r
          from-blue-500/20
          to-transparent
       "
      />

      {/* Blueprint Label */}

<div
  className="
    absolute
    left-[32%]
    top-[20%]
    text-[10px]
    uppercase
    tracking-[0.35em]
    text-blue-400/50
  "
>
  OMS
</div>

      {/* Engineering Nodes */}

      <div className="absolute left-[15%] top-[18%] h-2 w-2 -translate-x-1/2 rounded-full border border-blue-400/50 bg-[#05070d]" />

      <div className="absolute left-[15%] top-[42%] h-2 w-2 -translate-x-1/2 rounded-full border border-blue-400/50 bg-[#05070d]" />

      <div className="absolute left-[15%] top-[68%] h-2 w-2 -translate-x-1/2 rounded-full border border-blue-400/50 bg-[#05070d]" />
    </>
  );
}