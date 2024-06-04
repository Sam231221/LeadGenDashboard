import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Customer } from "../../types";
import { Box, Flex, Input } from "@chakra-ui/react";

import { useTableData } from "./useTableData";
import { TableHeader } from "./TableHeader";
import { fuzzyFilter, reorder } from "./Table.utils";
import Pagination from "./Pagination";
import RowDetailView from "./RowDetailView";
import { ColumnVisibilitySelector } from "./ColumnVisibilitySelector";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Table() {
  const { columns, data, initialColumnVisibility, columnIds } = useTableData();

  const table = useReactTable<Customer>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),

    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,

    getPaginationRowModel: getPaginationRowModel(),

    enableRowSelection: true,
    getRowCanExpand: () => true,

    initialState: {
      columnVisibility: initialColumnVisibility,
      columnOrder: columnIds,
    },
  });

  return (
    <div className="flex w-full">
      <div className="flex h-screen flex-col">
        <Flex alignItems={"center"}>
          <ColumnVisibilitySelector table={table} columnIds={columnIds} />
          <Input
            ml={2}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
            width="300px"
            placeholder="Search..."
          />
        </Flex>

        <Box flex="1" overflow="auto">
          <table className="overflow-auto w-full border border-[var(--ternaryBgColor)] mt-3 text-sm">
            <DragDropContext
              onDragEnd={({ destination, source }) => {
                if (!destination) {
                  return;
                }

                const items = reorder(
                  table.getState().columnOrder,
                  source.index,
                  destination.index
                );

                table.setColumnOrder(items);
              }}
            >
              <thead className="sticky top-0 z-[2] bg-[var(--ternaryBgColor)] text-[var(--primaryHeadingColor)]">
                {table.getHeaderGroups().map((headerGroup, index) => (
                  <Droppable
                    droppableId="header"
                    direction="horizontal"
                    type="column"
                  >
                    {/*@ts-ignore */}
                    {(provided) => (
                      <tr
                        key={headerGroup.id}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {headerGroup.headers.map((header, index) => (
                          <TableHeader header={header} index={index} />
                        ))}
                        {provided.placeholder}
                      </tr>
                    )}
                  </Droppable>
                ))}
              </thead>
            </DragDropContext>

            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <>
                    <tr
                      key={row.id}
                      className={`${
                        row.getIsSelected()
                          ? "bg-[var(--LinkHoverColor)] text-white"
                          : ""
                      }`}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>

                    {row.getIsExpanded() && (
                      <tr>
                        <td colSpan={row.getVisibleCells().length}>
                          <RowDetailView user={row.original} />
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>

            <tfoot>
              {table.getFooterGroups().map((footerGroup) => {
                return (
                  <tr>
                    {footerGroup.headers.map((footer) => {
                      return (
                        <td>
                          {footer.isPlaceholder
                            ? null
                            : flexRender(
                                footer.column.columnDef.footer,
                                footer.getContext()
                              )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tfoot>
          </table>
        </Box>
        <Box>
          <Pagination table={table} />
        </Box>
      </div>
    </div>
  );
}
