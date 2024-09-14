import { useForm } from "@inertiajs/react"
import SecondaryButtonLink from "@/Components/SecondaryButtonLink"
import PrimaryButton from "@/Components/PrimaryButton"

export default function ReporterCreateForm({ media }) {

    const {
        data,
        setData,
        post,
        processing,
        errors
    } = useForm({
        name: '',
        email: '',
        phone: '',
        mobile: '',
        media_id: null
    })

    const submit = e => {
        e.preventDefault()
        post(route('reporter.store'))
    }

    return (
        <form onSubmit={submit}>

            <div className="space-y-12">

                <fieldset className="border-b border-gray-900/10 pb-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="name"
                                   className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                            {errors.name &&
                                <p className="text-xs text-red-500 font-semibold">{errors.name}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="email"
                                   className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.email &&
                                <p className="text-xs text-red-500 font-semibold">{errors.email}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="phone"
                                   className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={data.phone}
                                    onChange={e => setData('phone', e.target.value)}
                                    className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.phone &&
                                <p className="text-xs text-red-500 font-semibold">{errors.phone}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="mobile"
                                   className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    value={data.mobile}
                                    onChange={e => setData('mobile', e.target.value)}
                                    className="block flex-1 border-0 bg-transparent py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.mobile &&
                                <p className="text-xs text-red-500 font-semibold">{errors.mobile}</p>
                            }
                        </div>

                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="media" className="block text-sm font-medium leading-6 text-gray-900">Media</label>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
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
                    </div>
                </fieldset>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <SecondaryButtonLink href={route('reporter.index')}>Cancel</SecondaryButtonLink>
                <PrimaryButton type="submit" disabled={processing}>Create</PrimaryButton>
            </div>

        </form>
    )
}
