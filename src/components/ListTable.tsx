import React from "react";
import ListFilters from "./ListFilters";
import ListPagination from "./ListPagination";
import Table from "./Table";
import TableSearch from "./TableSearch";
import { ModalProps } from "./FormModal";

interface Column {
    header: string;
    accessor: string;
    className?: string;
}

interface ListTableProps<T> {
    columns: Column[];
    data: T[];
    renderRow: (item: T) => JSX.Element;
    tableName?: string;
    tableNameEn?: ModalProps["table"];
}

const ListTable = <T,>({
    columns,
    renderRow,
    data,
    tableName,
    tableNameEn = "",
}: ListTableProps<T>) => {
    return (
        <div className="flex-1 glassUi rounded-md p-4 m-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="hidden md:block font-semibold text-lg">
                    لیست {tableName}
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    {/* Search */}
                    <TableSearch />
                    {/* Filters */}
                    <ListFilters tableName={tableNameEn} />
                </div>
            </div>
            {/* Table */}
            <Table columns={columns} renderRow={renderRow} data={data} />
            {/* Pagination */}
            <ListPagination />
        </div>
    );
};

export default ListTable;
