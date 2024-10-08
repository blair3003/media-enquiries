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
                        <dl className="grid grid-cols-[max-content_auto] gap-x-4 gap-y-2 items-baseline">
                            <dt className="text-sm font-semibold">Name:</dt>
                            <dd>{reporter.name}</dd>

                            <dt className="text-sm font-semibold">Email:</dt>
                            <dd>
                                <a
                                    href={`mailto:${reporter.email}`}
                                    className="text-indigo-600 font-medium hover:underline"
                                >
                                    {reporter.email}
                                </a>
                            </dd>

                            <dt className="text-sm font-semibold">Phone:</dt>
                            <dd>{reporter.phone}</dd>

                            <dt className="text-sm font-semibold">Mobile:</dt>
                            <dd>{reporter.mobile}</dd>

                            <dt className="text-sm font-semibold">Media:</dt>
                            <dd>
                                <Link
                                    href={route('media.show', reporter.media.id)}
                                    className="text-indigo-600 font-medium hover:underline"
                                >
                                    {reporter.media.name}
                                </Link>
                            </dd>

                            <dt className="text-sm font-semibold">Active:</dt>
                            <dd>{reporter.active ? "✅" : "❌"}</dd>
                        </dl>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )

}
