import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { classesData } from "@/lib/data";

type Classes = {
    id: number;
    name: string;
    capacity: number;
    grade: string;
    supervisor: string;
};

const columns = [
    { header: "کلاس", accessor: "info" },
    {
        header: "ظرفیت",
        accessor: "capacity",
    },
    {
        header: "مقطع",
        accessor: "grade",
    },
    {
        header: "مدرس",
        accessor: "supervisor",
        className: "hidden sm:table-cell",
    },
    { header: " ", accessor: "actions" },
];

const ClassesListPage = () => {
    const renderRow = (item: Classes) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight  odd:bg-gray-200"
        >
            <td className="p-4">{item.name}</td>
            <td>{item.capacity}</td>
            <td>{item.grade}</td>
            <td className="hidden sm:table-cell">{item.supervisor}</td>

            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="classes"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={classesData}
            tableName="کلاس ها"
            tableNameEn="classes"
        />
    );
};

export default ClassesListPage;
