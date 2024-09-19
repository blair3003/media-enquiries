import { useForm } from "@inertiajs/react"
import SecondaryButtonLink from "@/Components/SecondaryButtonLink"
import PrimaryButton from "@/Components/PrimaryButton"
import { useEffect } from "react"
import { format, parseISO } from "date-fns"
import useDateTimeFormat from "@/Hooks/useDateTimeFormat"

export default function EnquiryCreateForm({ categories, media, reporters }) {

    const { toLocal, toUTC } = useDateTimeFormat()

    const {
        data,
        setData,
        post,
        processing,
        errors
    } = useForm({
        'subject': '',
        'description': '',
        'category_id': null,
        'media_id': null,
        'reporter_id': null,
        'deadline': '',
        'ooh': false
    })

    const submit = e => {
        e.preventDefault()
        post(route('enquiry.store'))
    }

    return (
        <form onSubmit={submit}>

            <div className="space-y-12">

                <fieldset className="border-b border-gray-900/10 pb-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="subject"
                                   className="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    value={data.subject}
                                    onChange={e => setData('subject', e.target.value)}
                                    className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                            {errors.subject &&
                                <p className="text-xs text-red-500 font-semibold">{errors.subject}</p>
                            }
                        </div>

                        <div className="col-span-full space-y-2">
                            <label htmlFor="description"
                                   className="block text-sm font-semibold leading-6 text-gray-900">Description</label>

                            <textarea
                                name="description"
                                id="description"
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                className="block w-full sm:max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                            />
                            {errors.description &&
                                <p className="text-xs text-red-500 font-semibold">{errors.description}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="category"
                                   className="block text-sm font-semibold leading-6 text-gray-900">Category</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                                <select
                                    name="category_id"
                                    id="category"
                                    value={data.category_id || ''}
                                    onChange={e => setData('category_id', e.target.value)}
                                    className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                >
                                    <option value="">-- Select --</option>
                                    {categories && categories.map(category =>
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    )}
                                </select>
                            </div>
                            {errors.category_id &&
                                <p className="text-xs text-red-500 font-semibold">{errors.category_id}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="media"
                                   className="block text-sm font-semibold leading-6 text-gray-900">Media</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                                <select
                                    name="media_id"
                                    id="media"
                                    value={data.media_id || ''}
                                    onChange={e => setData('media_id', e.target.value)}
                                    className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                >
                                    <option value="">-- Select --</option>
                                    {media && media.map(medium =>
                                        <option
                                            key={medium.id}
                                            value={medium.id}
                                        >
                                            {medium.name}
                                        </option>
                                    )}

                                </select>
                            </div>
                            {errors.media_id &&
                                <p className="text-xs text-red-500 font-semibold">{errors.media_id}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="reporter"
                                   className="block text-sm font-semibold leading-6 text-gray-900">Reporter</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                                <select
                                    name="reporter_id"
                                    id="reporter"
                                    value={data.reporter_id || ''}
                                    onChange={e => setData('reporter_id', e.target.value)}
                                    className="block w-full truncate border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                >
                                    <option value="">-- Select --</option>
                                    {reporters && reporters.map(reporter =>
                                        <option
                                            key={reporter.id}
                                            value={reporter.id}
                                        >
                                            {reporter.name} ({reporter.media.name})
                                        </option>
                                    )}
                                </select>
                            </div>
                            {errors.reporter_id &&
                                <p className="text-xs text-red-500 font-semibold">{errors.reporter_id}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="deadline"
                                   className="block text-sm font-semibold leading-6 text-gray-900">Deadline</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                                <input
                                    type="datetime-local"
                                    name="deadline"
                                    id="deadline"
                                    value={toLocal(data.deadline)}
                                    onChange={e => setData('deadline', toUTC(e.target.value))}
                                    className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                            {errors.deadline &&
                                <p className="text-xs text-red-500 font-semibold">{errors.deadline}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="ooh" className="block text-sm font-semibold leading-6 text-gray-900">
                                Out of Hours (OOH)
                            </label>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    name="ooh"
                                    id="ooh"
                                    checked={data.ooh}
                                    onChange={e => setData('ooh', e.target.checked)}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                                />
                            </div>
                            {errors.ooh && (
                                <p className="text-xs text-red-500 font-semibold">{errors.ooh}</p>
                            )}
                        </div>

                    </div>
                </fieldset>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <SecondaryButtonLink href={route('enquiry.index')}>Cancel</SecondaryButtonLink>
                <PrimaryButton type="submit" disabled={processing}>Create</PrimaryButton>
            </div>

        </form>
    )
}
