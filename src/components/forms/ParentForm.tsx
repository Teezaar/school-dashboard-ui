"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputFields from "../InputFields";

const schema = z.object({
    username: z
        .string()
        .min(4, { message: "نام کاربری باید حداقل 4 کاراکتر باشد" })
        .max(16, { message: "نام کاربری میتواند حداکثر 16 کاراکتر باشد" }),
    email: z.string().email({ message: "ایمیل نا معتبر است" }),
    password: z
        .string()
        .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
        .max(24, { message: "رمز عبور میتواند حداکثر 24 کاراکتر باشد" }),
    firstName: z
        .string()
        .min(3, { message: "اسم اول باید حداقل 3 کاراکتر باشد" })
        .max(16, { message: "اسم کوچک شما میتواند حداکثر 16 کاراکتر باشد" }),
    lastName: z
        .string()
        .min(3, { message: "نام خانوادگی باید حداقل 3 کاراکتر باشد" })
        .max(16, { message: "نام خانوادگی میتواند حداکثر 16 کاراکتر باشد" }),
    phone: z.string().min(11, { message: "شماره تلفن همراه 11 رقم است" }),
    address: z
        .string()
        .min(11, { message: "آدرس منزل حداقل 11 کاراکتر و الزامی است" }),
    birthday: z.date({ message: "تاریخ تولد الزامی است" }),
    sex: z.enum(["مرد", "زن"], { message: "جنسیت را مشخص کنید" }),
    blood: z.enum(["A+", "A-", "B+", "B-", "O+", "O-"], {
        message: "گروه خونی را مشخص کنید",
    }),
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
            <h1 className="text-2xl font-semibold">ایجاد حساب استاد</h1>
            <span className="text-sm font-semibold text-gray-500">
                اعتبار سنجی
            </span>
            <div className="flex flex-wrap gap-4 justify-between items-center">
                <InputFields
                    label="نام کاربری"
                    type="text"
                    name="username"
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />
                <InputFields
                    label="ایمیل"
                    type="email"
                    name="email"
                    defaultValue={data?.email}
                    register={register}
                    error={errors?.email}
                />
                <InputFields
                    label="رمز عبور"
                    type="password"
                    name="password"
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.password}
                />
            </div>
            <span className="text-sm font-semibold text-gray-500">
                اطلاعات شخصی
            </span>
            <div className="flex flex-wrap gap-4 justify-between items-center">
                <InputFields
                    label="اسم کوچک"
                    type="text"
                    name="firstName"
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors?.firstName}
                />
                <InputFields
                    label="نام خانوادگی"
                    type="text"
                    name="lastName"
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors?.lastName}
                />
                <InputFields
                    label="آدرس"
                    type="text"
                    name="address"
                    defaultValue={data?.address}
                    register={register}
                    error={errors?.address}
                />
                <InputFields
                    label="تلفن"
                    type="tel"
                    name="phone"
                    defaultValue={data?.phone}
                    register={register}
                    error={errors?.phone}
                />
                <div className="flex flex-col gap-1 w-full md:w-1/4">
                    <label htmlFor="" className="text-xs text-gray-500">
                        گروه خونی
                    </label>
                    <select
                        id=""
                        className="w-full text-sm text-gray-500 p-2 rounded-md ring-1 ring-gray-300"
                        {...register("blood")}
                        defaultValue={data?.blood}
                    >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>

                    {errors.blood?.message && (
                        <p className="text-xs text-myRed">
                            {errors.blood?.message.toString()}
                        </p>
                    )}
                </div>
                <InputFields
                    label="تاریخ تولد"
                    type="date"
                    name="birthday"
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors?.birthday}
                />{" "}
                <div className="flex flex-col gap-1 w-full md:w-1/4 justify-center">
                    <label htmlFor="" className="text-xs text-gray-500">
                        جنسیت
                    </label>
                    <select
                        id=""
                        className="w-full text-sm text-gray-500 p-2 rounded-md ring-1 ring-gray-300"
                        {...register("sex")}
                        defaultValue={data?.sex}
                    >
                        <option value="male">مرد</option>
                        <option value="female">زن</option>
                    </select>

                    {errors.sex?.message && (
                        <p className="text-xs text-myRed">
                            {errors.sex?.message.toString()}
                        </p>
                    )}
                </div>
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
