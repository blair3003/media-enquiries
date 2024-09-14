import { Head, Link } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import PrimaryButtonLink from "@/Components/PrimaryButtonLink"

export default function Show({ auth, reporter })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">{reporter.name}</h2>
                    <PrimaryButtonLink href={route('reporter.edit', reporter.id)}>Edit Reporter</PrimaryButtonLink>
                </div>
            }
        >
            <Head title={reporter.name} />

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="p-6">
                        <dl className="grid grid-cols-[max-content_auto] gap-x-4 gap-y-2">
                            <dt className="font-bold">Name:</dt>
                            <dd>{reporter.name}</dd>

                            <dt className="font-bold">Email:</dt>
                            <dd>{reporter.email}</dd>

                            <dt className="font-bold">Phone:</dt>
                            <dd>{reporter.phone}</dd>

                            <dt className="font-bold">Mobile:</dt>
                            <dd>{reporter.mobile}</dd>

                            <dt className="font-bold">Media:</dt>
                            <dd>
                                <Link
                                    href={route('media.show', reporter.media.id)}
                                    className="text-indigo-600 font-medium hover:underline"
                                >
                                    {reporter.media.name}
                                </Link>
                            </dd>

                            <dt className="font-bold">Active:</dt>
                            <dd>{reporter.active ? "✅" : "❌"}</dd>
                        </dl>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )

}
