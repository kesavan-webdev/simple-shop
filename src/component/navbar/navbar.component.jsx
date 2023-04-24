import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={"/homepage"}>Home</Link>
      <Link to={"/shoppage"}>Shop</Link>
    </>
  );
};
export default Navbar;
