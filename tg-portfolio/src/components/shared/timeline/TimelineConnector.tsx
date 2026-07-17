interface TimelineConnectorProps {
  active?: boolean;
}

export default function TimelineConnector({
  active = false,
}: TimelineConnectorProps) {
  return (
    <div
      className={`
        mt-11
        h-px
        w-20
        transition-all
        duration-500

        ${
          active
            ? `
              bg-gradient-to-r
              from-blue-500/80
              via-blue-500/35
              to-transparent
              shadow-[0_0_10px_rgba(59,130,246,0.15)]
            `
            : `
              bg-gradient-to-r
              from-white/10
              via-white/10
              to-transparent
            `
        }
      `}
    />
  );
}