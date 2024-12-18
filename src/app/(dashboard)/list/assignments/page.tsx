import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { assignmentsData } from "@/lib/data";

type Assignments = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    dueDate: string;
};

const columns = [
    {
        header: "تکلیف",
        accessor: "subject",
    },
    {
        header: "کلاس",
        accessor: "class",
    },
    {
        header: "مدرس",
        accessor: "teacher",
        className: "hidden sm:table-cell",
    },
    {
        header: "تاریخ",
        accessor: "dueDate",
        className: "hidden sm:table-cell",
    },
    { header: " ", accessor: "actions" },
];

const AssignmentsListPage = () => {
    const renderRow = (item: Assignments) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight odd:bg-gray-200"
        >
            <td className="p-4">{item.subject}</td>
            <td>{item.class}</td>
            <td className="hidden sm:table-cell">{item.teacher}</td>
            <td className="hidden sm:table-cell">{item.dueDate}</td>
            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="assignments"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={assignmentsData}
            tableName="تکالیف"
            tableNameEn="assignments"
        />
    );
};

export default AssignmentsListPage;
