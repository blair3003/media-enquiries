import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import ReporterTableRow from "@/Components/ReporterTableRow"

export default function ReporterTable({ reporters, setSort })
{

    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
                <tr>
                    <th scope="col" className="p-3 text-left text-gray-900 pl-0 flex items-center gap-2">
                        <div className="font-semibold text-sm">Name</div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setSort({ sortBy: "name", sortDir: "asc" })}
                                className="w-8 h-8 grid place-content-center rounded-full hover:bg-gray-50"
                            >
                                <span className="sr-only">Sort by Ascending</span>
                                <FaChevronUp />
                            </button>
                            <button
                                onClick={() => setSort({ sortBy: "name", sortDir: "desc" })}
                                className="w-8 h-8 grid place-content-center rounded-full hover:bg-gray-50"
                            >
                                <span className="sr-only">Sort by Descending</span>
                                <FaChevronDown/>
                            </button>
                        </div>
                    </th>
                    <th scope="col" className="p-3 text-left text-gray-900">
                        <div className="font-semibold text-sm">Media</div>
                    </th>
                    <th scope="col" className="">
                        <span className="sr-only">View</span>
                    </th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                {reporters?.map(reporter => <ReporterTableRow key={reporter.id} reporter={reporter} />)}
            </tbody>
        </table>
    )
}
