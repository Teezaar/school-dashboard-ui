import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { eventsData } from "@/lib/data";

type Events = {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
};

const columns = [
    {
        header: "رویداد",
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
    {
        header: "شروع",
        accessor: "startTime",
        className: "hidden sm:table-cell",
    },
    {
        header: "پایان",
        accessor: "endTime",
        className: "hidden sm:table-cell",
    },
    { header: " ", accessor: "actions" },
];

const EventsListPage = () => {
    const renderRow = (item: Events) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight  odd:bg-gray-200"
        >
            <td className="p-4">{item.title}</td>
            <td>{item.class}</td>
            <td className="hidden sm:table-cell">{item.date}</td>
            <td className="hidden sm:table-cell">{item.startTime}</td>
            <td className="hidden sm:table-cell">{item.endTime}</td>

            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="events"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={eventsData}
            tableName="رویداد ها"
            tableNameEn="events"
        />
    );
};

export default EventsListPage;
