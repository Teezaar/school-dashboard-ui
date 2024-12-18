import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { subjectsData } from "@/lib/data";

type Subject = {
    id: number;
    name: string;
    teachers: string[];
};

const columns = [
    { header: "تخصص", accessor: "info" },
    {
        header: "مدرسین",
        accessor: "teacehrs",
        className: "hidden md:table-cell",
    },
    { header: " ", accessor: "actions" },
];

const SubjectListPage = () => {
    const renderRow = (item: Subject) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight odd:bg-gray-200"
        >
            <td className="p-4">{item.name}</td>
            <td className="hidden md:table-cell">
                {item.teachers.join(" - ")}
            </td>

            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="subjects"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={subjectsData}
            tableName="موضوعات"
            tableNameEn="subjects"
        />
    );
};

export default SubjectListPage;
