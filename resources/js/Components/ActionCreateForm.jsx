import { useForm } from "@inertiajs/react"
import { FaXmark } from "react-icons/fa6"
import PrimaryButton from "@/Components/PrimaryButton"
import { useRef } from "react"

export default function ActionCreateForm({ enquiryId }) {

    const messageRef = useRef(null)

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset
    } = useForm({
        'enquiry_id': enquiryId,
        'message': ''
    })

    const submit = e => {
        e.preventDefault()
        post(route('action.store'), {
            onSuccess: () => reset('message')
        })
    }

    const clearMessage = () => {
        reset('message')
        messageRef.current.focus()
    }

    return (
        <form onSubmit={submit}>

            <div className="border-b overflow-hidden">
                <div className="p-4 flex gap-6 sm:p-6 items-center">

                    <fieldset className="flex-1">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            value={data.message}
                            ref={messageRef}
                            onChange={e => setData('message', e.target.value)}
                            className="resize-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        {errors.message &&
                            <p className="text-xs text-red-500 font-semibold">{errors.message}</p>
                        }
                    </fieldset>

                    <div className="flex items-center justify-end gap-4">
                        {data.message &&
                            <button
                                type="button"
                                onClick={clearMessage}
                                className="w-8 h-8 grid place-content-center rounded-full hover:bg-gray-50"
                            >
                                <span className="sr-only">Clear message</span>
                                <FaXmark />
                            </button>
                        }
                        <PrimaryButton type="submit" disabled={processing} size="lg">Post</PrimaryButton>
                    </div>

                </div>
            </div>
        </form>
    )
}
