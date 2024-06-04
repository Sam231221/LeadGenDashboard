import { CustomerTable } from "../components/CustomerTable";
const Customers = () => {
  return (
    <div className="p-5">
      <div className="mb-5">
        <h2 className="text-[var(--sectionTitleColor)] font-semibold text-xl">
          Customers
        </h2>
        <p className="text-[var(--sectionMiniColor)] font-bold  text-xs">
          Home /{" "}
          <span className="text-[var(--sectionParagraphColor)] ">
            Customers
          </span>
        </p>
      </div>
      <div className="shadow-lg bg-[var(--primaryBgColor)] rounded p-2">
        <CustomerTable />
      </div>
    </div>
  );
};
export default Customers;
