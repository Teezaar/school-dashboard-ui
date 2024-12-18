const UserCard = ({ type }: { type: string }) => {
    return (
        <div className="rounded-2xl odd:bg-gradient-to-tr odd:from-myBlue odd:to-myPurpleLight even:bg-gradient-to-tl even:from-myBlue even:to-mySky p-4 flex-1 min-w-[140px]">
            <div className="flex justify-between items-center">
                <span className="text-[12px] bg-white px-2 py-1 rounded-full text-green-600">
                    1403/05
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
            </div>
            <h1 className="text-2xl font-semibold my-4">1,244</h1>
            <h2 className="text-sm font-medium text-gray-500">{type}</h2>
        </div>
    );
};

export default UserCard;
