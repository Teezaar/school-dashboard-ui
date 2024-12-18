import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { parentsData } from "@/lib/data";

type Parent = {
    id: number;
    name: string;
    students: string[];
    phone?: string;
    email?: string;
    address: string;
};

const columns = [
    { header: "نام والدین", accessor: "info" },
    {
        header: "فرزندان",
        accessor: "students",
        className: "hidden md:table-cell",
    },
    { header: "تلفن", accessor: "phone", className: "hidden md:table-cell" },
    { header: "آدرس", accessor: "address", className: "hidden lg:table-cell" },
    { header: " ", accessor: "actions" },
];

const ParentListPage = () => {
    const renderRow = (item: Parent) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight  odd:bg-gray-200"
        >
            <td className="flex items-center gap-4 p-2">
                <div className="">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">
                {item.students.join(", ")}
            </td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden lg:table-cell">{item.address}</td>

            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="parents"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={parentsData}
            tableName="والدین"
            tableNameEn="parents"
        />
    );
};

export default ParentListPage;
