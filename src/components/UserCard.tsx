import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className="rounded-2xl odd:bg-myPurple even:bg-myYellow p-4 flex-1 min-w-[140px]">
            <div className="flex justify-between items-center">
                <span className="text-[12px] bg-white px-2 py-1 rounded-full text-green-600">
                    1403/05
                </span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4">1,244</h1>
            <h2 className="text-sm font-medium text-gray-500">{type}</h2>
        </div>
    );
};

export default UserCard;
