import { useState } from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center w-full">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden md:block flex-1">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink href={route('enquiry.index')} active={route().current('enquiry.index')}>
                                        Enquiries
                                    </NavLink>
                                    <NavLink href={route('enquiry.archived')} active={route().current('enquiry.archived')}>
                                        Archived
                                    </NavLink>
                                    <NavLink href={route('media.index')} active={route().current('media.index')}>
                                        Media
                                    </NavLink>
                                    <NavLink href={route('reporter.index')} active={route().current('reporter.index')}>
                                        Reporters
                                    </NavLink>
                                    <NavLink href={route('category.index')} active={route().current('category.index')}>
                                        Categories
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <NavLink method="post" href={route('logout')} as="button">
                                        Log Out
                                    </NavLink>
                                </div>
                            </div>

                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                aria-controls="mobile-menu"
                                aria-expanded={showingNavigationDropdown ? 'true' : 'false'}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' md:hidden'} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        <NavLink href={route('enquiry.index')} active={route().current('enquiry.index')}>
                            Enquiries
                        </NavLink>
                        <NavLink href={route('enquiry.archived')} active={route().current('enquiry.archived')}>
                            Archived
                        </NavLink>
                        <NavLink href={route('media.index')} active={route().current('media.index')}>
                            Media
                        </NavLink>
                        <NavLink href={route('reporter.index')} active={route().current('reporter.index')}>
                            Reporters
                        </NavLink>
                        <NavLink href={route('category.index')} active={route().current('category.index')}>
                            Categories
                        </NavLink>
                    </div>

                    <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="flex items-center px-5">
                            <div className="">
                                <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1 px-2">
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>
                <div className="mx-auto max-w-7xl px-0 py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
