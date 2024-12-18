import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { examsData } from "@/lib/data";

type Exams = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    date: string;
};

const columns = [
    {
        header: "آزمون",
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
        accessor: "date",
        className: "hidden sm:table-cell",
    },
    { header: " ", accessor: "actions" },
];

const ExamsListPage = () => {
    const renderRow = (item: Exams) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight  odd:bg-gray-200"
        >
            <td className="p-4">{item.subject}</td>
            <td>{item.class}</td>
            <td className="hidden sm:table-cell">{item.teacher}</td>
            <td className="hidden sm:table-cell">{item.date}</td>

            <td>
                <ListActionButtons itemid={item.id} name="exams" item={item} />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={examsData}
            tableName="آزمون ها"
            tableNameEn="exams"
        />
    );
};

export default ExamsListPage;
