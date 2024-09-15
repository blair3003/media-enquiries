import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import MediaEditForm from "@/Components/MediaEditForm"

export default function Edit({ auth, media }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-10">Edit Media</h2>
                </div>
            }
        >
            <Head title="Edit Media" />

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6">
                        <MediaEditForm media={media} />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
