const TableSearch = () => {
    return (
        <div
            className="w-full md:w-auto flex items-center gap-2
                text-sm rounded-full ring-[1.5px] ring-gray-400 px-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-neutral-500"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
            <input
                type="text"
                placeholder="جستجو ...."
                className="w-[200px] p-2 bg-transparent outline-none text-right"
            />
        </div>
    );
};

export default TableSearch;
