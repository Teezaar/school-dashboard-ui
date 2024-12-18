import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { resultsData } from "@/lib/data";

type Results = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    student: string;
    date: string;
    type: string;
    score: number;
};

const columns = [
    {
        header: "نتایج دروس",
        accessor: "subject",
    },
    {
        header: "کلاس",
        accessor: "class",
    },
    {
        header: "مدرس",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "دانشجو",
        accessor: "student",
        className: "hidden sm:table-cell",
    },
    {
        header: "تاریخ",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "نوع",
        accessor: "type",
        className: "hidden lg:table-cell",
    },
    {
        header: "نمره",
        accessor: "score",
        className: "hidden sm:table-cell",
    },
    { header: " ", accessor: "actions" },
];

const ResultsListPage = () => {
    const renderRow = (item: Results) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight  odd:bg-gray-200"
        >
            <td className="p-4">{item.subject}</td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td className="hidden sm:table-cell">{item.student}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden lg:table-cell">{item.type}</td>
            <td className="hidden sm:table-cell">{item.score}</td>

            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="results"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={resultsData}
            tableName={"نتایج"}
            tableNameEn={"results"}
        />
    );
};

export default ResultsListPage;
