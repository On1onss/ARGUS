import * as _tanstack_table_core from '@tanstack/table-core';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { TableOptions, Table, ColumnSort, Header, Cell } from '@tanstack/react-table';
export { ColumnDef, Table as TableInstance } from '@tanstack/react-table';
import { ThemingProps, SystemStyleObject } from '@chakra-ui/react';

interface DataTableProps<Data extends object> extends Omit<TableOptions<Data>, 'getCoreRowModel'>, ThemingProps<'Table'> {
    /**
     * The TableInstance reference
     */
    instanceRef?: React.Ref<Table<Data>>;
    /**
     * Enable sorting on all columns
     */
    isSortable?: boolean;
    /**
     * Enable row selection
     */
    isSelectable?: boolean;
    /**
     * Triggers whenever the row selection changes.
     * @params rows The selected row id's
     */
    onSelectedRowsChange?: (rows: Array<string>) => void;
    /**
     * Triggers when sort changed.
     * Use incombination with `manualSortBy` to enable remote sorting.
     */
    onSortChange?: (columns: ColumnSort[]) => void;
    /**
     * The table class name attribute
     */
    className?: string;
    /**
     * Table styles
     */
    sx?: SystemStyleObject;
}
declare const DataTable: (<Data extends object>(props: DataTableProps<Data> & {
    ref?: React.ForwardedRef<HTMLTableElement>;
}) => React.ReactElement) & {
    displayName?: string;
};
interface DataTableSortProps<Data extends object, TValue> {
    header: Header<Data, TValue>;
}
declare const DataTableSort: {
    <Data extends object, TValue>(props: DataTableSortProps<Data, TValue>): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
interface DataTableHeaderProps<Data extends object, TValue> {
    header: Header<Data, TValue>;
    isSortable?: boolean;
}
declare const DataTableHeader: {
    <Data extends object, TValue>(props: DataTableHeaderProps<Data, TValue>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DataTableCell: {
    <Data extends object, TValue>(props: Cell<Data, TValue>): react_jsx_runtime.JSX.Element | NonNullable<_tanstack_table_core.NoInfer<TValue>> | null;
    displayName: string;
};

export { DataTable, DataTableCell, DataTableHeader, type DataTableHeaderProps, type DataTableProps, DataTableSort, type DataTableSortProps };
