import React, { useEffect, useState } from "react";
import { BiCart, BiDotsHorizontal } from "react-icons/bi";
import { AreaChart2 } from "../components/AreaChart2";
import product1 from "../assets/images/product-1.jpg";
import { BudgetChart } from "../components/BudgetChart";
import WebTrafficChart from "../components/WebTrafficChart";
import { BsCurrencyDollar, BsPeople } from "react-icons/bs";
import axios from "axios";
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [topSalesProducts, setTopsellings] = useState([]);
  const getSales = async () => {
    const resp = await axios.get("http://localhost:5000/sales");
    setProducts(resp.data);
  };
  const getTopSelling = async () => {
    const resp = await axios.get("http://localhost:5000/top-selling");
    setTopsellings(resp.data);
  };
  useEffect(() => {
    getSales();
    getTopSelling();
  }, []);
  return (
    <div className="p-5">
      <div className="mb-5">
        <h2 className="text-[var(--sectionTitleColor)] font-semibold text-xl">
          Dashboard
        </h2>
        <p className="text-[var(--sectionMiniColor)] font-bold  text-xs">
          Home /{" "}
          <span className="text-[var(--sectionParagraphColor)]">Dashboard</span>
        </p>
      </div>

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-4 sm:col-span-2  lg:grid-cols-3">
          <div className="shadow-lg bg-[var(--primaryBgColor)] rounded col-span-4 sm:col-span-2 lg:col-span-1  p-5">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Sales |
                <span className="text-xs text-[var(--sectionMiniColor)]">
                  Today
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <div className="flex items-center mt-5">
              <span className="bg-[var(--secondaryBgColor)] w-[60px] h-[60px] p-4 rounded-full">
                <BiCart className="text-[var(--sectionParagraphColor)] text-2xl" />
              </span>
              <div className="flex ml-3 flex-col">
                <h2 className="text-2xl font-bold text-[var(--sectionParagraphColor)]">
                  145
                </h2>
                <span className="text-xs mt-2 font-bold text-green-600">
                  +12% <span className="text-forteryTextColor">increase</span>{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded col-span-4 sm:col-span-2 lg:col-span-1 p-5">
            <div className="flex justify-between  items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Revenue |
                <span className="text-xs text-[var(--sectionMiniColor)]">
                  This month
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <div className="flex items-center mt-5">
              <span className=" bg-[var(--secondaryBgColor)] w-[60px] h-[60px] p-4 rounded-full">
                <BsCurrencyDollar className="text-[var(--sectionTitleColor)] text-2xl" />
              </span>
              <div className="flex ml-3 flex-col">
                <h2 className="text-2xl font-bold text-[var(--sectionParagraphColor)]">
                  $3,455
                </h2>
                <span className="text-xs mt-2 font-bold text-green-600">
                  +8% <span className="text-forteryTextColor">increase</span>{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded col-span-4 sm:col-span-4 lg:col-span-1 p-5">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Customers |
                <span className="text-xs text-[var(--sectionMiniColor)]">
                  This month
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <div className="flex items-center mt-5">
              <span className=" bg-[var(--secondaryBgColor)] w-[60px] h-[60px] p-4 rounded-full">
                <BsPeople className="text-[var(--sectionTitleColor)] text-2xl" />
              </span>
              <div className="flex ml-3 flex-col">
                <h2 className="text-2xl font-bold text-[var(--sectionParagraphColor)]">
                  1244
                </h2>
                <span className="text-xs mt-2  font-bold text-red-600">
                  -12% <span className="text-forteryTextColor">decrease</span>{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded col-span-4  p-5">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Reports{" "}
                <span className="text-xs text-[var(--sectionMiniColor)]">
                  | Today
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniolor)]" />
            </div>
            <AreaChart2 />
          </div>

          {/* recent sales */}
          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded col-span-4 p-5">
            <div className="flex  justify-between items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Recent Sales |{" "}
                <span className="text-xs text-[var(--sectionParagraphColor)]">
                  Today
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <div className="sm:flex  items-center justify-between mt-2">
              <div className="text-xs">
                <select
                  className="bg-[var(--secondaryBgColor)] text-[var(--primaryParagraphColor)] focus:outline-none border-[1px] focus:border-secondaryTextColor"
                  name=""
                  id=""
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <span className="ml-1">entries per page</span>
              </div>

              <div className="mt-3 sm:mt-0">
                <input
                  type="text"
                  className="border-[1px] bg-[var(--secondaryBgColor)] text-[var(--primaryParagraphColor)]  text-xs focus:outline-none
                                focus:border-[var(--sectionTitleColor)] 
                                border-[var(--sectionParagraphColor)]  py-2 px-3"
                  placeholder="Search here..."
                />
              </div>
            </div>

            <div className="py-2 overflow-y-auto">
              <table className=" table border-collapse w-full mt-4 mb-2">
                <thead className="bg-[var(--ternaryBgColor)] text-[var(--primaryParagraphColor)] font-medium">
                  <tr>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      S.N
                    </th>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Customer
                    </th>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Product
                    </th>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Price
                    </th>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr key={i + 1}>
                      <td className="p-2 text-xs text-gray-700">
                        <a
                          className="text-[var(--sectionParagraphColor)] hover:text-[var(--sectionTitleColor)]"
                          href="#"
                        >
                          {product.id}
                        </a>
                      </td>
                      <td className="p-2 text-xs text-gray-700">
                        {product.customer}
                      </td>
                      <td className="p-2 text-xs text-gray-700">
                        <a
                          className="text-[var(--sectionParagraphColor)] hover:text-[var(--sectionTitleColor)]"
                          href="#"
                        >
                          {product.product}
                        </a>
                      </td>
                      <td className="p-2 text-xs text-gray-700">
                        ${product.price}
                      </td>
                      <td className="p-2 text-xs text-gray-700">
                        {product.method}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs p-2 border-[var(--secondaryBgColor)] border-t-2">
                Showing 1 to 5 of 5 entries
              </p>
            </div>
          </div>
          {/* Top Selling */}
          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded col-span-4 p-5">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Top Selling |{" "}
                <span className="text-xs text-[var(--sectionParagraphColor)]">
                  Today
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <div className="py-2 overflow-y-auto">
              <table className="table border-collapse w-full mt-4 mb-2">
                <thead className="bg-[var(--ternaryBgColor)] text-[var(--primaryParagraphColor)]">
                  <tr>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Preview
                    </th>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Product
                    </th>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Price
                    </th>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Sold
                    </th>
                    <th className="p-2 text-xs font-semibold tracking-wide text-left">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topSalesProducts.map((product, i) => (
                    <tr key={i + 1}>
                      <td className="p-2 text-xs text-gray-700">
                        <a href="#">
                          <img
                            src={product.img}
                            className="object-contain w-10 h-10"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="p-2 text-xs text-gray-700">
                        {product.product}
                      </td>
                      <td className="p-2 text-xs text-gray-700">
                        <a
                          className="text-[var(--sectionParagraphColor)] hover:text-[var(--sectionTitleColor)]"
                          href="#"
                        >
                          ${product.price}
                        </a>
                      </td>
                      <td className="p-2 text-xs text-gray-700">
                        {product.sold}
                      </td>
                      <td className="p-2 text-xs text-gray-700">
                        ${product.revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs p-2 border-[var(--secondaryBgColor)] border-t-2">
                Showing 1 to 3 of 3 entries
              </p>
            </div>
          </div>
        </div>

        <div className="gap-3 col-span-3 md:col-span-4 lg:col-span-1 ">
          {/* Recent Activity */}
          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded p-5">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Recent Activity |{" "}
                <span className="text-xs text-[var(--sectionParagraphColor)]">
                  Today
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <div className="mt-5">
              <div className="text-xs flex gap-3 justify-between ">
                <div className="text-forteryTextColor relative activity-time pb-4">
                  {" "}
                  32min
                </div>
                <div className="w-3 h-3 z-[2] shrink-0  bg-green-500 rounded-full"></div>

                <p className="pb-4 text-[var(--secondaryParagraphColor)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, consequuntur.
                </p>
              </div>

              <div className="text-xs flex gap-3 justify-between ">
                <div className="text-forteryTextColor relative activity-time pb-4">
                  {" "}
                  32min
                </div>
                <div className="w-3 h-3 z-[2]  shrink-0  bg-sky-500 rounded-full"></div>

                <p className="pb-4 text-[var(--secondaryParagraphColor)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, consequuntur.
                </p>
              </div>

              <div className="text-xs flex gap-3 justify-between ">
                <div className="text-forteryTextColor relative activity-time pb-4">
                  {" "}
                  32min
                </div>
                <div className="w-3 h-3 z-[2]  shrink-0  bg-red-500 rounded-full"></div>

                <p className="pb-4 text-[var(--secondaryParagraphColor)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, consequuntur.
                </p>
              </div>

              <div className="text-xs flex gap-3 justify-between ">
                <div className="text-forteryTextColor relative activity-time pb-4">
                  {" "}
                  32min
                </div>
                <div className="w-3 h-3 z-[2]  shrink-0  bg-yellow-500 rounded-full"></div>

                <p className="pb-4 text-[var(--secondaryParagraphColor)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, consequuntur.
                </p>
              </div>

              <div className="text-xs flex gap-3 justify-between ">
                <div className="text-forteryTextColor relative activity-time pb-4">
                  {" "}
                  32min
                </div>
                <div className="w-3 h-3 z-[2]  shrink-0  bg-green-500 rounded-full"></div>

                <p className="pb-4 text-[var(--secondaryParagraphColor)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, consequuntur.
                </p>
              </div>
            </div>
          </div>

          {/* Budget Report */}
          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded p-5 mt-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Budegt Report |{" "}
                <span className="text-xs text-[var(--sectionParagraphColor)]">
                  This month
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <BudgetChart />
          </div>

          {/* WebTraffic Report */}
          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded p-5 mt-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                Wesbite Traffic |{" "}
                <span className="text-xs text-[var(--sectionParagraphColor)]">
                  This month
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <WebTrafficChart />
          </div>

          {/* News */}
          <div className="shadow-lg  bg-[var(--primaryBgColor)] rounded p-5 mt-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
                News & Updates |{" "}
                <span className="text-xs text-[var(--sectionParagraphColor)]">
                  This month
                </span>
              </h2>
              <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
            </div>

            <div className="mt-5">
              <div className="text-xs flex gap-3 justify-between ">
                <div className="text-forteryTextColor relative activity-time">
                  {" "}
                  32min
                </div>
                <div className="z-10 bg-green-500 rounded-full"></div>

                <p className="text-[var(--secondaryParagraphColor)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, consequuntur.
                </p>
              </div>
              <div className="text-xs flex gap-3 justify-between">
                <div className="text-forteryTextColor relative activity-time">
                  {" "}
                  32min
                </div>
                <div className=" z-10 bg-green-500 rounded-full"></div>

                <p className="text-[var(--secondaryParagraphColor)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
