import { IoRemoveOutline } from "react-icons/io5";
import { BiSolidMessageAlt } from "react-icons/bi";
import { IoArrowUpOutline } from "react-icons/io5";
import { HiOutlineArrowRight } from "react-icons/hi";
import pic from "./assets/images/zedenta-project-cover.jpg";
import pic2 from "./assets/images/zedenta-product-show-case.jpg";
import pic3 from "./assets/images/zedenta_product-show-case-2.jpg";
import pic4 from "./assets/images/zedenta-product-show-case-3.jpg";
import pic5 from "./assets/images/zedenta-product-show-case-4.jpg";
import pic6 from "./assets/images/zedenta-product-show-case-5.jpg";
import pic7 from "./assets/images/zedenta-product-show-case-6-p-1080.jpg";
import pic8 from "./assets/images/zedenta-product-show-case-7.jpg";
import pic9 from "./assets/images/zedenta-product-show-case-8.jpg";
import pic10 from "./assets/images/zedenta-product-show-case-2-p-1080.jpg";
import pic11 from "./assets/images/zedenta-product-show-case-9.jpg";
import pic12 from "./assets/images/zedenta-product-show-case-1.jpg";
import pic13 from "./assets/images/zedenta-product-show-case-10-p-1080.jpg";
import framePic1 from "./assets/images/zedenta_frame-pic1.png";
import framePic2 from "./assets/images/zedenta-frame-pic2.png";
import framePic3 from "./assets/images/zedenta-frame-pic3.png";
import videoPic1 from "./assets/images/zedenta-videopic1.jpg";
import framePic4 from "./assets/images/zedenta-Frame 1000003129-p-1080.png";
import framePic5 from "./assets/images/zedenta-Frame 1000003129-2-p-1080.png";
import framePic6 from "./assets/images/zedenta-Frame 1000003129-3-p-1080.png";
import mainPic1 from "./assets/images/zedenta-show-case-1.png";
import mainPic2 from "./assets/images/zedenta-show-case-2.png";
import mainPic3 from "./assets/images/zedenta-show-case-3.png";
import mainPic4 from "./assets/images/zedenta-show-case-4.png";
import mainPic5 from "./assets/images/zedenta-show-case-5-p-1080.png";
import payPic1 from "./assets/images/zedenta-p-show-case-6.png";
import payPic2 from "./assets/images/zedenta-p-show-case-7.png";
import payPic3 from "./assets/images/zedenta-p-show-case-p-1080.png";
import transferPic1 from "./assets/images/transfer-1.png";
import transferPic2 from "./assets/images/transfer-2.png";
import transferPic3 from "./assets/images/transfer-3.png";
import transferPic4 from "./assets/images/transfer-4.png";
import other1 from "./assets/images/other-1.png";
import other2 from "./assets/images/other-2.png";
import largePic1 from "./assets/images/large-1.png";
import largePic2 from "./assets/images/large-2.png";
import largePic3 from "./assets/images/large-3.png";
import largePic4 from "./assets/images/large-4.png";
import largePic5 from "./assets/images/large-5.png";
import empower1 from "./assets/images/empower-1.png";
import ease1 from "./assets/images/ease-1.png";
import artoLogo from "./assets/images/arto.png";
import artoPic from "./assets/images/zedenta-Arto+ - Featured Image (Small).jpg";
import chart from "./assets/images/fki.png";
import chartPic from "./assets/images/zedenta-Thumbnail.png";
import logo from "./assets/images/FKRI-studio.png";

function App() {
  return (
    <div className="w-full h-max flex flex-col justify-center">
      <div className="fixed bottom-5 left-5 w-max h-max p-3 shadow-lg bg-white shadow-gray-300 rounded-3xl">
        <IoArrowUpOutline />
      </div>

      <div className="fixed bottom-5 right-5 w-max h-max p-4 shadow-lg shadow-gray-400 rounded-full bg-[#93D4CC]">
        <BiSolidMessageAlt className="text-[#282560]" size={30} />
      </div>

      <nav className="bg-white">
        {/* Navbar */}

        <div className=" w-full h-auto flex flex-col items-center justify-center z-30 fixed top-0">
          {/* Top Section */}
          <div className=" w-full h-max flex bg-[#111029] justify-between py-3 px-14">
            <div className=" w-auto h-auto flex gap-3">
              <div className=" w-auto h-auto text-sm py-[2px] md:py-0 px-2 bg-[#93D4CC] rounded-2xl">
                <p className=" text-[#282560] text-[13px] md:text-base font-medium">
                  2 spots left
                </p>
              </div>
              <p className="text-[12px] md:text-base font-medium lg:text-sm text-white">
                Let's collaborate on your new project.
              </p>
            </div>
            <div className="hidden w-auto h-auto md:flex md:gap-7 lg:gap-3 text-white pl-10">
              <p className=" font-medium cursor-pointer underline">Dribbble</p>
              <p className=" font-medium cursor-pointer underline">Behance</p>
              <p className=" font-medium cursor-pointer underline">Instagram</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-[94%] flex h-16 justify-between items-center bg-white">
            <div className="flex">
              {/* Logo */}
              <div className="flex flex-shrink-0 items-center">
                <img alt="Your Company" src={logo} className="h-14 w-auto" />
              </div>
            </div>

            {/* Buttons */}
            <div className="hidden lg:ml-6 lg:flex md:items-center lg:justify-between lg:space-x-4">
              <a href="#" className="each-text">
                Clients Testimonials
                <div className="bg-[#908AC2] nav-div"></div>
              </a>
              <a href="#" className="each-text">
                Work
                <div className="nav-div bg-[#FBDC5E]"></div>
              </a>
              <a href="#" className="each-text">
                Service
                <div className="bg-[#93D4CC] nav-div"></div>
              </a>
              <a href="#" className="each-text">
                Career
                <div className="bg-[#908AC2] nav-div"></div>
              </a>
              <a href="#" className="each-text">
                About Us
                <div className="bg-[#FBDC5E] nav-div"></div>
              </a>
              <a href="#" className="each-text">
                Blog
                <div className="bg-[#FBDC5E] nav-div"></div>
              </a>
            </div>

            {/* Contact Us Btn */}
            <div className="flex items-center">
              {/* "New Job" Button */}
              <button
                type="button"
                className=" hidden relative lg:inline-flex items-center gap-x-1.5 rounded-3xl bg-[#FBDC5E] px-5 py-2 font-sora text-[18px] text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Contact Us
              </button>
            </div>

            {/* Hamburger Icon */}
            <div className="flex items-center">
              {/* "New Job" Button */}
              <button
                type="button"
                className=" flex flex-col gap-[6px] lg:hidden"
              >
                <div className=" w-4 h-[2px] bg-[#282560]"></div>
                <div className=" w-4 h-[2px] bg-[#282560]"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="w-[94%] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Zedenta Hero Section */}
        <div className=" w-full h-max flex flex-col gap-28 pb-36">
          <div className="flex w-full h-max flex-col leading-tight gap-2 pt-40">
            <div className="flex">
              <IoRemoveOutline className=" mt-[3px] text-[#908AC2]" />
              <IoRemoveOutline className=" mt-[3px] -mx-2 text-[#908AC2]" />
              <IoRemoveOutline className=" mt-[3px] text-[#908AC2]" />
              <p className="text-[#282560] text-[17px] pl-6">Zendenta v.2</p>
            </div>
            <p className="text-[55px] font-semibold text-[#282560] tracking-tighter leading-tight">
              Zendenta - Dental Clinic <br />
              Management System Case <br className="hidden lg:flex" /> study
            </p>
          </div>
          <div className=" w-full h-max">
            <img src={pic} alt="" />
          </div>
        </div>

        {/* Separated Section */}
        <div className=" w-full h-max flex flex-col gap-56 pb-56">
          <div className=" flex w-full h-max justify-between">
            {/* Left Side */}
            <div className="w-[40%] md:w-[27%] h-max flex flex-col divide-y divide-[#C5D1E7]">
              <div className=" flex flex-col gap-[20px] py-9">
                <p className="text-[#282560] text-[20px] font-sora font-semibold">
                  Deliveries
                </p>
                <div className=" flex flex-col gap-[10px]">
                  <div className="flex flex-col md:flex-row lg:flex gap-[10px]">
                    <div className=" border-btn">Product Design</div>
                    <div className="border-btn">Illustration</div>
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex gap-[10px]">
                    <div className="border-btn">Prototype</div>
                    <div className="border-btn">Brandbook</div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[20px] py-9">
                <p className="text-[#282560] text-[20px] font-sora font-semibold">
                  Industries
                </p>
                <div className="text-[#747198]">Dental, Healthcare</div>
              </div>
              <div className=" flex flex-col gap-[20px] py-9">
                <p className="text-[#282560] text-[20px] font-sora font-semibold">
                  Project Timeline
                </p>
                <div className="text-[#747198]">2022 - 2023</div>
              </div>
              <div className=" flex flex-col gap-[20px] py-9">
                <p className="text-[#282560] text-[20px] font-sora font-semibold">
                  What do we do?
                </p>
                <div className=" flex flex-col">
                  <div className="flex">
                    <IoRemoveOutline className=" mt-[5px] text-[#908AC2]" />
                    <IoRemoveOutline className=" mt-[5px] -mx-2 text-[#908AC2]" />
                    <p className="brandbook">Zendenta v.2</p>
                  </div>
                  <div className="flex">
                    <IoRemoveOutline className=" mt-[5px] text-[#908AC2]" />
                    <IoRemoveOutline className=" mt-[5px] -mx-2 text-[#908AC2]" />
                    <p className="brandbook">Desktop Web App</p>
                  </div>
                  <div className="flex">
                    <IoRemoveOutline className=" mt-[5px] text-[#908AC2]" />
                    <IoRemoveOutline className=" mt-[5px] -mx-2 text-[#908AC2]" />
                    <p className="brandbook">Patient mobile App</p>
                  </div>
                  <div className="flex">
                    <IoRemoveOutline className=" mt-[5px] text-[#908AC2]" />
                    <IoRemoveOutline className=" mt-[5px] -mx-2 text-[#908AC2]" />
                    <p className="brandbook">Doctor mobile App</p>
                  </div>
                  <div className="flex">
                    <IoRemoveOutline className=" mt-[5px] text-[#908AC2]" />
                    <IoRemoveOutline className=" mt-[5px] -mx-2 text-[#908AC2]" />
                    <p className="brandbook">Landing Page</p>
                  </div>
                  <div className="flex">
                    <IoRemoveOutline className=" mt-[5px] text-[#908AC2]" />
                    <IoRemoveOutline className=" mt-[5px] -mx-2 text-[#908AC2]" />
                    <p className="brandbook">Brandbook</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className=" w-[40%] md:w-[60%] h-max flex flex-col gap-20">
              {/* Challenges */}
              <div className="flex flex-col font-sora gap-7">
                <p className="bold-text">
                  The <br className=" flex md:hidden" /> challenge
                </p>
                <div className=" flex flex-col text-[17px] gap-5">
                  <p className=" text-[#747AAF]">
                    We must understand the ins and outs of every medical
                    activity in detail. This complexity <br />
                    is essential in providing our valued clients with the most
                    optimal solutions. In addition, because the majority of
                    dental clinics have preferences that still rely on manual
                    <br />
                    processes.
                  </p>
                  <p className="text-[#747AAF]">
                    We emphatically acknowledge their concerns, feeling that
                    digital systems may be <br />
                    confusing and overburdening their usual workflows. To bridge
                    this gap, our main focus <br />
                    is adapting their manual practices into a seamless digital
                    experience, ensuring that our user-friendly designs easily
                    align with manual existing processes.
                  </p>
                </div>
              </div>

              {/* Solutions */}
              <div className="flex flex-col font-sora gap-7">
                <p className="bold-text">The solutions</p>
                <div className=" flex flex-col text-[17px] gap-5">
                  <p className=" text-[#747AAF]">
                    Our solutions revolve around gaining an in-depth
                    understanding of dental medical <br />
                    activities, enabling us to create optimal designs for
                    Zendenta. Additionally, we strive to make the digital
                    transition as smooth as possible for dental clinics,
                    aligning our user- <br />
                    friendly designs with existing manual processes.
                  </p>
                  <p className="text-[#747AAF]">
                    Through this thoughtful and adaptive approach, we ensure
                    that Zendenta becomes a powerful tool to increase efficiency
                    and enhance the overall experience of patients and clinic
                    staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-max flex flex-col gap-7">
            <img src={pic2} alt="" className="" />
            <img src={pic3} alt="" className="" />
          </div>
        </div>

        {/* Streamlining Section */}
        <div className=" w-full h-max flex flex-col gap-24 pb-56">
          <div className="w-full flex flex-col md:items-start gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Streamlining clinic management.
            </p>
            <p className="small-light-text md:light-text md:text-base">
              The ultimate solution for effortless clinic management. Explore
              the smooth flow of appointment <br className="hidden md:flex" />
              scheduling, convenient bill payments, and meticulous appointment
              closure. We have an user-friendly <br />
              interface, clinics and patients can now experience optimized care
              and enhanced efficiency, ensuring a
              <br className="hidden md:flex" />
              seamless and hassle-free journey.
            </p>
          </div>
          <div className=" w-full h-max">
            <img src={pic4} alt="" className="" />
          </div>
        </div>

        {/* Refreshing Section */}
        <div className=" w-full h-max flex flex-col gap-24 pb-56">
          <div className="flex flex-col gap-3">
            <p className="small-bold-text md: bold-text">
              A refreshingly clean experience.
            </p>
            <p className=" small-light-text md:light-text md:text-base">
              A refreshing blend of carefully selected typefaces, modern icons,
              and a <br className=" hidden md:flex" />
              fresh medical-inspired color palette. Embrace efficient clinic
              <br /> management with a user-friendly interface that elevates
              satisfaction <br />
              through modern simplicity.
            </p>
          </div>
          <div className="w-full h-max flex flex-col gap-7">
            <img src={pic5} alt="" className="" />
            <div className=" w-full h-max flex gap-7">
              <img src={pic6} alt="" className=" w-[50%]" />
              <img src={pic7} alt="" className=" w-[50%]" />
            </div>
          </div>
        </div>

        {/* Simple & clean Section */}
        <div className="w-full h-max flex flex-col gap-24 pb-56">
          <div className="flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Simple & clean, <br />
              user-friendly design.
            </p>
            <p className=" small-light-text md:light-text md:text-base">
              A stunning showcase of modern, simple, and clean design that
              prioritizes user-friendliness. Experience
              <br className="hidden md:flex" />
              the effortless efficiency of clinic management through carefully
              crafted interfaces, intuitive navigation,
              <br className="hidden md:flex" />
              and a fresh, inviting user experience.
            </p>
          </div>
          <div className="w-full h-max flex flex-col gap-7">
            <img src={pic8} alt="" className="" />
            <div className=" w-full h-max flex gap-7">
              <img src={pic9} alt="" className=" w-[50%]" />
              <img src={pic10} alt="" className=" w-[50%]" />
            </div>
            <img src={pic11} alt="" className=" object-cover" />
          </div>
        </div>

        {/* Fast Section */}
        <div className="w-full h-max flex flex-col gap-24 pb-56">
          <div className="flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Fast and user-friendly <br />
              appointment scheduling.
            </p>
            <p className=" small-light-text md:light-text md:text-base">
              Discover the power of streamlined appointment scheduling with our
              Fast and User-Friendly feature. <br className="hidden md:flex" />
              Embrace a seamless journey as patients and clinic staff navigate a
              simple, intuitive interface designed to{" "}
              <br className="hidden md:flex" />
              optimize the scheduling process.
            </p>
          </div>
          <div className=" w-full h-max flex gap-7">
            <img src={pic12} alt="" className="w-[50%]" />
            <img src={pic13} alt="" className="w-[50%]" />
          </div>
        </div>

        {/* Scrollable Section */}
        <div className="w-full h-max flex flex-col-reverse lg:flex-row gap-24 pb-56">
          {/* Left Side */}
          <div className=" lg:w-[45%] h-max lg:h-96 overflow-scroll flex flex-col pb-10 gap-10 hide-scrollbar">
            {/* Step 1 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={framePic1} alt="" className="" />
              </div>
              <p className="small-light-text md:text-[#747198] md:text-[18px]">
                Step 1 - Treatment & dentist.
              </p>
            </div>

            {/* Step 2 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={framePic2} alt="" className="" />
              </div>
              <p className="small-light-text md:text-[#747198] md:text-[18px]">
                Step 2 - Basic information.
              </p>
            </div>

            {/* Step 3 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={framePic3} alt="" className="" />
              </div>
              <p className="small-light-text md:text-[#747198] md:text-[18px]">
                Step 3 - Oral hygeine habits.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className=" text-[18px] flex flex-col gap-7">
            <p className=" small-light-text md:light-text md:text-base">
              <span className="text-[#282560] font-semibold pr-2">
                Add patient to waitlist
              </span>
              ----- With just a click, clinic staff can
              <br className=" md:hidden lg:flex" /> effortlessly include
              patients in the waitlist,
              <br className="hidden md:flex lg:hidden" /> optimizing the patient
              <br className=" md:hidden lg:flex" />
              queue management.
            </p>
            <p className="small-light-text md:light-text md:text-base">
              Enjoy a user-friendly interface that empowers clinic staff to
              <br className=" md:hidden lg:flex" />
              efficiently handle waitlists, providing a
              <br className=" md:flex lg:hidden" />
              seamless experience for
              <br className=" md:hidden lg:flex" />
              both patients and staff.
            </p>
          </div>
        </div>

        <div className="w-full h-max flex flex-col gap-24 pb-56">
          <div className=" w-full h-max flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              4 steps to add medical <br />
              checkup data with ease.
            </p>
            <p className="small-light-text md:light-text md:text-base">
              Record essential information, treatment plans, oral check results,
              and <br className="hidden md:flex" /> agreements with ease.
              Elevate patient care wita user-friendly process,
              <br className="hidden md:flex" /> ensuring comprehensive
              andaccurate records.
            </p>
          </div>
          <div className=" w-full h-max flex flex-col md:flex-row gap-7">
            <img src={pic12} alt="" className="md:w-[50%]" />
            <img src={pic13} alt="" className="md:w-[50%]" />
          </div>
        </div>

        {/* Medical Records Section */}
        <div className="w-full h-max flex flex-col gap-24 pb-56">
          <div className=" w-full h-max flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Adding medical records & <br className="hidden md:flex" />
              finalizing treatment
            </p>
            <p className=" small-light-text md:light-text md:text-base">
              Streamline patient care with ease. Add medical records seamlessly
              and finalize treatments effortlessly. <br className=" hidden md:flex lg:hidden"/> Optimize your clinic's
              workflow for a smooth and comprehensive healthcare journey.
            </p>
          </div>
          <div className=" w-full h-max">
            <img src={videoPic1} alt="" className="" />
          </div>
        </div>

        {/* Scrollable Section 2 */}
        <div className="w-full h-max flex flex-col-reverse lg:flex-row gap-24 pb-52">
          <div className=" lg:w-[45%] h-max lg:h-96 overflow-scroll flex flex-col pb-10 gap-10 hide-scrollbar">
            {/* Step 1 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={framePic4} alt="" className="" />
              </div>
              <p className="small-light-text md:light-text md:text-base">
                Finish treatment for each patient.
              </p>
            </div>

            {/* Step 2 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={framePic5} alt="" className="" />
              </div>
              <p className="small-light-text md:light-text md:text-base">
                Set the component & medicine used.
              </p>
            </div>

            {/* Step 3 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={framePic6} alt="" className="" />
              </div>
              <p className="small-light-text md:light-text md:text-base">Set the medical record.</p>
            </div>
          </div>
          <div className=" text-[18px] flex flex-col gap-7">
            <p className=" small-light-text md:light-text md:text-base">
              <span className="text-[#282560] font-semibold pr-1">
                Finish treatment
              </span>
              <span className="">
                <span className="">-</span>
                <span className=" -ml-1">-</span>
                <span className=" -ml-1">-</span>
                <span className=" -ml-1">-</span>
                <span className=" -ml-1">- </span>
              </span>
              Efficiently plan patient care with personalized <br className="md:hidden lg:flex"/>
              recommendations and treatment <br className=" hidden md:flex lg:hidden"/>suggestions. Empower clinic <br className="md:hidden lg:flex"/>
              staff with user-friendly interfaces for informed decision-making.
            </p>
            <p className="small-light-text md:light-text md:text-base">
              Elevate your clinic's treatment management for lasting <br className="md:hidden lg:flex"/>
              relationships and improved health outcomes.
            </p>
          </div>
        </div>

        {/* Many Pics Section */}
        <div className=" w-full h-max flex flex-col gap-24 pb-52">
          <div className="flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">Simplified sales module.</p>
            <p className=" small-light-text md:light-text md:text-base">
              Where managing transactions becomes a breeze. Experience the ease
              of paying bills, efficient <br className=" hidden md:flex" />
              tracking of transactions, and seamless transfers between various
              accounts like free cash and <br className=" hidden md:flex" />
              treatment funds.
            </p>
          </div>

          <div className=" w-full h-max flex flex-col gap-7">
            <img src={mainPic1} alt="" className="" />
            <img src={mainPic2} alt="" className="" />
            <img src={mainPic3} alt="" className="" />
            <div className=" w-full h-max lg:h-[600px] flex flex-col lg:flex-row gap-7">
              <img src={mainPic4} alt="" className="lg:w-[50%]" />
              <img src={mainPic5} alt="" className="lg:w-[50%]" />
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className=" w-full h-max flex flex-col gap-24 pb-52">
          <div className="flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Organize transactions with <br className=" md:hidden"/>
              accounts.
            </p>
            <p className=" small-light-text md:light-text md:text-base">
              This is a pocket to give experience the ease of financial
              management. <br className=" hidden md:flex" />
              Effortlessly create designated pockets to collect and track money
              from <br className=" hidden md:flex" />
              all transactions & expenses. With a user-friendly interface,
              clinic staff <br className=" hidden md:flex" />
              can efficiently monitor and allocate funds with precision
            </p>
          </div>

          <div className=" w-full h-max flex flex-col gap-7">
            <img src={payPic1} alt="" className="" />
            <div className=" w-full h-max lg:h-[600px] flex flex-col lg:flex-row gap-7">
              <img src={payPic2} alt="" className="lg:w-[50%]" />
              <img src={payPic3} alt="" className="lg:w-[50%]" />
            </div>
          </div>
        </div>

        {/* Scrollable Section 3 */}
        <div className="w-full h-max flex flex-col lg:flex-row gap-24 pb-52">
          <div className=" text-[18px] flex flex-col gap-7">
            <p className="small-light-text md:light-text md:text-base">
              <span className="text-[#282560] font-semibold pr-1">
                Transfer money
              </span>
              <span className="">
                <span className="">-</span>
                <span className=" -ml-1">-</span>
                <span className=" -ml-1">-</span>
                <span className=" -ml-1">-</span>
                <span className=" -ml-1">- </span>
              </span>
              Effortlessly transfer funds between accounts. <br className=" md:hidden lg:flex"/>
              Empower users to securely move money <br className=" md:flex lg:hidden"/> from one account to <br className=" md:hidden lg:flex"/>
              another, streamlining financial transactions.
            </p>
          </div>

          <div className=" lg:w-[45%] h-max lg:h-96 overflow-scroll flex flex-col pb-10 gap-10 hide-scrollbar">
            {/* Step 1 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={transferPic1} alt="" className="" />
              </div>
              <p className="small-light-text md:light-text md:text-base">Detail account.</p>
            </div>

            {/* Step 2 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={transferPic2} alt="" className="" />
              </div>
              <p className="small-light-text md:light-text md:text-base">
                Transfer money to another account.
              </p>
            </div>

            {/* Step 3 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={transferPic3} alt="" className="" />
              </div>
              <p className="small-light-text md:light-text md:text-base">Confirm your transfer.</p>
            </div>

            {/* Step 4 */}
            <div className=" w-full h-max flex flex-col gap-5">
              <div className=" w-full h-max">
                <img src={transferPic4} alt="" className="" />
              </div>
              <p className="small-light-text md:light-text md:text-base">
                Embrace a hassle-free process that optimizes your <br className=" md:hidden lg:flex"/>
                clinic's financial management.
              </p>
            </div>
          </div>
        </div>

        {/* Customized Section */}
        <div className=" w-full h-max flex flex-col gap-10 pb-52">
          <div className="flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Create customized <br />
              treatment for your clinic.
            </p>
            <p className=" small-light-text md:light-text md:text-base">
              Our user-friendly interface optimizes the process, enabling clinic
              staff <br className="hidden md:flex" />
              to manage treatments effortlessly and provide patients with the
              best <br className="hidden md:flex" />
              possible care.
            </p>
          </div>

          <div className=" w-full h-max flex flex-col lg:flex-row gap-7">
            <img src={other1} alt="" className="lg:w-[50%]" />
            <img src={other2} alt="" className="lg:w-[50%]" />
          </div>
        </div>

        {/* Unified Section */}
        <div className=" w-full h-max flex flex-col gap-10 pb-52">
          <div className="flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Unified staff and inventory <br />
              management and more.
            </p>
            <p className="small-light-text md:light-text md:text-base">
              Enhance teamwork, productivity, and provide exceptional care with
              a <br className="hidden md:flex" />
              cohesive clinic environment
            </p>
          </div>
          <div className=" w-full h-max flex flex-col gap-5">
            <img src={largePic1} alt="" className="" />
            <img src={largePic2} alt="" className="" />
          </div>

          <div className=" w-full h-max flex flex-col lg:flex-row gap-5">
            <img src={largePic3} alt="" className="lg:w-[50%]" />
            <img src={largePic4} alt="" className="lg:w-[50%]" />
          </div>

          <img src={largePic5} alt="" className="" />
        </div>

        {/* Empowering Section*/}
        <div className=" w-full h-max flex flex-col gap-10 pb-52">
          <div className="flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Empowering patients <br />& dentists.
            </p>
            <p className="small-light-text md:light-text md:text-base">
              Dentist and patient experience optimized patient management,
              streamlined communication, and <br />
              increased clinic efficiency.
            </p>
          </div>
          <div className=" w-full h-max">
            <img src={empower1} alt="" className="" />
          </div>
        </div>

        {/* Ease Section */}
        <div className=" w-full h-max flex flex-col gap-10 pb-52">
          <div className="flex flex-col gap-3 md:gap-7">
            <p className="small-bold-text md: bold-text">
              Ease of patient monitoring <br />
              for dentists.
            </p>
            <p className="small-light-text md:light-text md:text-base">
              Dentists can monitor and analyze patient outcomes, ensuring <br className="md:hidden lg:flex"/>
              personalized <br className="md:flex lg:hidden"/>care and improved treatment outcomes.
            </p>
          </div>
          <div className=" w-full h-max">
            <img src={ease1} alt="" className="" />
          </div>
        </div>

        {/* Bottom Hero Section */}
        <div className="bg-white z-10">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-10 md:py-24 text-center shadow-2xl rounded-3xl sm:px-16">
              <h2 className="mx-auto text-[40px] md:text-[60px] font-medium tracking-tight leading-tight text-white">
                Interested in working <br />
                together?
              </h2>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-3xl bg-[#FBDC5E] px-5 py-2 text-[18px] text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-max flex flex-col">
          <div className="w-full h-max flex justify-between items-center pb-20">
            <p className=" bold-text">
              Want to see more? here’s our other{" "}
              <br className="hidden md:flex" />
              project
            </p>
            <div className=" w-max h-max hidden md:flex items-center gap-3 self-end">
              <p className="text-[#282560] font-[650] text-[18px] leading-tight">
                VIEW ALL OUR AWESOME PROJECTS
              </p>
              <div className=" w-max h-max p-1.5 border-[1.5px] rounded-2xl">
                <HiOutlineArrowRight />
              </div>
            </div>
          </div>

          {/* Arto */}
          <div className="w-full h-max flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[48%] h-max flex flex-col divide-y gap-10">
              <div className=""></div>
              <div className=" w-full h-max flex flex-col gap-5">
                <div className=" w-full flex justify-between items-center">
                  <img src={artoLogo} alt="" className=" w-32 h-24" />
                  <div className=" w-max h-max p-2 border-[1.5px] rounded-3xl -rotate-45">
                    <HiOutlineArrowRight size={19} />
                  </div>
                </div>
                <p className="text-[#747198] text-[19px]">
                  Arto Plus is all-in-one finance solution, enabling <br />
                  simple transactions like sending and requesting <br />
                  money.
                </p>
                <div className="border-btn">Finance</div>
              </div>
              <img src={artoPic} alt="" className="" />
            </div>
            <div className="lg:w-[48%] h-max flex flex-col divide-y gap-10">
              <div className=""></div>
              <div className=" w-full h-max flex flex-col gap-5">
                <div className=" w-full flex justify-between items-center">
                  <img src={chart} alt="" className=" w-80 h-24" />
                  <div className=" w-max h-max p-2 border-[1.5px] rounded-3xl -rotate-45">
                    <HiOutlineArrowRight size={19} />
                  </div>
                </div>
                <p className="text-[#747198] text-[19px]">
                  Get FREE 90+ stunning charts for your design. A <br />
                  curated collection of charts designed to elevate user <br />
                  interfaces.
                </p>
                <div className="border-btn">Free Resources</div>
              </div>
              <img src={chartPic} alt="" className="" />
            </div>
          </div>

          {/* Divide */}
          <div className=" w-full h-max pt-56 pb-40 flex flex-col divide-y">
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>

        {/* Footer */}
        <div className=" w-full h-max flex flex-col">
          {/* Footer Logo */}
          <div className=" w-full h-max -ml-9 pb-14">
            <img src={logo} alt="" className="w-[275px] h-20" />
          </div>

          <div className=" w-full h-max flex flex-col lg:flex-row justify-between">
            {/* Left Side */}
            <div className="w-max h-max flex flex-col gap-10 pb-7">
              <div className=" w-max h-max flex flex-col gap-5">
                <p className="text-[#282560] text-[45px] tracking-tighter leading-tight">
                  Transforming ideas into <br />
                  exceptional product.
                </p>
                <p className="light-text md:text-[20px]">
                  Feel free to reach out of if you want to collaborate with us.
                </p>
              </div>

              <div className=" w-max h-max flex items-center gap-3 bold-hover">
                <div className="text-[#282560] font-[650] text-[18px] leading-tight gap-2">
                  <p>LET'S COLLABORATE! </p>
                  <div className="transition-all duration-300"></div>
                </div>
                <button className="w-max h-max p-1.5 border-[1.5px] rounded-2xl">
                  <HiOutlineArrowRight />
                </button>
              </div>

              <div className=" w-max h-max flex flex-col gap-1">
                <p className="light-text text-[20px]">
                  Don’t like the forms? drop us a line via email
                </p>

                <p className="text-[20px] text-[#282560] font-medium underline">
                  hello@fikristudio.com
                </p>
              </div>

              <div className=" w-max h-max flex flex-col gap-5">
                <p className="light-text text-[14px]">
                  © Fikri Studio 2023. All right reserved
                </p>

                <p className="light-text text-[14px]">
                  Made with ♥️ from Indonesia
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-max h-max flex flex-col md:flex-row gap-20 pb-7">
              <div className=" w-max h-max flex flex-col gap-10">
                <p className="text-[#282560] font-[600] text-[18px] leading-tight gap-2 hover:underline cursor-pointer">
                  ADDRESS
                </p>
                <p className="text-[#282560]">
                  Kalisari Gg. H. AK. Ansori <br />
                  Blok D11, Kadisari, <br /> Sumampir, Kec. <br /> Purwokerto
                  Utara, 53127
                </p>
              </div>
              <div className=" w-max h-max flex flex-col gap-10">
                <p className="text-[#282560] font-[600] text-[18px] leading-tight gap-2 hover:underline cursor-pointer">
                  FOLLOW US
                </p>
                <div className="w-max h-max flex flex-col gap-4">
                  <p className="text-[#282560] hover:underline cursor-pointer">
                    LinkedIn
                  </p>
                  <p className="text-[#282560] hover:underline cursor-pointer">
                    Dribbble
                  </p>
                  <p className="text-[#282560] hover:underline cursor-pointer">
                    Behance
                  </p>
                  <p className="text-[#282560] hover:underline cursor-pointer">
                    Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
