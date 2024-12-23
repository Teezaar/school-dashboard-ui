import ListActionButtons from "@/components/ListActionButtons";
import ListTable from "@/components/ListTable";
import { studentsData } from "@/lib/data";
import Image from "next/image";

type Student = {
    id: number;
    name: string;
    studentId: string;
    phone?: string;
    email?: string;
    photo: string;
    address: string;
    grade: string;
};

const columns = [
    { header: "نام دانشجو", accessor: "info" },
    {
        header: "کد دانشجو",
        accessor: "studentId",
        className: "hidden md:table-cell",
    },
    { header: "مقطع", accessor: "grade", className: "hidden md:table-cell" },
    { header: "آدرس", accessor: "address", className: "hidden lg:table-cell" },
    { header: " ", accessor: "actions" },
];

const StudentListPage = () => {
    const renderRow = (item: Student) => (
        <tr
            key={item.id}
            className="border-b-2 border-gray-300 text-sm hover:bg-myPurpleLight odd:bg-gray-200"
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
            <td className="hidden md:table-cell">{item.studentId}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.address}</td>

            <td>
                <ListActionButtons
                    itemid={item.id}
                    name="students"
                    item={item}
                />
            </td>
        </tr>
    );

    return (
        <ListTable
            columns={columns}
            renderRow={renderRow}
            data={studentsData}
            tableName={"دانشجویان"}
            tableNameEn={"students"}
        />
    );
};

export default StudentListPage;
