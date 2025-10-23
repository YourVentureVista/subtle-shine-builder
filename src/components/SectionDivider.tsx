export const SectionDivider = () => {
  return (
    <div className="w-full py-12 relative overflow-hidden">
      <div
        className="h-px max-w-[80%] mx-auto opacity-0 transition-opacity duration-1000"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
        }}
        data-animate="divider"
      />
    </div>
  );
};
