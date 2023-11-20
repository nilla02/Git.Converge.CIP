const Cardbox = ({
    draftUserCount,
    Name,
    PPC,
    NNCC,
    PRC,
    QPC,
    BCUC,
    IPC,
    IRC,
    DWCC,
    APC,
    DCC,
    CLC,
    DOFAPC,
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    Icon9,
    Icon10,
    Icon11,
    Icon12,
    Icon13,
}) => {
    return (
        <div className="flex flex-wrap mx-10">
        <div className="w-[300px]  bg-white rounded shadow-sm overflow-hidden flex flex-col">
            <div className="p-5 flex items-center space-x-4">
                <div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-cyan-600">
                       {Icon1} {Icon2} {Icon3} {Icon4} {Icon5} {Icon6} {Icon7} {Icon8} {Icon9} {Icon10} {Icon11} {Icon12} {Icon13} 
                    </div>
                </div>
                <div className="flex-grow">
                    <div className="text-gray-400">{Name}</div>
                    <div className="text-2xl font-bold font text-gray-900">
                        {PPC}{draftUserCount}{NNCC}{QPC}{PRC}{BCUC}{IPC}{IRC}{DWCC}{APC}{DCC}{CLC}{DOFAPC}
                    </div>
                </div>
            </div>
            <div className="text-white text-[21px] p-1 bg-cyan-600 font-bold leading-tight text-center">
                View More
            </div>
        </div>
    </div>
           
    );
};

export default Cardbox;
