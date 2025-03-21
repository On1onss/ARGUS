'use client'

// src/data-table.tsx
import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender
} from "@tanstack/react-table";
import {
  chakra,
  forwardRef as forwardRef2,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox
} from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";
import { ChevronDownIcon, ChevronUpIcon, Link } from "@saas-ui/core";
import { jsx, jsxs } from "react/jsx-runtime";
var DataTable = React.forwardRef(
  (props, ref) => {
    const {
      instanceRef,
      columns,
      isSortable,
      isSelectable,
      onSelectedRowsChange,
      onSortChange,
      colorScheme,
      size,
      variant,
      className,
      sx,
      ...rest
    } = props;
    const instance = useReactTable({
      columns: React.useMemo(() => {
        return getSelectionColumn(isSelectable).concat(
          columns == null ? void 0 : columns.map((column) => {
            if (!column.accessorKey) {
              column.accessorKey = column.accessor || column.id;
            }
            if (!column.header && column.Header) {
              column.header = column.Header;
            }
            if (!column.cell && column.Cell) {
              column.cell = column.Cell;
            } else if (!column.cell) {
              column.cell = DataTableCell;
            }
            return column;
          })
        );
      }, []),
      enableRowSelection: isSelectable,
      getSortedRowModel: isSortable ? getSortedRowModel() : void 0,
      ...rest,
      getCoreRowModel: getCoreRowModel()
    });
    React.useImperativeHandle(instanceRef, () => instance, [instanceRef]);
    const state = instance.getState();
    React.useEffect(() => {
      onSelectedRowsChange == null ? void 0 : onSelectedRowsChange(Object.keys(state.rowSelection));
    }, [onSelectedRowsChange, state.rowSelection, instance]);
    React.useEffect(() => {
      onSortChange == null ? void 0 : onSortChange(state.sorting);
    }, [onSortChange, state.sorting]);
    return /* @__PURE__ */ jsxs(
      Table,
      {
        ref,
        sx: { "tr:last-child td": { border: 0 }, ...sx },
        className: cx("sui-data-table", className),
        colorScheme,
        size,
        variant,
        children: [
          /* @__PURE__ */ jsx(Thead, { children: instance.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(Tr, { children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx(
            DataTableHeader,
            {
              header,
              isSortable
            },
            header.id
          )) }, headerGroup.id)) }),
          /* @__PURE__ */ jsx(Tbody, { children: instance.getRowModel().rows.map((row) => {
            return /* @__PURE__ */ jsx(Tr, { children: row.getVisibleCells().map((cell) => {
              const meta = cell.column.columnDef.meta || {};
              return /* @__PURE__ */ jsx(
                Td,
                {
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  isNumeric: meta.isNumeric,
                  children: flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )
                },
                cell.id
              );
            }) }, row.id);
          }) })
        ]
      }
    );
  }
);
DataTable.displayName = "DataTable";
var DataTableSort = (props) => {
  const { header, ...rest } = props;
  const sorterStyles = {
    ms: 2
  };
  if (header.id === "selection") {
    return null;
  }
  const sorted = header.column.getIsSorted();
  return /* @__PURE__ */ jsx(chakra.span, { __css: sorterStyles, ...rest, children: sorted ? sorted === "desc" ? /* @__PURE__ */ jsx(ChevronDownIcon, { "aria-label": "sorted descending" }) : /* @__PURE__ */ jsx(ChevronUpIcon, { "aria-label": "sorted ascending" }) : "" });
};
DataTableSort.displayName = "DataTableSort";
var DataTableHeader = (props) => {
  const { header, isSortable, ...rest } = props;
  let headerProps = {};
  const enabled = !header.column.getCanSort() ? false : isSortable;
  if (enabled) {
    headerProps = {
      className: "saas-data-table__sortable",
      userSelect: "none",
      cursor: "pointer",
      onClick: header.column.getToggleSortingHandler()
    };
  }
  const meta = header.column.columnDef.meta || {};
  const size = header.column.columnDef.size;
  return /* @__PURE__ */ jsxs(
    Th,
    {
      colSpan: header.colSpan,
      textTransform: "none",
      width: size && `${size}px`,
      isNumeric: meta.isNumeric,
      ...headerProps,
      ...rest,
      children: [
        flexRender(header.column.columnDef.header, header.getContext()),
        enabled && /* @__PURE__ */ jsx(DataTableSort, { header })
      ]
    }
  );
};
DataTableHeader.displayName = "DataTableHeader";
var getResult = (fn, params) => {
  if (typeof fn === "function") {
    return fn(params);
  }
  return fn;
};
var DataTableCell = (props) => {
  const { column, row, getValue } = props;
  const meta = column.columnDef.meta || {};
  if (meta.href) {
    const href = getResult(meta.href, row.original);
    return /* @__PURE__ */ jsx(Link, { href, children: getValue() });
  }
  return getValue() || null;
};
DataTableCell.displayName = "DataTableCell";
var DataTableCheckbox = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx(chakra.div, { children: /* @__PURE__ */ jsx(Checkbox, { ref, ...props }) });
});
DataTableCheckbox.displayName = "DataTableCheckbox";
var getSelectionColumn = (enabled) => {
  return enabled ? [
    {
      id: "selection",
      size: 1,
      header: ({ table }) => /* @__PURE__ */ jsx(
        DataTableCheckbox,
        {
          isChecked: table.getIsAllRowsSelected(),
          isIndeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
          "aria-label": table.getIsAllRowsSelected() ? "Deselect all rows" : "Select all rows"
        }
      ),
      cell: ({ row }) => /* @__PURE__ */ jsx(
        DataTableCheckbox,
        {
          isChecked: row.getIsSelected(),
          isIndeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
          "aria-label": row.getIsSelected() ? "Deselect row" : "Select row"
        }
      )
    }
  ] : [];
};
export {
  DataTable,
  DataTableCell,
  DataTableHeader,
  DataTableSort
};
//# sourceMappingURL=index.mjs.map