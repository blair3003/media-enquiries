// noinspection JSCheckFunctionSignatures

import { useForm } from "@inertiajs/react"
import SecondaryButtonLink from "@/Components/SecondaryButtonLink"
import PrimaryButton from "@/Components/PrimaryButton"

export default function CreateMediaForm() {

    const { data, setData, post, processing, errors } = useForm({
        name: ''
    })

    const submit = e => {
        e.preventDefault()
        post(route('media.store'))
    }

    return (
        <form onSubmit={submit}>

            <div className="space-y-12">

                <fieldset className="border-b border-gray-900/10 pb-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4 space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>

                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
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
                    </div>
                </fieldset>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <SecondaryButtonLink href={route('media.index')}>Cancel</SecondaryButtonLink>
                <PrimaryButton type="submit" disabled={processing}>Create</PrimaryButton>
            </div>

        </form>
    )
}
