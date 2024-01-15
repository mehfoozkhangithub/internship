import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";
import { useState } from "react";
import sidebarStyles from "../components/sidebar.module.css";
import HeaderAds from "../components/HeaderAds";
const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // this is toggle function

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // this is the function for routing

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  // this is for side_bar toggle

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "Events", path: "/events/events" },
    { label: "Directories", path: "/directory/directories" },
    { label: "About Us", path: "/about" },
    // Add more pages as needed
  ];

  const currentDate = new Date();

  // Format the date as "Tuesday, 11.05.2023"
  const formattedDate = currentDate.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <div className="h-auto justify-center font-poppins">
      {/* this is header which we have to woke on  */}

      <div className=" flex items-center justify-between p-8 shadow-offset-x-negative-3 shadow-offset-y-2 shadow-blur-8 shadow-color-rgba-0-0-0-0-1">
        <div className="head_img ">
          <img
            className="w-[10.313rem] h-[5rem] object-cover p-1 "
            alt=""
            src="/logo-full-11@2x.png"
            onClick={() => router.push(`/`)}
          />
        </div>

        <div className=" w-[60%]">
          <form
            className="flex justify-center items-center gap-3 h-full
          "
          >
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="w-[60%] px-3 py-2 text-center rounded border-1"
            />
            <button
              className="bg-crimson hover:bg-transparent hover:border-solid hover:!text-crimson hover:border-[1px]  hover:border-crimson text-white ease-in-out duration-500 cursor-pointer rounded border-none py-2 px-4"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/* this is header which we have to woke on  */}

      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ width: "58px", backgroundColor: "#a1181b" }}
            onClick={toggleSidebar}
          >
            <div className="w-full h-[5px] mt-[10px] z-[999]">
              <div className="w-full h-[5px] bg-[#dad5d5] m-[4px] z-[999]" />
              <div className="w-full h-[5px] bg-[#dad5d5] m-[4px] z-[999]" />
              <div className="w-full h-[5px] bg-[#dad5d5] m-[4px] z-[999]" />
            </div>
          </div>
          <div className="bg-firebrick flex w-full h-11 cursor-pointer text-white justify-evenly items-center">
            <div
              className={styles.navbar}
              onClick={() => router.push(`/category/products`)}
            >
              Products
            </div>
            <div
              className={styles.navbar}
              onClick={() => router.push(`/category/interview`)}
            >
              Interviews
            </div>
            {/* <div className={styles.navbar}>Magazines</div> */}
            <div
              className={styles.navbar}
              onClick={() => router.push(`/category/news`)}
            >
              News
            </div>
            <div
              className={styles.navbar}
              onClick={() => router.push(`/category/casestudy`)}
            >
              Case Study
            </div>
            <div
              className={styles.navbar}
              onClick={() => router.push(`/category/article`)}
            >
              Articles
            </div>
            <div
              className={styles.navbar}
              onClick={() => router.push(`/events/events`)}
            >
              Events
            </div>
            <div
              className={styles.navbar}
              onClick={() => router.push(`/directory/directories`)}
            >
              Directories
            </div>
          </div>

          <div style={{ width: "200px" }}>
            {" "}
            <button
              className="w-[178px] h-[45px] font-semibold text-[20px] border-[white] text=[white] bg-red-600  rounded-bl-[20px] "
              onClick={() => router.push(`/subscription/subscription`)}
              style={{ cursor: "pointer" }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <HeaderAds />

      <div
        className={`${sidebarStyles.sidebar} ${
          isSidebarOpen ? sidebarStyles.open : ""
        }`}
      >
        <div className={sidebarStyles.navbarhead}>
          <img
            className={styles.logoFull1}
            alt=""
            src="/logo-full-11@2x.png"
            onClick={() => router.push(`/`)}
          />
        </div>
        <div className={sidebarStyles.navbar}>
          <div className={sidebarStyles.navbarItem}>
            <a href="/" className={sidebarStyles.navLink}>
              Home
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/about" className={sidebarStyles.navLink}>
              About Us
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/contactus" className={sidebarStyles.navLink}>
              Contact Us
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/privacypolicy" className={sidebarStyles.navLink}>
              Privacy Policy
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/termsandconditions" className={sidebarStyles.navLink}>
              Terms & Conditions
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/mediapartner" className={sidebarStyles.navLink}>
              Media Partner
            </a>
          </div>
        </div>
      </div>
      {/* Menu Items */}
      {isMenuOpen && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={styles.menuItem}
              onClick={() => handleMenuItemClick(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
