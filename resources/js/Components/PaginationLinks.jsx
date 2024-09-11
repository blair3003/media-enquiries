import { Link } from "@inertiajs/react"

export default function PaginationLinks ({ links }) {

    return (
        <nav aria-label="Pagination">
            <ul>
                {links?.map(link =>
                    <li
                        key={link.label}
                        aria-disabled={!link.url}
                    >
                        {link.url ? (
                            <Link
                                href={link.url}
                                aria-current={link.active ? "page" : undefined}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ) : (
                            <span dangerouslySetInnerHTML={{__html: link.label}} />
                        )}
                    </li>
                )}
            </ul>
        </nav>
    )
}
