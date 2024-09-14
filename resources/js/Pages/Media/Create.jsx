import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import CreateMediaForm from "@/Components/CreateMediaForm"

export default function Create({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-10">Create new Media</h2>
                </div>
            }
        >
            <Head title="Create new Media" />

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6">
                        <CreateMediaForm />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
