import { role } from "@/lib/data";
import Link from "next/link";
import FormModal from "./FormModal";
import { ModalProps } from "./FormModal";

interface ListActionButtonsProps {
    itemid: number;
    name: ModalProps["table"];
    item: any;
}

const options = [
    "parents",
    "subjects",
    "classes",
    "lessons",
    "exams",
    "assignments",
    "attendances",
    "results",
    "announcements",
    "",
];

const ListActionButtons = ({ itemid, name, item }: ListActionButtonsProps) => {
    const isValidNameUpdate = options.includes(name);
    return (
        <div className="flex items-center gap-4 justify-end pl-4">
            {/* VIEW BUTTON */}
            {role === "admin" && !isValidNameUpdate && (
                <Link href={`/list/${name}/${itemid}`}>
                    <button
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-myBlueLight/60
                hover:bg-myBlue/70 duration-500 transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </button>
                </Link>
            )}
            {/* UPDATE BUTTON */}
            {role === "admin" && isValidNameUpdate && (
                <FormModal table={name} type="update" data={item} />
            )}
            {/* DELETE BUTTON */}
            {role === "admin" && (
                <FormModal table={name} type="delete" id={itemid} />
            )}
        </div>
    );
};

export default ListActionButtons;
