"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputFields from "../InputFields";

const schema = z.object({
    subject: z
        .string()
        .min(3, { message: "عنوان تخصص حداقل 4 حرف" })
        .max(16, { message: "عنوان تخصص حداکثر 16 حرف" }),
    lecturer: z.string().min(3, { message: "نام استاد حداقل 4 حرف" }),
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
                ایجاد تخصص
            </span>
            <div className="flex flex-wrap gap-4 justify-center items-center">
                <InputFields
                    label="عنوان تخصص"
                    type="text"
                    name="subject"
                    defaultValue={data?.subject}
                    register={register}
                    error={errors?.subject}
                />
                <InputFields
                    label="استاد (با فاصله از هم جدا کنید)"
                    type="text"
                    name="lecturer"
                    defaultValue={data?.lecturer}
                    register={register}
                    error={errors?.lecturer}
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
