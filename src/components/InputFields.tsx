import { FieldError } from "react-hook-form";
import PersianDatePicker from "./PersianDatePicker";

type InputFieldProps = {
    label: string;
    type: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputFields = ({
    label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps,
}: InputFieldProps) => {
    return (
        <div className="flex flex-col gap-1 w-full md:w-1/4">
            <label htmlFor="" className="text-xs text-gray-500">
                {label}
            </label>

            {type === "textarea" ? (
                <textarea
                    {...register(name)}
                    className="w-full md:min-w-[600px] text-sm text-gray-500 p-2 rounded-md ring-1 ring-gray-300 min-h-[120px]"
                    defaultValue={defaultValue}
                    {...inputProps}
                />
            ) : type === "date" ? (
                <PersianDatePicker />
            ) : (
                <input
                    type={type}
                    {...register(name)}
                    className="w-full text-sm text-gray-500 p-2 rounded-md ring-1 ring-gray-300"
                    defaultValue={defaultValue}
                    {...inputProps}
                />
            )}
            {error?.message && (
                <p className="text-xs text-myRed">
                    {error?.message.toString()}
                </p>
            )}
        </div>
    );
};

export default InputFields;
