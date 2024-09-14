export default function PrimaryButton({size = "xl", className = '', disabled = false, children, ...props }) {

    const styles = {
        xl: "px-3.5 py-2.5 text-sm",
        lg: "px-3 py-2 text-sm",
        md: "px-2.5 py-1.5 text-sm",
        sm: "px-2 py-1 text-sm",
        xs: "px-2 py-1 text-xs"
    }

    return (
        <button
            className={
                `rounded-md text-white bg-indigo-600 hover:bg-indigo-500 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles[size]} ${className} ${disabled ? "pointer-events-none opacity-25" : ""}`
            }
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
