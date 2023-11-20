import PieChart from "@/Components/Charts/PieChart";
const ceodashboard = ({users}) => {
    return (
        <div className="pt-4">
        <div className=" sm:px-6 ">
            <div className="flex-1 bg-opacity-0">

                <div class="grid grid-cols-3 gap-4  mt-4 h-20">

                    <div class="">
                    <div className="flex flex-wrap">
<div className="lg:w-[390px]  bg-white rounded shadow-sm overflow-hidden flex flex-col">
    <div className="p-5 flex items-center space-x-4">
        <div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-cyan-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
</svg>

            </div>
        </div>
        <div className="flex-grow">
            <div className="text-gray-400">Total Pre-Processing</div>
            <div className="text-2xl font-bold font text-gray-900">

            </div>
        </div>
    </div>
    <a
                            href="#"

                        >
    <div className="text-white text-[21px] p-1 bg-cyan-600 font-bold leading-tight text-center">
        View More
    </div>
    </a>
</div>
</div>
                    </div>
                    <div class="">
                    <div className="flex flex-wrap">
<div className="lg:w-[390px] bg-white rounded shadow-sm overflow-hidden flex flex-col">
    <div className="p-5 flex items-center space-x-4">
        <div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-cyan-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
</svg>

            </div>
        </div>
        <div className="flex-grow">
            <div className="text-gray-400">Total Approved</div>
            <div className="text-2xl font-bold font text-gray-900">

            </div>
        </div>
    </div>
    <a
                            href="#"

                        >
    <div className="text-white text-[21px] p-1 bg-cyan-600 font-bold leading-tight text-center">
        View More
    </div>
    </a>
</div>
</div>
                    </div>
                    <div class="">
                    <div className="flex flex-wrap">
<div className="lg:w-[390px] bg-white rounded shadow-sm overflow-hidden flex flex-col">
    <div className="p-5 flex items-center space-x-4">
        <div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-cyan-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>

            </div>
        </div>
        <div className="flex-grow">
            <div className="text-gray-400">Total Denied</div>
            <div className="text-2xl font-bold font text-gray-900">

            </div>
        </div>
    </div>
    <a
                            href="#"

                        >
    <div className="text-white text-[21px] p-1 bg-cyan-600 font-bold leading-tight text-center">
        View More
    </div>
    </a>
</div>
</div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4  mt-[60px] h-[150px]">
                    <div class="flex items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg ">
                        Overview of how many application are in what stage of the process in total
                        <PieChart users={users} />
                    </div>
                    <div class="flex-1 items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg">
                        Total investment amount
                        {/* <BarGraph users={users} /> */}
                    </div>
                    <div class="flex items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg">
                        Estimated investment amount
                        {/* <DoughnutChart users={users} /> */}
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4  mt-[160px] h-[150px]">
                    <div class="flex items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg ">
                   age of applications

                    </div>
                    <div class="flex-1 items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg">
                    type of applications
                    </div>
                    <div class="flex items-center justify-center rounded bg-opacity-100 bg-white shadow sm:rounded-lg">
                 total applications  agency

                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mt-[5px] h-[310px] ">
                    <div class="flex items-center justify-center bg-white   shadow sm:rounded-lg ">
User Table showing applicants in specific stages based on status
                    </div>
                    <div class="flex items-center justify-center rounded  bg-white shadow sm:rounded-lg">
USer Table show recently modified application in specific stages based on status
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default ceodashboard;
