import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink href={route('enquiry.index')} active={route().current('enquiry.index')}>
                                        Enquiries
                                    </NavLink>
                                    <NavLink href={route('media.index')} active={route().current('media.index')}>
                                        Media
                                    </NavLink>
                                    <NavLink href={route('reporter.index')} active={route().current('reporter.index')}>
                                        Reporters
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden md:block">
                            {/*<div className="ml-4 flex items-center md:ml-6">*/}
                            {/*    <Dropdown>*/}
                            {/*        <Dropdown.Trigger>*/}
                            {/*            <span className="inline-flex rounded-md">*/}
                            {/*                <button*/}
                            {/*                    type="button"*/}
                            {/*                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"*/}
                            {/*                >*/}
                            {/*                    {user.name}*/}
                            {/*    */}
                            {/*                    <svg*/}
                            {/*                        className="ms-2 -me-0.5 h-4 w-4"*/}
                            {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                        viewBox="0 0 20 20"*/}
                            {/*                        fill="currentColor"*/}
                            {/*                    >*/}
                            {/*                        <path*/}
                            {/*                            fillRule="evenodd"*/}
                            {/*                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
                            {/*                            clipRule="evenodd"*/}
                            {/*                        />*/}
                            {/*                    </svg>*/}
                            {/*                </button>*/}
                            {/*            </span>*/}
                            {/*        </Dropdown.Trigger>*/}
                            {/*    */}
                            {/*        <Dropdown.Content>*/}
                            {/*            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>*/}
                            {/*            <Dropdown.Link href={route('logout')} method="post" as="button">*/}
                            {/*                Log Out*/}
                            {/*            </Dropdown.Link>*/}
                            {/*        </Dropdown.Content>*/}
                            {/*    </Dropdown>*/}
                            {/*</div>*/}
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
                        <NavLink href={route('media.index')} active={route().current('media.index')}>
                            Media
                        </NavLink>
                        <NavLink href={route('reporter.index')} active={route().current('reporter.index')}>
                            Reporters
                        </NavLink>
                    </div>

                    <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1 px-2">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
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
