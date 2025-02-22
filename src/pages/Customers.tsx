import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  fetchCustomers,
  deleteCustomer,
  addCustomer,
} from "../lib/api/customerApi";
import { Dialog } from "@headlessui/react";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getData = async () => setCustomers(await fetchCustomers());
    getData();
  }, []);

  // Table columns
  const columns = [
    { accessorKey: "id", header: "ID", cell: (row) => row.original?.id },
    {
      accessorKey: "avatarurl",
      header: "Avatar",
      cell: (row) =>
        row.original?.avatarurl ? (
          <img
            src={row.original.avatarurl}
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          "No Avatar"
        ),
    },
    { accessorKey: "name", header: "Name", cell: (row) => row.original?.name },
    {
      accessorKey: "email",
      header: "Email",
      cell: (row) => row.original?.email,
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: (row) => row.original?.phone,
    },
    {
      accessorKey: "company",
      header: "Company",
      cell: (row) => row.original?.company,
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: (row) => row.original?.country,
    },
    {
      id: "actions",
      header: "Actions",
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/customer/${row.original.id}`)}
            className="text-blue-500"
          >
            Edit
          </button>
          <button
            onClick={() => openDeleteModal(row.original)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  // Open delete modal
  const openDeleteModal = (customer) => {
    setSelectedCustomer(customer);
    setDeleteModalOpen(true);
    reset({ confirmName: "" }); // Reset the form when opening the modal
  };

  // Handle delete customer
  const onConfirmDelete = async (data) => {
    console.log("dappppp:", data);
    if (data.confirmName === selectedCustomer?.name) {
      await deleteCustomer(selectedCustomer.id);
      setCustomers(customers.filter((c) => c.id !== selectedCustomer.id));
      setDeleteModalOpen(false);
      reset(); // Reset the form after deletion
    }
  };
  function excludeConfirmName(data) {
    if (typeof data !== "object" || data === null) {
      return data; // Handle cases where input is not an object
    }

    const { confirmName, ...rest } = data; // Destructure and exclude confirmName
    return rest;
  }
  // Handle add customer
  const onAddCustomer = async (data) => {
    const newData = excludeConfirmName(data);
    const newCustomer = await addCustomer(newData);
    setCustomers([...customers, newCustomer]);
    setAddModalOpen(false);
    reset();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Customers</h1>
      <button
        onClick={() => setAddModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Customer
      </button>

      {/* Customers Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {columns.map((col) => (
                <th
                  key={col.accessorKey || col.id}
                  className="border px-4 py-2"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 &&
              customers.map((row) => (
                <tr key={row?.id} className="border">
                  {columns.map((col) => (
                    <td
                      key={col.accessorKey || col.id}
                      className="border px-4 py-2"
                    >
                      {col.cell({ original: row })}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Dialog
        open={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-bold">Add Customer</h2>
          <form onSubmit={handleSubmit(onAddCustomer)}>
            <input
              {...register("name", { required: "Name is required" })}
              className="border p-2 w-full mt-2"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <input
              {...register("email", { required: "Email is required" })}
              className="border p-2 w-full mt-2"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              {...register("phone")}
              className="border p-2 w-full mt-2"
              placeholder="Phone"
            />
            <input
              {...register("company")}
              className="border p-2 w-full mt-2"
              placeholder="Company"
            />
            <input
              {...register("country")}
              className="border p-2 w-full mt-2"
              placeholder="Country"
            />

            <input
              {...register("avatarurl")}
              className="border p-2 w-full mt-2"
              placeholder="Avatar"
            />

            <button
              type="submit"
              className={`mt-4 px-4 py-2 bg-green-600 text-white rounded `}
            >
              Add Customer
            </button>
            <button
              type="button"
              onClick={() => setAddModalOpen(false)}
              className="ml-2 px-4 py-2 bg-gray-400 text-white rounded"
            >
              Close
            </button>
          </form>
        </div>
      </Dialog>

      <Dialog
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-bold">Delete Customer</h2>
          <form onSubmit={handleSubmit(onConfirmDelete)}>
            <input
              {...register("confirmName", { required: "Name is required" })}
              placeholder="Enter customer name to delete"
              className="border px-3 py-2 w-full"
            />
            {errors.confirmName && (
              <p className="text-red-500">{errors.confirmName.message}</p>
            )}

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              disabled={watch("confirmName") !== selectedCustomer?.name}
            >
              Confirm Delete
            </button>
            <button
              type="button"
              onClick={() => setDeleteModalOpen(false)}
              className="ml-2 px-4 py-2 bg-gray-400 text-white rounded"
            >
              Close
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default CustomersList;
