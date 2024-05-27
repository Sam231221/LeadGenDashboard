import React from "react";
import WebTrafficChart from "../components/WebTrafficChart";
import { BudgetChart } from "../components/BudgetChart";
import { BiDotsHorizontal } from "react-icons/bi";
import Line2Chart from "../components/Line2Chart";
import BarChart from "../components/BarCharts";

const Reports = () => {
  return (
    <div className="p-5">
      <div className="mb-5">
        <h2 className="text-[var(--sectionTitleColor)] font-semibold text-xl">
          Reports
        </h2>
        <p className="text-[var(--sectionMiniColor)] font-bold  text-xs">
          Home /{" "}
          <span className="text-[var(--sectionParagraphColor)] ">Reports</span>
        </p>
      </div>

      <div className="grid gap-3 grid-col-1 sm:grid-cols-2">
        <div className="shadow-lg bg-[var(--primaryBgColor)] rounded p-3">
          <div className="flex  justify-between items-center">
            <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
              Product Reviews |{" "}
              <span className="text-xs text-[var(--sectionParagraphColor)]">
                This month
              </span>
            </h2>
            <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
          </div>
          <Line2Chart />
        </div>

        <div className="shadow-lg bg-[var(--primaryBgColor)] rounded p-3">
          <div className="flex  justify-between items-center">
            <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
              Website Traffic |{" "}
              <span className="text-xs text-[var(--sectionParagraphColor)]">
                This month
              </span>
            </h2>
            <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
          </div>
          <BarChart />
        </div>

        <div className="shadow-lg bg-[var(--primaryBgColor)] rounded p-3">
          <div className="flex  justify-between items-center">
            <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
              Recent Sales |{" "}
              <span className="text-xs text-[var(--sectionParagraphColor)]">
                This month
              </span>
            </h2>
            <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
          </div>
          <WebTrafficChart />
        </div>

        <div className="shadow-lg bg-[var(--primaryBgColor)] rounded p-3">
          <div className="flex  justify-between items-center">
            <h2 className="font-semibold text-[var(--sectionParagraphColor)] text-lg">
              Budgets |{" "}
              <span className="text-xs text-[var(--sectionParagraphColor)]">
                This month
              </span>
            </h2>
            <BiDotsHorizontal className="text-[var(--sectionMiniColor)]" />
          </div>
          <BudgetChart />
        </div>
      </div>
    </div>
  );
};
export default Reports;
