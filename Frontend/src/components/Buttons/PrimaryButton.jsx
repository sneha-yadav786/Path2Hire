const PrimaryButton = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 px-4 py-2 font-medium text-white transition duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;