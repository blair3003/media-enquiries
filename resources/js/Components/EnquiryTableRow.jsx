import { Link } from "@inertiajs/react"
import { format } from "date-fns"

export default function EnquiryTableRow({enquiry}) {
    return (
        <tr>
            <td className="py-4 px-3 pl-0 text-sm font-medium text-gray-900 max-w-prose truncate">{enquiry.subject}</td>
            <td className="py-4 px-3 text-sm text-gray-500 truncate">{enquiry.category.name}</td>
            <td className="py-4 px-3 text-sm text-gray-500 truncate">{enquiry.media.name}</td>
            <td className="py-4 px-3 text-sm text-gray-500 truncate">{format(new Date(enquiry.deadline), 'MMM d, yyyy')}</td>
            <td className="py-4 px-3 pr-0 text-sm relative text-right font-medium">
                <Link href={route('enquiry.show', enquiry.id)} className="text-indigo-600 hover:text-indigo-900">View</Link>
            </td>
        </tr>
    )
}
