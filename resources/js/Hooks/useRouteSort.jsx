import { useEffect, useState } from "react"
import { router } from "@inertiajs/react"

export default function useRouteSort(routeStr, queryParams) {

    const [sort, setSort] = useState({ sortBy: queryParams["sort_by"], sortDir: queryParams["sort_dir"] })

    useEffect(() => {

        const newQueryParams = { ...queryParams }

        if (sort.sortBy !== queryParams["sort_by"]) {
            sort.sortBy ? newQueryParams["sort_by"] = sort.sortBy : delete newQueryParams["sort_by"]
        }

        if (sort.sortDir !== queryParams["sort_dir"]) {
            sort.sortDir ? newQueryParams["sort_dir"] = sort.sortDir : delete newQueryParams["sort_dir"]
        }

        if (sort.sortBy !== queryParams["sort_by"] || sort.sortDir !== queryParams["sort_dir"]) {
            router.get(route(routeStr), newQueryParams, { replace: true, preserveScroll: true })
        }

    }, [sort.sortBy, sort.sortDir])

    return [setSort]
}
