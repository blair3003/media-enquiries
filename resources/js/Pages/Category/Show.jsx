import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import PrimaryButtonLink from "@/Components/PrimaryButtonLink"

export default function Show({ auth, category })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Category: {category.name}</h2>
                    <PrimaryButtonLink href={route('category.edit', category.id)}>Edit Category</PrimaryButtonLink>
                </div>
            }
        >
            <Head title={category.name} />

            <div className="py-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="p-6">
                        <dl className="grid grid-cols-[max-content_auto] gap-x-4 gap-y-2 items-baseline">
                            <dt className="text-sm font-semibold">Name:</dt>
                            <dd>{category.name}</dd>
                        </dl>
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    )

}
