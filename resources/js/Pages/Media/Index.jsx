import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import MediaTable from "@/Components/MediaTable"
import PaginationLinks from "@/Components/PaginationLinks"
import useRouteSort from "@/Hooks/useRouteSort"
import PrimaryButtonLink from "@/Components/PrimaryButtonLink"

export default function Index({ auth, media, queryParams })
{
    const {
        current_page,
        data,
        first_page_url,
        from,
        last_page,
        last_page_url,
        links,
        next_page_url,
        path,
        per_page,
        prev_page_url,
        to,
        total
    } = media

    const [setSort] = useRouteSort('media.index', queryParams)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Media</h2>
                    <PrimaryButtonLink href={route('media.create')}>Add Media</PrimaryButtonLink>
                </div>
            }
        >
            <Head title="Media"/>

            <div className="py-12">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="p-6 space-y-4 overflow-auto">
                        <MediaTable
                            media={data}
                            setSort={setSort}
                        />
                        <PaginationLinks
                            links={links}
                            from={from}
                            to={to}
                            total={total}
                            prevPageUrl={prev_page_url}
                            nextPageUrl={next_page_url}
                            queryParams={queryParams}
                        />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
