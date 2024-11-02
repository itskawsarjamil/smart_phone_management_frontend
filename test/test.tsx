import React, { useState } from "react";

// import "./testStyles.css";
// const Test = () => {
//   const sectionStyle = {
//     width: "100%",
//     height: "28.125rem",
//     backgroundImage: `linear-gradient(rgba(0, 21, 91, 0.63), rgba(0, 4, 108, 0.423)), url(https://i.ibb.co/h7DVxKy/pexels-tam-s-m-sz-ros-12064.jpg)`,
//     backgroundAttachment: "fixed",
//     backgroundPosition: "0 71.9125px",
//     padding: "4.37rem 0",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     paddingTop: "100px",
//     // Other styles you commented out
//     // textAlign: 'center',
//     // marginBottom: '20px',
//   };
//   return (
//     <div className="banner-text text-white mt-4 " style={sectionStyle}>
//       <div className="text-center  max-w-[1440px] m-auto">
//         <div className="row margin">
//           <h1 className="text-light text-5xl   p-5 ">University Libarary </h1>
//           <p className="text-[18px] pt-4">
//             The doctors and staff of our hospital have been running this
//             hospital for many years and we are giving good
//             <br /> treatment to everyone . Come to our hospital and get good
//             treatment.This is our goal.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterPriceFrom, setFilterPriceFrom] = useState<string>("");
  const [filterPriceTo, setFilterPriceTo] = useState<string>("");
  const [filterBloomdateFrom, setFilterBloomdateFrom] = useState<string>("");
  const [filterBloomdateTo, setfilterBloomdateTo] = useState<string>("");
  const [filterByColor, setFilterByColor] = useState<string>("");
  const [filterByType, setFilterByType] = useState<string>("");
  const [filterBySize, setFilterBySize] = useState<string>("");
  const [filterByFragrance, setFilterByFragrance] = useState<string>("");
  const [filterByArrangementStyle, setFilterByArrangementStyle] =
    useState<string>("");
  const [filterByOccasion, setFilterByOccasion] = useState<string>("");
  const [deleteContainer, setDeleteContainer] = useState([] as string[]);
  const [isMultipleDeleteActive, setIsMultipleDeleteActive] = useState(false);

  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-md font-semibold text-center">
                  Filter Products !
                </h3>
                <button
                  className="text-2xl text-red-300 hover:text-red-700 hover:transition-all duration-300 ease-in-out"
                  onClick={() => setShowModal(!showModal)}
                >
                  <RxCross2 />
                </button>
              </div>
              {/*body*/}
              <form className="py-6 px-10">
                <div className="grid gap-4 grid-cols-2 sm:gap-x-6 sm:gap-y-4">
                  {/* price */}
                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium "
                    >
                      Minimum Price
                    </label>

                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600  focus:outline-none"
                      placeholder="e.g. 100"
                      value={filterPriceFrom}
                      min={1}
                      onChange={(e) => setFilterPriceFrom(e.target.value)}
                    />
                  </div>
                  <div className="full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium "
                    >
                      Maximum Price
                    </label>

                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600  focus:outline-none"
                      placeholder="e.g. 100"
                      value={filterPriceTo}
                      min={1}
                      onChange={(e) => setFilterPriceTo(e.target.value)}
                    />
                  </div>
                  {/* bloom date */}
                  <div className="w-full">
                    <label
                      htmlFor="bloomdate"
                      className="block mb-2 text-sm font-medium "
                    >
                      Bloom Date From
                    </label>

                    <input
                      type="date"
                      name="bloomdate"
                      id="bloomdate"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600  focus:outline-none"
                      placeholder="e.g. January 28, 2024"
                      value={filterBloomdateFrom}
                      onChange={(e) => setFilterBloomdateFrom(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="bloomdate"
                      className="block mb-2 text-sm font-medium "
                    >
                      Bloom Date To
                    </label>

                    <input
                      type="date"
                      name="bloomdate"
                      id="bloomdate"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600  focus:outline-none"
                      placeholder="e.g. January 28, 2024"
                      value={filterBloomdateTo}
                      onChange={(e) => setfilterBloomdateTo(e.target.value)}
                    />
                  </div>
                  {/* color */}
                  <div className="w-full">
                    <label
                      htmlFor="type"
                      className="block mb-2 text-sm font-medium"
                    >
                      Color
                    </label>
                    <select
                      id="color"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600 focus:outline-none"
                      value={filterByColor}
                      onChange={(e) => setFilterByColor(e.target.value)}
                    >
                      <option value="red">Red</option>
                      <option value="yellow">Yellow</option>
                      <option value="blue">Blue</option>
                      <option value="white">White</option>
                      <option value="black">Black</option>
                    </select>
                  </div>
                  {/* type */}
                  <div className="w-full">
                    <label
                      htmlFor="type"
                      className="block mb-2 text-sm font-medium"
                    >
                      Type
                    </label>
                    <select
                      id="type"
                      value={filterByType}
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600 focus:outline-none"
                      onChange={(e) => setFilterByType(e.target.value)}
                    >
                      <option value="rose">Rose</option>
                      <option value="lily">Lily</option>
                      <option value="tulip">Tulip</option>
                      <option value="orchid">Orchid</option>
                      <option value="daisy">Daisy</option>
                      <option value="sunflower">Sunflower</option>
                      <option value="carnation">Carnation</option>
                      <option value="dahlia">Dahlia</option>
                      <option value="lavender">Lavender</option>
                    </select>
                  </div>
                  {/* size */}
                  <div className="w-full">
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium"
                    >
                      Size
                    </label>
                    <select
                      id="size"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600 focus:outline-none"
                      value={filterBySize}
                      onChange={(e) => setFilterBySize(e.target.value)}
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                  {/* fragrance */}
                  <div className="w-full">
                    <label
                      htmlFor="type"
                      className="block mb-2 text-sm font-medium"
                    >
                      Fragrance
                    </label>
                    <select
                      id="fragrance"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600 focus:outline-none"
                      value={filterByFragrance}
                      onChange={(e) => setFilterByFragrance(e.target.value)}
                    >
                      <option value="none">None</option>
                      <option value="sweet">Sweet</option>
                      <option value="soft">Soft</option>
                      <option value="strong">Strong</option>
                    </select>
                  </div>
                  {/* arrangement style */}
                  <div className="w-full hidden lg:block">
                    <label
                      htmlFor="arrangementstyle"
                      className="block mb-2 text-sm font-medium"
                    >
                      Arrangement Style
                    </label>
                    <select
                      id="arrangementstyle"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600 focus:outline-none"
                      value={filterByArrangementStyle}
                      onChange={(e) =>
                        setFilterByArrangementStyle(e.target.value)
                      }
                    >
                      <option value="single">Single</option>
                      <option value="bouquet">Bouquet</option>
                      <option value="basket">Basket</option>
                      <option value="vase">Vase</option>
                    </select>
                  </div>
                  {/* occasion */}
                  <div className="w-full hidden lg:block">
                    <label
                      htmlFor="occasion"
                      className="block mb-2 text-sm font-medium"
                    >
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600 focus:outline-none"
                      value={filterByOccasion}
                      onChange={(e) => setFilterByOccasion(e.target.value)}
                    >
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="wedding">Wedding</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black transition-all duration-300"></div>
      </>
    </>
  );
};

export default Test;
