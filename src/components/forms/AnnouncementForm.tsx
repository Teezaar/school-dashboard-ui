"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputFields from "../InputFields";
import { announcementsData } from "@/lib/data";

const schema = z.object({
    announcementTitle: z
        .string()
        .min(3, { message: "عنوان اطلاعیه حداقل 4 حرف" })
        .max(16, { message: "عنوان اطلاعیه حداکثر 16 حرف" }),
    content: z.string().min(5, { message: "متن اطلاعی حداقل 5 حرف است" }),
    class: z.string().min(5, { message: "شماره کلاس الزامی سات" }),
    date: z.date({ message: "تاریخ اطلاعیه را اعلام کنید" }),
});

type Inputs = z.infer<typeof schema>;

interface TeacherFormProps {
    type: "create" | "update";
    data?: any;
}

const TeacherForm = ({ type, data }: TeacherFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit((date) => {
        console.log(date);
    });

    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <span className="text-sm font-semibold text-gray-500">
                ایجاد اطلاعیه
            </span>
            <div className="flex flex-wrap gap-4 justify-between items-center">
                <InputFields
                    label="عنوان اطلاعیه"
                    type="text"
                    name="announcementTitle"
                    defaultValue={data?.announcementTitle}
                    register={register}
                    error={errors?.announcementTitle}
                />

                <InputFields
                    label="کلاس"
                    type="text"
                    name="class"
                    defaultValue={data?.class}
                    register={register}
                    error={errors?.class}
                />
                <InputFields
                    label="تاریخ"
                    type="date"
                    name="date"
                    defaultValue={data?.date}
                    register={register}
                    error={errors?.date}
                />
                <InputFields
                    label="متن"
                    type="textarea"
                    name="content"
                    defaultValue={data?.content}
                    register={register}
                    error={errors?.content}
                />
            </div>
            <button
                type="submit"
                className="bg-myBlue hover:bg-mySky transition-all duration-500 text-white hover:text-gray-600 py-2 px-4 rounded-md border-none w-full md:w-1/4 self-center"
            >
                {type === "create" ? "ایجاد" : "ویرایش"}
            </button>
        </form>
    );
};

export default TeacherForm;
