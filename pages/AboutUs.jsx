import Banner from "../components/Banner";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./index.module.css";

const AboutUs = () => {
  return (
    <>
      <div className="main_div mt-[50px]">
        {/* parent container start  */}
        <div className="parents_container mb-4">
          <h1 className="text-crimson_200 text-[50px] text-center pb-[103px] font-bold">
            About Us
          </h1>
          {/* child_container start */}
          <div className="child_container flex w-[90%] m-auto ">
            <div className="img_tg w-[30%]  ">
              <img
                src="/ialog2020-1@2x.png"
                alt="logo"
                className="w-[210px] h-[71px] object-cover mt-[13px] "
              />
            </div>
            <div className="info w-[70%]">
              <p className="text-[32px] font-semibold font-poppins">
                Industrial Automation
              </p>
              <p className="text-[20px] font-normal font-poppins leading-[1.65rem] text-justify">
                About UsAdvisory Board Industrial Automation has recently formed
                an Editorial Advisory Board. With the rapidly changing scenario
                in the digital era, there is a need to constantly update the
                content of the magazine to make it more relevant to the present
                needs. The idea is to benefits from the expertise of the members
                of the Editorial Advisory Board, who are all seasoned
                professionals with years of active experience in the industry.
                The following eminent persons from the industry form the
                Editorial Advisory Board. Mr. G Ganapathiraman Country Manager
                India – ARC Advisory Group G Ganapathiraman (Raman) is
                responsible for managing ARC Advisory Group's operations in
                India. Raman has been heading the ARC India operations since
                June 2012. His range of responsibilities at ARC includes
                supporting the global offices in preparation of market research
                reports (worldwide, regional, and India specific), organising
                ARC India forums, and sales/technical promotion in the areas of
                automation and enterprise. He handles and nurtures analyst
                relationships with domestic and global clients. Additionally, he
                collaborates with industry organizations, such as NASSCOM, CII,
                ISA, and others, as well as with the media. Prior to joining ARC
                he superannuated as Executive Director of Electronics Division
                (EDN) of BHEL. During his tenure in BHEL he headed Project
                Engineering Management (PEM) and Industrial Systems Group (ISG).
                He has been a team leader and builder; at BHEL he led a team of
                5,000 personnel. Raman's work and commitment to excellence has
                won recognition at the national and international levels. He has
                received various prestigious awards, such as ICWA Cost
                Management Award, CII Business Excellence, and Quality Control
                (QC) Awards. Mr. Sivaram PV Evangelist for Industry 4.0, Digital
                Transformation and Industrial Automation. PV Sivaram an
                Evangelist for Industry 4.0, Digital Transformation and
                Industrial Automation was also the Managing Director of B&R
                Industrial Automation and had founded and built the organisation
                in India since 1996. He is also the Past President of Automation
                India Association (AIA), and a Mentor at C4i4, Pune which is a
                part of Samarth Udyog Initiative by Department of Heavy
                Industries. Sivaram began his career in Bhabha Atomic Research
                Centre (BARC) where he has worked on Reactor Controls. He later
                shifted to the electrical engineering major Siemens.
                Subsequently he founded the Indian Subsidiary of B&R Industrial
                Automation- now part of ABB. He grew the company over twenty
                years making it one of prominent Machine and Factory Automation
                companies in India. Sivaram has worked in various fields like
                Power Transmission and Distribution, Communications, and Power
                Plant Automation. At B&R he has led projects on Machine and
                Factory Automation in all verticals like Plastic, Pharma,
                Textiles etc.He has considerable experience in Distributed
                Systems, SCADA, DCS, and microcontroller applications. He has
                worked on software for redundancy systems and managed large
                projects both in public sector and private fields. He has nearly
                forty five years of work experience. After retirement from B&R
                he is actively engaged with C4i4 primarily as a Mentor and as an
                evangelist for Digitalisation. JOIN OUR MAILING LISTfor offers
                and updates.Enter your email addressSubcribe Industrial
                Automation is a monthly magazine published by IED Communications
                since 1980, catering to the Factory and Process Automation needs
                of the industry. The magazine is one of the most widely read and
                referred trade journal in the automation industry. With a
                monthly circulation of 10,000 copies and readership of about
                100,000, the magazine readers cover a wide spectrum of industry
                stakeholders including shop floor personnel and maintenance
                engineers, purchase heads, owner entrepreneurs of SMEs, key
                decision makers, system integrators & consultants, scientists &
                researchers, engineers, and above all, students of various
                engineering colleges & institutes. <br /> Each month Industrial
                Automation covers the latest developments in the field of
                Industrial and Process Automation, Factory Automation,
                Instrumentation & Control, Pumps & Valves, Hydraulics &
                Pneumatics, Robotics, and Home & Office Automation, thought
                news, articles, case studies and interviews, besides new product
                information. The magazine also covers the latest advances in the
                field with the onset of Industry 4.0 and the creation of smart
                factories with digitally connected machines in the age of
                Industrial Internet of Things (IIoT).
              </p>
            </div>
          </div>
          <hr className="border-[2px] border-solid w-[90%] m-auto bg-[#666363] " />
          {/* child_container start */}
        </div>
        {/* parent container start  */}
      </div>
    </>
  );
};

export default AboutUs;
