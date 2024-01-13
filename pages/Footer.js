import { useRouter } from "next/router";
// import styles from "./frame-component11.module.css";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-black text-white p-4 font-poppins md:h-auto ">
      <div className="flex justify-between max-sm:justify-center  max-w-[1500px] my-0 mx-auto max-sm:flex-wrap   md:flex-wrap xl:flex-nowrap">
        <div className="md:flex md:gap-16 xl:flex-col xl:gap-0 my-0 mx-auto py-0 px-[30px] max-sm:px-0">
          <div className="max-md:flex justify-center max-lg:flex-none">
            <img
              className="w-[250px] h-[100px] object-cover "
              alt="logo"
              src="/logo-full-1@2x.png"
            />
          </div>
          <div>
            <h2 className="border-b-[1px] border-t-0 border-x-0 border-solid my-[10px] mx-0 max-md:text-center ">
              About Us
            </h2>
            <p className="text-[12px] text-center">
              Industrial Automation is a monthly magazine published by IED
              Communications since 1980, catering to the factory and process
              automation needs of the industry
            </p>
          </div>
        </div>
        <div className="my-0 mx-auto py-0 px-[30px]">
          <h2 className="border-b-[1px] border-t-0 border-x-0 border-solid my-[10px] mx-0 flex justify-center  py-0 px-[50px] text-center">
            Quick Links
          </h2>
          <p
            //# here we are using the bySubscription css in p tags
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/subscription/subscription`)}
          >
            Buy Subscription
          </p>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/contact-us`)}
          >
            Contact Us
          </p>
        </div>
        <div className="my-0 mx-[15px] py-0 px-[30px]">
          <h2 className="flex my-[10px] mx-0 justify-center py-0 px-[50px]  border-b-[1px] border-t-0 border-x-0 border-solid max-sm:px-0 ">
            Advertisement
          </h2>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/category/products`)}
          >
            Products
          </p>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/category/interview`)}
          >
            Interviews
          </p>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/category/news`)}
          >
            News
          </p>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/category/article`)}
          >
            Aricles
          </p>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/category/casestudy`)}
          >
            Case Study
          </p>
        </div>
        <div className="my-0 mx-auto py-0 px-[30px]">
          <h2 className="flex my-[10px] mx-0 justify-center py-0 px-[50px]  border-b-[1px] border-t-0 border-x-0 border-solid ">
            Company
          </h2>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/about`)}
          >
            About Us
          </p>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/privacypolicy`)}
          >
            Privacy Policy
          </p>
          <p
            className="flex justify-center cursor-pointer text-[14px]"
            onClick={() => router.push(`/termsandconditions`)}
          >
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
