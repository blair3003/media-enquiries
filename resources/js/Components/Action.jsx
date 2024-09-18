import { format } from "date-fns"
import UpdateActionStatusForm from "@/Components/UpdateActionStatusForm"
import DeleteActionForm from "@/Components/DeleteActionForm"

export default function Action ({ action: { id, author, message, status, created_at } }) {

    return (
        <div className="border-b overflow-hidden">
            <div className="p-4 flex gap-6 sm:p-6 items-center">

                <div className="flex-1">
                    <div className="text-base font-bold text-gray-900">
                        {author.name} <span className="text-xs font-light text-gray-500">on {format(new Date(created_at), 'MMM d, yyyy')}</span>
                    </div>
                    <div className="text-sm text-gray-500">{message}</div>
                </div>

                <div className="w-1/2 sm:1/3 flex items-center justify-end gap-2">
                    <div className={`px-2 py-1 text-xs font-medium text-white rounded-full ${status === "Completed" ? "bg-green-600" : "bg-orange-600"}`}>
                        {status}
                    </div>
                    <UpdateActionStatusForm id={id} status={status} />
                    <DeleteActionForm id={id} />
                </div>

            </div>
        </div>
    )
}
