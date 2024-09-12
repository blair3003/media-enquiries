export default function usePaginationParamString (queryParams) {

    const { page, ...filteredParams } = queryParams

    const paramString = new URLSearchParams(filteredParams).toString()

    return paramString ? `&${paramString}` : ""
}
