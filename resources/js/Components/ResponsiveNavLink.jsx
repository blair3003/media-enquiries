import {Link} from '@inertiajs/react';

export default function ResponsiveNavLink({active = false, className = '', children, ...props}) {
    return (
        <Link
            {...props}
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white ${className}`}
        >
            {children}
        </Link>
    );
}
