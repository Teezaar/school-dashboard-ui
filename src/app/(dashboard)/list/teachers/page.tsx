import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { teachersData } from "@/lib/data";
import Image from "next/image";

type Teacher = {
    id: number;
    name: string;
    teacherId: string;
    subjects: string[];
    classes: string[];
    phone: string;
    email: string;

    photo: string;
    address: string;
};

const columns = [
    { header: "نام استاد", accessor: "info" },
    {
        header: "کد استاد",
        accessor: "teacherId",
        className: "hidden lg:table-cell",
    },
    { header: "درس", accessor: "subjects", className: "hidden md:table-cell" },
    {
        header: "کلاس ها",
        accessor: "classes",
        className: "hidden md:table-cell",
    },
    { header: "تلفن", accessor: "phone", className: "hidden lg:table-cell" },
    { header: "آدرس", accessor: "address", className: "hidden xl:table-cell" },
    { header: " ", accessor: "actions" },
];

const TeacherListPage = () => {
    const renderRow = (item: Teacher) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight  odd:bg-gray-200"
        >
            <td className="flex items-center gap-4 p-2">
                <Image
                    src={item.photo}
                    alt="profile picture"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="w-8 h-8 rounded-full md:hidden xl:block object-cover"
                />
                <div className="">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden lg:table-cell">{item.teacherId}</td>
            <td className="hidden md:table-cell">
                {item.subjects.join(" - ")}
            </td>
            <td className="hidden md:table-cell">
                {item.classes.join(" - ")}
            </td>
            <td className="hidden lg:table-cell">{item.phone}</td>
            <td className="hidden xl:table-cell">{item.address}</td>
            <td>
                {/* ACTIONS */}
                <ListActionButtons
                    itemid={item.id}
                    name="teachers"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={teachersData}
            tableName="اساتید"
            tableNameEn="teachers"
        />
    );
};

export default TeacherListPage;
