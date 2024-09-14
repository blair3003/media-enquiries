import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import PrimaryButtonLink from "@/Components/PrimaryButtonLink"

export default function Show({ auth, media })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">{media.name}</h2>
                    <PrimaryButtonLink href={route('media.edit', media.id)}>Edit Media</PrimaryButtonLink>
                </div>
            }
        >
            <Head title={media.name} />

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="p-6">
                        <dl className="grid grid-cols-[max-content_auto] gap-x-4 gap-y-2">
                            <dt className="font-bold">Name:</dt>
                            <dd>{media.name}</dd>
                        </dl>
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    )

}
