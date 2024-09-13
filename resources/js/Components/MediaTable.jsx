import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import MediaTableRow from "@/Components/MediaTableRow"
export default function MediaTable({ media, setSort })
{

    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
            <tr>
                <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3 pl-0 flex items-center gap-4">
                    <div>Name</div>
                    <div className="flex flex-col">
                        <button onClick={() => setSort({ sortBy: "name", sortDir: "asc" })}>
                            <span className="sr-only">Sort by Ascending</span>
                            <FaChevronUp />
                        </button>
                        <button onClick={() => setSort({ sortBy: "name", sortDir: "desc" })}>
                            <span className="sr-only">Sort by Descending</span>
                            <FaChevronDown/>
                        </button>
                    </div>
                </th>
                <th scope="col" className="">
                    <span className="sr-only">View</span>
                </th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                {media?.map(m => <MediaTableRow key={m.id} media={m} />)}
            </tbody>
        </table>
    )
}
