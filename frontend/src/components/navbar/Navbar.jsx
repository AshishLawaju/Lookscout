import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/slice/userSlice";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.user);
  // const role = useSelector((store)=>(store.user))
  const dispatch = useDispatch();
  // console.log({ user });
  const navigate = useNavigate();

  return (
    <div className="h-[86px] border-b  bg-bgColor">
      <div className="container flex h-full items-center justify-between">
        <div className="flex  gap-16">
          <img
            src={Logo}
            alt="company logo"
            width={160}
            height={40}
            className="h-[32] w-[128px] cursor-pointer lg:h-[40px] lg:w-[160px]"
            onClick={() => navigate("/")}
            sizes="(max-width: 639px) 120px,(max-width: 768px) 250px, 400px"
          />

          <div className="flex items-center  gap-8 text-[15px] font-semibold max-lg:hidden">
            <NavLink to={"/"} className="cursor-pointer">
              Home
            </NavLink>
            <NavLink className="cursor-pointer whitespace-nowrap">
              Our Products
            </NavLink>
            <NavLink className="flex cursor-pointer items-center gap-3">
              Resources <IoIosArrowDown />
            </NavLink>
            <NavLink to={"/contact"} className="cursor-pointer">
              Contacts
            </NavLink>

            {user.role ? (
              user.role.role == "admin" ? (
                <NavLink to={"/message"}>Message</NavLink>
              ) : (
                ""
              )
            ) : (
              <></>
            )}
          </div>
        </div>
        {showMenu ? (
          <div className="absolute right-0 top-[86px]  flex min-w-[360px] max-w-[400px] flex-col items-center justify-center gap-6 bg-bgColor py-12 shadow-lg">
               <NavLink to={"/"} onClick={()=>setShowMenu(false)} className="cursor-pointer">
              Home
            </NavLink>
            <NavLink className="cursor-pointer whitespace-nowrap">
              Our Products
            </NavLink>
            <NavLink className="flex cursor-pointer items-center gap-3">
              Resources <IoIosArrowDown />
            </NavLink>
            <NavLink to={"/contact"}  onClick={()=>setShowMenu(false)}  className="cursor-pointer">
              Contacts
            </NavLink>
            {user.role ? (
              user.role.role == "admin" ? (
                <NavLink to={"/message"}>Message</NavLink>
              ) : (
                ""
              )
            ) : (
              <></>
            )}

            {user.value ? (
              <div className="flex gap-4 font-semibold lg:hidden">
                <p>{user.value.name}</p>
                {/* <p>{user.value.role}</p> */}

                <NavLink
                  onClick={() => {
                    dispatch(logout());
                    setShowMenu(false)} 
                  }
                  className={(navData) => (navData.isActive ? "nav" : "nav")}
                  to={"/"}
                  
                >
                  Logout
                </NavLink>
              </div>
            ) : (
              <>
                <div className="flex items-center  gap-6 lg:hidden">
                  <NavLink
                    to={"/signup"}
                    onClick={() => setShowMenu(false)}
                    className="cursor-pointer whitespace-nowrap text-primary"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    onClick={() => setShowMenu(false)}
                    to={"/login"}
                    className="btn cursor-pointer whitespace-nowrap rounded-md bg-primary text-white"
                  >
                    Log In
                  </NavLink>
                </div>
              </>
            )}
          </div>
        ) : (
          ""
        )}
        {!showMenu ? (
          <RxHamburgerMenu
            className="cursor-pointer text-[22px] sm:text-3xl lg:hidden"
            onClick={() => setShowMenu((pre) => !pre)}
          />
        ) : (
          <IoMdClose
            className="cursor-pointer text-3xl lg:hidden"
            onClick={() => setShowMenu((pre) => !pre)}
          />
        )}

        {user.value ? (
          <div className="flex gap-4 font-semibold max-lg:hidden">
            <p>{user.value.name}</p>
            {/* <p>{user.value.role}</p> */}

            <NavLink
              onClick={() => {
                dispatch(logout());
              }}
              className={(navData) => (navData.isActive ? "nav" : "nav")}
              to={"/"}
            >
              Logout
            </NavLink>
          </div>
        ) : (
          <>
            <div className="flex items-center  gap-6 max-lg:hidden">
              <NavLink
                to={"/signup"}
                className="cursor-pointer whitespace-nowrap text-primary"
              >
                Sign Up
              </NavLink>
              <NavLink
                to={"/login"}
                className="btn cursor-pointer whitespace-nowrap rounded-md bg-primary text-white"
              >
                Log In
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
