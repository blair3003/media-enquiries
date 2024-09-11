import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import EnquiryTable from '@/Components/EnquiryTable'
import PaginationLinks from "@/Components/PaginationLinks"

export default function Index({ auth, enquiries }) {

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
    } = enquiries

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Enquiries</h2>}
        >
            <Head title="Enquiries"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="p-6 space-y-4 overflow-auto">
                            <EnquiryTable enquiries={data} />
                            <PaginationLinks links={links} />
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
