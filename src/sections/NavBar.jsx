import NavItem from "../components/NavItem";

function NavBar() {
  return (
    <div className="shadow-box z-10">
      <div className="relative md:w-[80%] lg:w-[85%] md:mx-auto lg:mx-auto px-[15px]">
        <div className="relative md:flex md:justify-between md:items-center md:h-[72px] ">
          <div className="text-mainColor flex justify-center items-center text-3xl h-[72px] logo font-bold text-center">
            Elzero
          </div>
          <div className="flex justify-center items-center md:flex md:justify-end md:items-center my-3 gap-0 text-sm md:text-xl">
            <NavItem item="Articles" r="#articles" />
            <NavItem item="Gallery" r="#gallery" />
            <NavItem item="Features" r="#features" />
            <NavItem className="otherLinks" item="Other Links" r="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
