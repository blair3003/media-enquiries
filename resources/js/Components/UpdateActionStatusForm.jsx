import { GrPowerCycle } from "react-icons/gr"
import { useForm } from "@inertiajs/react"

export default function UpdateActionStatusForm({ id }) {

    const {
        post,
        processing
    } = useForm()

    const submit = e => {
        e.preventDefault()
        post(route('action.status', id))
    }

    return (
        <form onSubmit={submit}>
            <button
                type="submit"
                className="p-2 text-xs font-medium text-white rounded-full bg-indigo-600"
                disabled={processing}
            >
                <span className="sr-only">Change Status</span>
                <GrPowerCycle className={processing ? "animate-spin" : ""}/>
            </button>
        </form>
    )
}
