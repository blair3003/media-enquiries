import { useForm } from "@inertiajs/react"
import { FaXmark } from "react-icons/fa6"

export default function DeleteActionForm({ id }) {

    const {
        delete: destroy,
        processing
    } = useForm()

    const submit = e => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to delete this message?')) {
            destroy(route('action.destroy', id))
        }
    }

    return (
        <form onSubmit={submit}>
            <button
                type="submit"
                className="p-2 text-xs font-medium text-white rounded-full bg-red-600 hover:bg-red-700"
                disabled={processing}
            >
                <span className="sr-only">Delete message</span>
                <FaXmark/>
            </button>
        </form>
    )
}
