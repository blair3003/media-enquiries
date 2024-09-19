import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import PrimaryButtonLink from "@/Components/PrimaryButtonLink"
import { Head, Link } from "@inertiajs/react"
import { format } from "date-fns"
import ActionsList from "@/Components/ActionsList"
import ActionCreateForm from "@/Components/ActionCreateForm"

export default function Show({ auth, enquiry, actions })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Enquiry #{enquiry.id}</h2>
                    <PrimaryButtonLink href={route('enquiry.edit', enquiry.id)}>Edit Enquiry</PrimaryButtonLink>
                </div>
            }
        >
            <Head title={`Enquiry #${enquiry.id}`}/>

            <section className="p-6 my-8 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <h3 className="sr-only">Enquiry details</h3>

                <div className="">
                    <dl className="grid grid-cols-[max-content_auto] gap-x-4 gap-y-2">
                        <dt className="font-bold">Subject:</dt>
                        <dd>{enquiry.subject}</dd>

                        <dt className="font-bold">Description:</dt>
                        <dd>{enquiry.description}</dd>

                        <dt className="font-bold">Category:</dt>
                        <dd>{enquiry.category?.name}</dd>

                        <dt className="font-bold">Media:</dt>
                        <dd>
                            {enquiry.media &&
                                <Link
                                    href={route('media.show', enquiry.media?.id)}
                                    className="text-indigo-600 font-medium hover:underline"
                                >
                                    {enquiry.media?.name}
                                </Link>
                            }
                        </dd>

                        <dt className="font-bold">Reporter:</dt>
                        <dd>
                            {enquiry.reporter &&
                                <Link
                                    href={route('reporter.show', enquiry.reporter?.id)}
                                    className="text-indigo-600 font-medium hover:underline"
                                >
                                    {enquiry.reporter?.name}
                                </Link>
                            }
                        </dd>

                        <dt className="font-bold">Created:</dt>
                        <dd>{format(new Date(enquiry.created_at), 'MMM d, yyyy')}</dd>

                        <dt className="font-bold">Deadline:</dt>
                        <dd>{format(new Date(enquiry.deadline), 'MMM d, yyyy')}</dd>

                        <dt className="font-bold">Author:</dt>
                        <dd>{enquiry.author?.name}</dd>

                        <dt className="font-bold">OOH:</dt>
                        <dd>{enquiry.ooh ? "✅" : "❌"}</dd>

                        <dt className="font-bold">Archived:</dt>
                        <dd>{enquiry.archived ? "✅" : "❌"}</dd>
                    </dl>
                </div>
            </section>


            <section className="p-6 my-8 bg-white overflow-hidden shadow-sm sm:rounded-lg space-y-4">
            <div className="">
                    <h3 className="font-semibold text-lg text-gray-800 leading-tight">Actions</h3>
                </div>

                <div className="">
                    <ActionCreateForm enquiryId={enquiry.id} />
                    <ActionsList actions={actions}/>
                </div>

            </section>

        </AuthenticatedLayout>
)
}
