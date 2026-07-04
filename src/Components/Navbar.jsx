
function Navbar() {

  return (
    <>
      <header className="flex items-center justify-between px-6">
        <a className="flex items-center gap-2 text-md text-text-muted font-bold sm:text-lg">
          &gt;_ <span className="text-lg text-text-primary sm:text-2xl">Argiel</span>
        </a>
        <div className="flex items-center p-2 gap-2 text-[10px] font-medium bg-surface border border-border rounded-md sm:text-sm sm:font-normal">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span>Open to opportunities</span>
        </div>
      </header>
    </>
  );
}

export default Navbar;
