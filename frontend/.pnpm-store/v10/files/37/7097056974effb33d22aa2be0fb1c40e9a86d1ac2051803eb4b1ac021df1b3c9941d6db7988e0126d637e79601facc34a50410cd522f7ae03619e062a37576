'use client'
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DataTable: () => DataTable,
  DataTableCell: () => DataTableCell,
  DataTableHeader: () => DataTableHeader,
  DataTableSort: () => DataTableSort
});
module.exports = __toCommonJS(src_exports);

// src/data-table.tsx
var React = __toESM(require("react"));
var import_react_table = require("@tanstack/react-table");
var import_react = require("@chakra-ui/react");
var import_utils = require("@chakra-ui/utils");
var import_core = require("@saas-ui/core");
var import_jsx_runtime = require("react/jsx-runtime");
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
    const instance = (0, import_react_table.useReactTable)({
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
      getSortedRowModel: isSortable ? (0, import_react_table.getSortedRowModel)() : void 0,
      ...rest,
      getCoreRowModel: (0, import_react_table.getCoreRowModel)()
    });
    React.useImperativeHandle(instanceRef, () => instance, [instanceRef]);
    const state = instance.getState();
    React.useEffect(() => {
      onSelectedRowsChange == null ? void 0 : onSelectedRowsChange(Object.keys(state.rowSelection));
    }, [onSelectedRowsChange, state.rowSelection, instance]);
    React.useEffect(() => {
      onSortChange == null ? void 0 : onSortChange(state.sorting);
    }, [onSortChange, state.sorting]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_react.Table,
      {
        ref,
        sx: { "tr:last-child td": { border: 0 }, ...sx },
        className: (0, import_utils.cx)("sui-data-table", className),
        colorScheme,
        size,
        variant,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Thead, { children: instance.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Tr, { children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            DataTableHeader,
            {
              header,
              isSortable
            },
            header.id
          )) }, headerGroup.id)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Tbody, { children: instance.getRowModel().rows.map((row) => {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Tr, { children: row.getVisibleCells().map((cell) => {
              const meta = cell.column.columnDef.meta || {};
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react.Td,
                {
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  isNumeric: meta.isNumeric,
                  children: (0, import_react_table.flexRender)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.chakra.span, { __css: sorterStyles, ...rest, children: sorted ? sorted === "desc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ChevronDownIcon, { "aria-label": "sorted descending" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ChevronUpIcon, { "aria-label": "sorted ascending" }) : "" });
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react.Th,
    {
      colSpan: header.colSpan,
      textTransform: "none",
      width: size && `${size}px`,
      isNumeric: meta.isNumeric,
      ...headerProps,
      ...rest,
      children: [
        (0, import_react_table.flexRender)(header.column.columnDef.header, header.getContext()),
        enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableSort, { header })
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Link, { href, children: getValue() });
  }
  return getValue() || null;
};
DataTableCell.displayName = "DataTableCell";
var DataTableCheckbox = (0, import_react.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.chakra.div, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Checkbox, { ref, ...props }) });
});
DataTableCheckbox.displayName = "DataTableCheckbox";
var getSelectionColumn = (enabled) => {
  return enabled ? [
    {
      id: "selection",
      size: 1,
      header: ({ table }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        DataTableCheckbox,
        {
          isChecked: table.getIsAllRowsSelected(),
          isIndeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
          "aria-label": table.getIsAllRowsSelected() ? "Deselect all rows" : "Select all rows"
        }
      ),
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataTable,
  DataTableCell,
  DataTableHeader,
  DataTableSort
});
//# sourceMappingURL=index.js.map