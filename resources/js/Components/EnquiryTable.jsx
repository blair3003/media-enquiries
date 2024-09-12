import EnquiryTableRow from "@/Components/EnquiryTableRow"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
export default function EnquiryTable({ enquiries, setSort })
{

    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
                <tr>
                    <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3 pl-0 flex items-center gap-4">
                        <div>Subject</div>
                        <div className="flex flex-col">
                            <button onClick={() => setSort({ sortBy: "subject", sortDir: "asc" })}>
                                <span className="sr-only">Sort by Ascending</span>
                                <FaChevronUp />
                            </button>
                            <button onClick={() => setSort({ sortBy: "subject", sortDir: "desc" })}>
                                <span className="sr-only">Sort by Descending</span>
                                <FaChevronDown/>
                            </button>
                        </div>
                    </th>
                    <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3">Category</th>
                    <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3">Media</th>
                    <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3 flex items-center gap-4">
                        <div>Deadline</div>
                        <div className="flex flex-col">
                            <button onClick={() => setSort({ sortBy: "deadline", sortDir: "asc" })}>
                                <span className="sr-only">Sort by Ascending</span>
                                <FaChevronUp/>
                            </button>
                            <button onClick={() => setSort({ sortBy: "deadline", sortDir: "desc" })}>
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
            {enquiries?.map(enquiry => <EnquiryTableRow key={enquiry.id} enquiry={enquiry} />)}
            </tbody>
        </table>
    )
}
