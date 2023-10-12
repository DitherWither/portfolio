import { CommentDiscussionIcon, MailIcon } from "@primer/octicons-react";

export function Body() {
    return (
        <>
            <Intro />
            <ContactDetails />
        </>
    );
}

function Intro() {
    return (
        <section id="intro">
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-heading">
                        Hi There
                    </h2>
                    <p className="md:text-xl">
                        I'm Vardhan Patil, and I'm a web developer from
                        Kolhapur, India.
                    </p>
                </div>
            </div>
        </section>
    );
}

function ContactDetails() {
    return (
        <section id="contact-details">
            <div className="bg-primary-900 p-9 pb-16">
                <h2 className="text-4xl md:text-5xl font-heading">
                    Contact Me
                </h2>
                <div className="flex justify-center items-center my-4">
                    <ul className="grow max-w-4xl flex flex-col gap-4 font-bold">
                        <li className="flex flex-row gap-1">
                            <MailIcon size={24} className="mx-4" />
                            Email me at
                            <a
                                href="mailto:hi@vardhanpatil.com"
                                className="underline"
                            >
                                hi@vardhanpatil.com
                            </a>
                        </li>
                        <li className="flex flex-row gap-1">
                            <CommentDiscussionIcon size={24} className="mx-4" />
                            Ping me at
                            <a
                                href="https://discord.com/users/723414810644971572"
                                className="underline"
                            >
                                @ditherwither
                            </a>
                            on discord
                        </li>
                        <li className="flex flex-row gap-1">
                            <MailIcon size={24} className="mx-4" />
                            You can also email me at
                            <a
                                href="mailto:vardhanpatil@proton.me"
                                className="underline"
                            >
                                vardhanpatil@proton.me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
