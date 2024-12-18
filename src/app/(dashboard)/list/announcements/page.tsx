import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { announcementsData } from "@/lib/data";

type Announcements = {
    id: number;
    title: string;
    class: string;
    date: string;
};

const columns = [
    {
        header: "اطلاعیه",
        accessor: "title",
    },
    {
        header: "کلاس",
        accessor: "class",
    },
    {
        header: "تاریخ",
        accessor: "date",
        className: "hidden sm:table-cell",
    },

    { header: " ", accessor: "actions" },
];

const AnnouncementsListPage = () => {
    const renderRow = (item: Announcements) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight odd:bg-gray-200"
        >
            <td className="p-4">{item.title}</td>
            <td>{item.class}</td>
            <td className="hidden sm:table-cell">{item.date}</td>

            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="announcements"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={announcementsData}
            tableName="اطلاعیه ها"
            tableNameEn="announcements"
        />
    );
};

export default AnnouncementsListPage;
