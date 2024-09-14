import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import ReporterCreateForm from "@/Components/ReporterCreateForm"

export default function Create({ auth, media }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-10">Create new Reporter</h2>
                </div>
            }
        >
            <Head title="Create new Reporter" />

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6">
                        <ReporterCreateForm media={media} />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
