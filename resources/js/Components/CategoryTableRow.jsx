import { Link } from "@inertiajs/react"

export default function CategoryTableRow({ category: { id, name } }) {
    return (
        <tr>
            <td className="py-4 px-3 pl-0 text-sm font-medium text-gray-900 max-w-prose truncate">{name}</td>
            <td className="py-4 px-3 pr-0 text-sm relative text-right font-medium">
                <Link href={route('category.show', id)} className="text-indigo-600 hover:text-indigo-900">View</Link>
            </td>
        </tr>
    )
}
