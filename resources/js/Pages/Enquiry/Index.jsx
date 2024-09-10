import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Index({ auth, enquiries })
{

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Enquiries</h2>}
        >
            <Head title="Enquiries"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <ul>
                                {enquiries?.data && enquiries.data.map(enquiry =>
                                    <li key={enquiry.id}>
                                        {enquiry.subject}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
