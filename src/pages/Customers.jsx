import React, { useEffect, useState } from "react";
import { BiDotsHorizontal } from "react-icons/bi";

import axios from "axios";
import { Pagination } from "../components/Pagination";
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [query, setQuery] = useState("");

  const [sortedvalue, setSortedValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  let pageLimit = 10;

  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");

  const sortOptions = ["name", "address", "email", "phone", "status"];

  const loadCustomerData = async (
    start,
    end,
    increase,
    opType = null,
    filterOrSortValue
  ) => {
    switch (opType) {
      case "search":
        setOperation(opType);
        //since we are not sorting in search case
        setSortedValue("");
        return await axios
          .get(
            `http://localhost:5000/customers?q=${query}&_start=${start}&_end=${end}`
          )
          //0 to 3
          .then((response) => {
            setCustomers(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));

      case "sort":
        setOperation(opType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `http://localhost:5000/customers?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setCustomers(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));

      case "filter":
        setOperation(opType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `http://localhost:5000/customers?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            console.log("re->", response.data);
            setCustomers(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));

      default:
        return await axios
          .get(`http://localhost:5000/customers?_start=${start}&_end=${end}`)
          //0 to 3
          .then((response) => {
            console.log("users->", response.data.length);
            setCustomers(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
    console.log(query);
    loadCustomerData(0, pageLimit, 0, "search");
  };

  const handleReset = () => {
    //reset the input value
    setOperation("");
    setQuery("");
    setSortFilterValue("");
    setSortedValue("");
    loadCustomerData(0, pageLimit, 0);
  };

  const handleSort = async (e) => {
    let beSorted = e.target.value;
    setSortedValue(beSorted);
    loadCustomerData(0, pageLimit, 0, "sort", beSorted);
  };

  const handleFilter = async (e) => {
    console.log(typeof e.target.value);
    if (!e.target.value == "") {
      loadCustomerData(0, pageLimit, 0, "filter", e.target.value);
    }
    if (e.target.value == "") {
      loadCustomerData(0, pageLimit, 0);
    }
  };

  useEffect(() => {
    loadCustomerData(0, pageLimit, 0);
  }, []);

  return (
    <div className="p-5">
      <div className="mb-5">
        <h2 className="text-primaryTextColor font-semibold text-xl">
          Customers
        </h2>
        <p className="text-ternaryTextColor font-bold  text-xs">
          Home / <span className="text-forteryTextColor ">Customers</span>
        </p>
      </div>
      <div className="shadow-lg bg-white rounded p-2">
        <div className="flex gap-3 flex-col md:flex-row md:mt-2 items-center justify-between ">
          <div className="text-xs flex items-center gap-3">
            <span className="ml-1">Filter By Status:</span>
            <select
              onChange={(e) => handleFilter(e)}
              className=" focus:outline-none border-[1px] focus:border-secondaryTextColor"
            >
              <option value="">----</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Search Engine */}
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e)}
              className="border-[1px] text-xs focus:outline-none
                                focus:border-secondaryTextColor 
                                border-primaryTextColor  py-2 px-3"
              placeholder="Search here..."
            />
          </div>
        </div>

        <div className="py-2 overflow-y-auto">
          <table className="table border w-full mt-4 mb-2">
            <thead className="bg-secondaryBgColor ">
              <tr>
                <th className="p-2 text-sm font-semibold tracking-wide text-left">
                  S.N
                </th>
                <th className="p-2 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-2 text-sm font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="p-2 text-sm font-semibold tracking-wide text-left">
                  Phone
                </th>
                <th className="p-2 text-sm font-semibold tracking-wide text-left">
                  Address
                </th>
                <th className="p-2 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, i) => (
                <tr key={i + 1}>
                  <td className="p-2 text-sm text-gray-700">
                    <a
                      className="text-primaryTextColor hover:text-secondaryTextColor"
                      href="#"
                    >
                      {customer.id}
                    </a>
                  </td>
                  <td className="p-2 text-sm text-gray-700">{customer.name}</td>

                  <td className="p-2 text-sm text-gray-700">
                    {customer.email}
                  </td>
                  <td className="p-2 text-sm text-gray-700">
                    {customer.phone}
                  </td>
                  <td className="p-2 text-sm text-gray-700">
                    {customer.address}
                  </td>
                  <td className="p-2 text-xs">
                    <span
                      className={`${
                        customer.status == "Inactive"
                          ? "text-red-600"
                          : "text-green-500"
                      } bg-secondaryBgColor font-bold rounded-full py-1 px-2`}
                    >
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            data={customers}
            currentPage={currentPage}
            pageLimit={pageLimit}
            operation={operation}
            sortFilterValue={sortFilterValue}
            loadUserData={loadCustomerData}
          />
        </div>
      </div>
    </div>
  );
};
export default Customers;
