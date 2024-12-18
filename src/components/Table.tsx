interface TableProps {
    columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item: any) => JSX.Element;
    data: any[];
}

const Table = ({ columns, renderRow, data }: TableProps) => {
    return (
        <table className="w-full mt-8 overflow-auto">
            <thead>
                <tr className="text-gray-500 text-right text-sm ">
                    {columns.map((col) => (
                        <th key={col.accessor} className={col.className}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="text-right">
                {data.map((item) => renderRow(item))}
            </tbody>
        </table>
    );
};

export default Table;
