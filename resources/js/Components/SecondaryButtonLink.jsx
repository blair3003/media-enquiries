import { Link } from "@inertiajs/react"

export default function SecondaryButtonLink({ href, size = 'xl', className = '', disabled = false, children, ...props }) {

    const styles = {
        xl: "px-3.5 py-2.5 text-sm",
        lg: "px-3 py-2 text-sm",
        md: "px-2.5 py-1.5 text-sm",
        sm: "px-2 py-1 text-sm",
        xs: "px-2 py-1 text-xs"
    }

    return (
        <Link
            href={href}
            className={
                `rounded-md text-gray-900 bg-white hover:bg-gray-50 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles[size]} ${className} ${disabled ? "pointer-events-none opacity-25" : ""}`
            }
            disabled={disabled}
            {...props}
        >
            {children}
        </Link>
    )
}
