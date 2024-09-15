import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import ReporterEditForm from "@/Components/ReporterEditForm"

export default function Edit({ auth, reporter, media }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-10">Edit Reporter</h2>
                </div>
            }
        >
            <Head title="Edit Reporter" />

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6">
                        <ReporterEditForm reporter={reporter} media={media} />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
