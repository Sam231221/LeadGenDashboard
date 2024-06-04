import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { flexRender, Header } from "@tanstack/react-table";
import { Draggable } from "react-beautiful-dnd";
import { FaArrowDown, FaArrowUp, FaEllipsisVertical } from "react-icons/fa6";
import { Customer } from "../../types";

interface TableHeaderProps {
  header: Header<Customer, unknown>;
  index: number;
}

export const TableHeader = ({ header, index }: TableHeaderProps) => {
  const isPinned = header.column.getIsPinned();
  const isSorted = header.column.getIsSorted();

  return (
    <Draggable
      draggableId={header.id}
      key={header.id}
      index={index}
      isDragDisabled={!!isPinned}
    >
      {/*@ts-ignore */}
      {(provided, snapshot) => (
        <th
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={header.id}
          colSpan={header.colSpan}
          className={`${isPinned ? "bg-[var(--LinkHoverColor)]" : ""}`}
          style={{
            width: header.getSize(),
            position: "relative",
            ...provided.draggableProps.style,
            ...(snapshot.isDragging && {
              background: "gray",
            }),
          }}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaEllipsisVertical />}
              style={{
                position: "absolute",
                right: -1,
                top: 10,
                color: "black",
              }}
              className="menu"
              size="xs"
              colorScheme={"whiteAlpha"}
            />
            <Portal>
              <MenuList>
                {isPinned !== "right" && (
                  <MenuItem
                    onClick={() => header.column.pin("right")}
                    fontSize="sm"
                  >
                    Pin to Right
                  </MenuItem>
                )}
                {isPinned !== "left" && (
                  <MenuItem
                    onClick={() => header.column.pin("left")}
                    fontSize="sm"
                  >
                    Pin to Left
                  </MenuItem>
                )}
                {isPinned && (
                  <MenuItem
                    onClick={() => header.column.pin(false)}
                    fontSize="sm"
                  >
                    Unpin
                  </MenuItem>
                )}

                <MenuItem
                  onClick={header.column.getToggleSortingHandler()}
                  fontSize="sm"
                >
                  {isSorted === "desc" ? "Sort Asc" : "Sort Desc"}
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
          <Flex justifyContent={"center"} gap={1} alignItems="center">
            <Text fontSize="s">
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </Text>
            {isSorted && (
              <Box>
                {isSorted === "asc" && <FaArrowDown />}
                {isSorted === "desc" && <FaArrowUp />}
              </Box>
            )}
          </Flex>
        </th>
      )}
    </Draggable>
  );
};
