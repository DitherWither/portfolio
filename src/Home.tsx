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
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-secondary-950 from-40% to-secondary-700">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
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
                        <li className="flex flex-row">
                            <MailIcon size={24} className="mx-4" />
                            <span>
                                Email me at{" "}
                                <a
                                    href="mailto:hi@vardhanpatil.com"
                                    className="underline"
                                >
                                    hi@vardhanpatil.com
                                </a>
                            </span>
                        </li>
                        <li className="flex flex-row">
                            <CommentDiscussionIcon size={24} className="mx-4" />
                            <span>
                                Ping me at{" "}
                                <a
                                    href="https://discord.com/users/723414810644971572"
                                    className="underline"
                                >
                                    @ditherwither
                                </a>{" "}
                                on discord
                            </span>
                        </li>
                        <li className="flex flex-row gap-1">
                            <MailIcon size={24} className="mx-4" />
                            <span>
                                You can also email me at{" "}
                                <a
                                    href="mailto:vardhanpatil@proton.me"
                                    className="underline"
                                >
                                    vardhanpatil@proton.me
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
