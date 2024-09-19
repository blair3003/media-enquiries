import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import MediaTable from "@/Components/MediaTable"
import PaginationLinks from "@/Components/PaginationLinks"
import useRouteSort from "@/Hooks/useRouteSort"
import PrimaryButtonLink from "@/Components/PrimaryButtonLink"
import CategoryTable from "@/Components/CategoryTable"

export default function Index({ auth, categories, queryParams })
{
    const {
        data,
        from,
        links,
        next_page_url,
        prev_page_url,
        to,
        total
    } = categories

    const [setSort] = useRouteSort('category.index', queryParams)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Categories</h2>
                    <PrimaryButtonLink href={route('category.create')}>Add Category</PrimaryButtonLink>
                </div>
            }
        >
            <Head title="Categories"/>

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="p-6 space-y-4 overflow-auto">
                        <CategoryTable
                            categories={data}
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
