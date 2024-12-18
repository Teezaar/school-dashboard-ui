"use client";

import { useState } from "react";
import IconSelector from "./IconSelector";
import ClientPortal from "./ClientPortal";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
    loading: () => (
        <h1 className="text-center text-xl">در حال بارگزاری ....</h1>
    ),
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => (
        <h1 className="text-center text-xl">در حال بارگزاری ....</h1>
    ),
});

const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
    loading: () => (
        <h1 className="text-center text-xl">در حال بارگزاری ....</h1>
    ),
});

const ParentForm = dynamic(() => import("./forms/ParentForm"), {
    loading: () => (
        <h1 className="text-center text-xl">در حال بارگزاری ....</h1>
    ),
});

const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
    loading: () => (
        <h1 className="text-center text-xl">در حال بارگزاری ....</h1>
    ),
});

export interface ModalProps {
    table:
        | "teachers"
        | "students"
        | "parents"
        | "subjects"
        | "classes"
        | "lessons"
        | "exams"
        | "assignments"
        | "attendances"
        | "events"
        | "announcements"
        | "results"
        | "";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}

const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
    teachers: (type, data) => <TeacherForm type={type} data={data} />,
    students: (type, data) => <StudentForm type={type} data={data} />,
    parents: (type, data) => <ParentForm type={type} data={data} />,
    subjects: (type, data) => <SubjectForm type={type} data={data} />,
    announcements: (type, data) => (
        <AnnouncementForm type={type} data={data} />
    ),
};

const FormModal = ({ table, type, data, id }: ModalProps) => {
    const [open, setOpen] = useState(false);

    const bgColor =
        type === "create"
            ? "bg-myYellowLight hover:bg-myYellow"
            : type === "update"
            ? "bg-myBlueLight/50 hover:bg-myBlue/70"
            : "bg-myRedLight/70 hover:bg-myRedLight";

    const Form = () => {
        return type === "delete" && id ? (
            <form action="" className="p-4 flex flex-col gap-4">
                <span className="text-center font-medium">
                    اطلاعات حذف خواهد شد. آیا تایید میکنید؟
                </span>
                <button className="bg-myRedLight hover:bg-myRed transition-all duration-500 text-white py-2 px-4 rounded-md border-none w-max self-center">
                    حذف
                </button>
            </form>
        ) : type === "create" || type === "update" ? (
            forms[table](type, data)
        ) : (
            "لیست پیدا نشد"
        );
    };

    return (
        <>
            <button
                className={`${bgColor} flex items-center justify-center rounded-full w-8 h-8 transition-all duration-500`}
                onClick={() => setOpen(true)}
            >
                <IconSelector buttonSvg={type} />
            </button>
            {open && (
                <ClientPortal>
                    <div
                        className="w-screen h-screen fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center"
                        role="dialog"
                        aria-modal="true"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.5,
                            }}
                            className="glassUimodal p-8 rounded-md scrollable w-[75%] md:w-[85%]
                            lg:w-[75%] xl:w-[65%] 2xl:w-[60%] relative max-h-[calc(100vh-32px)] overflow-y-auto"
                        >
                            <button
                                className="mt-4"
                                onClick={() => setOpen(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 absolute top-4 right-5 hover:stroke-myRed hover:ring-1 ring-myRed rounded-full transition-all duration-500 cursor-pointer box-border p-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <Form />
                        </motion.div>
                    </div>
                </ClientPortal>
            )}
        </>
    );
};

export default FormModal;
