import { supabase } from "../supabase";

// Fetch customers
export const fetchCustomers = async () => {
  const { data, error } = await supabase.from("customers").select("*");
  if (error) throw error;
  return data;
};

// Add new customer
export const addCustomer = async (customer) => {
  const { error } = await supabase.from("customers").insert([customer]);
  if (error) throw error;
};

// Update customer
export const updateCustomer = async (id, customer) => {
  const { error } = await supabase
    .from("customers")
    .update(customer)
    .eq("id", id);
  if (error) throw error;
};

// Delete customer
export const deleteCustomer = async (id) => {
  const { error } = await supabase.from("customers").delete().eq("id", id);
  if (error) throw error;
};
