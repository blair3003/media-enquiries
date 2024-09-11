import EnquiryTableRow from "@/Components/EnquiryTableRow"

export default function EnquiryTable({ enquiries })
{

    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
                <tr>
                    <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3 pl-0">Subject</th>
                    <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3">Category</th>
                    <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3">Media</th>
                    <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900 px-3">Deadline</th>
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
