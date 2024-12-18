import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { lessonsData } from "@/lib/data";

type Lessons = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
};

const columns = [
    {
        header: "درس",
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
    { header: " ", accessor: "actions" },
];

const LessonsListPage = () => {
    const renderRow = (item: Lessons) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight  odd:bg-gray-200"
        >
            <td className="p-4">{item.subject}</td>
            <td>{item.class}</td>
            <td className="hidden sm:table-cell">{item.teacher}</td>

            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="lessons"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={lessonsData}
            tableName="درس ها"
            tableNameEn="lessons"
        />
    );
};

export default LessonsListPage;
