import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import EnquiryCreateForm from "@/Components/EnquiryCreateForm"

export default function Create({ auth, categories, media, reporters }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-10">Create new Enquiry</h2>
                </div>
            }
        >
            <Head title="Create new Reporter" />

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6">
                        <EnquiryCreateForm categories={categories} media={media} reporters={reporters} />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
