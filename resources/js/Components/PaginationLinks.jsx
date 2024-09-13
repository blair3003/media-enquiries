import { Link } from "@inertiajs/react"
import usePaginationParamString from "@/Hooks/usePaginationParamString.jsx"

export default function PaginationLinks ({ links, from, to, total, prevPageUrl, nextPageUrl, queryParams }) {

    const paramString = usePaginationParamString(queryParams)

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white py-3">
            <div className="flex flex-1 justify-between sm:hidden">
                <Link href={prevPageUrl + paramString} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</Link>
                <Link href={nextPageUrl + paramString} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between gap-4">
                <div>
                    <p className="text-sm text-gray-700 whitespace-nowrap">
                        Showing <span className="font-medium">{from}</span> to <span className="font-medium">{to}</span> of <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {links.map((link, index) => (
                            <Link
                                key={link.label}
                                href={link.url ? link.url + paramString : undefined}
                                dangerouslySetInnerHTML={{__html: link.label}}
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${link.active ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"} ${index === 0 ? "rounded-l-md whitespace-nowrap" : ""} ${index === links.length - 1 ? "rounded-r-md whitespace-nowrap" : ""} ${!link.url ? "pointer-events-none !text-gray-400" : ""}`}
                                aria-current={link.active ? "page" : undefined}
                                disabled={!link.url ? true : undefined}
                                preserveScroll
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
