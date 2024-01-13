import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";
import { useState } from "react";
import sidebarStyles from "../components/sidebar.module.css";
import HeaderAds from "../components/HeaderAds";
const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

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
      <div className="bg-white w-full h-36 md:h-[150px] flex justify-between items-center">
        <img
          className="w-40 h-20 object-cover"
          alt=""
          src="/logo-full-11@2x.png"
          onClick={() => router.push(`/`)}
        />
        <div className={styles.searchContainer}>
          <form className="flex">
            <input type="text" placeholder="Search.." name="search" className={styles.SearchInput2} />
            <button type="submit"><i className="">Search</i></button>
          </form>
        </div>
      </div>


      <div className="w-full">
      <div className="flex-row justify-between w-full">
          
          <div className={`${styles.hrnavbar} md:pl-4 pl-2`}>
          <div className="w-[58px]" onClick={toggleSidebar}>
            <div className={styles.hamburgerIcon}>
              <div className={styles.hamburgerLine} />
              <div className={styles.hamburgerLine} />
              <div className={styles.hamburgerLine} />
            </div>
          </div>
          <div className="flex justify-between items-center w-4/5 overflow-x-auto">
            <div
              className="lg:pl-10 pl-5"
              onClick={() => router.push(`/category/products`)}
            >
              Products
            </div>
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/category/interview`)}
            >
              Interviews
            </div>
            {/* <div className={styles.navbar}>Magazines</div> */}
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/category/news`)}
            >
              News
            </div>
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/category/casestudy`)}
            >
            Case Study 
            </div>
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/category/article`)}
            >
              Aricles
            </div>
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/events/events`)}
            >
              Events
            </div>
            <div
              className="lg:px-16 px-10"
              onClick={() => router.push(`/directory/directories`)}
            >
              Directories
            </div>
            <div style={{ width: "200px" }}>
            {" "}
            
          </div>
          </div>
          <button
              className={styles.subscribeNow}
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
        className={`${sidebarStyles.sidebar} ${isSidebarOpen ? sidebarStyles.open : ""
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
