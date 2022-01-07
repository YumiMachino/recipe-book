const Toggle = () => {
  return (
    <label className="flex items-center cursor-pointer relative mb-4">
      <input type="checkbox" id="toggle-switch" className="toggle sr-only" />
      <div className="toggle-bg bg-primary border-2 border-primary h-6 w-11 rounded-full"></div>
      <span className="ml-3 text-dark text-sm">Sort by popularity</span>
    </label>
  );
};

export default Toggle;
