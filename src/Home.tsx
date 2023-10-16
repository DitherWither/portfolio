import { CommentDiscussionIcon, MailIcon, MarkGithubIcon } from "@primer/octicons-react";

export function Body() {
    return (
        <>
            <Intro />
            <AboutMe />
            <EducationalQualifications />
            <Projects />
            <ContactDetails />
        </>
    );
}

function Intro() {
    return (
        <section
            id="intro"
            className="flex justify-center items-center min-h-screen
                bg-gradient-to-b from-secondary-950 from-40% to-secondary-700
                text-center flex-col p-9"
        >
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
                Hi There
            </h2>
            <p className="md:text-xl max-w-4xl">
                I'm Vardhan Patil, and I'm a web developer from Kolhapur, India.
            </p>
        </section>
    );
}

function ContactDetails() {
    return (
        <section id="contact-details" className="bg-primary-900 p-9 py-16">
            <h2 className="text-3xl md:text-5xl font-heading text-center">
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
                                target="_blank"
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
                    <li className="flex flex-row gap-1">
                        <MarkGithubIcon size={24} className="mx-4" />
                        <span>
                            Check my github repos at {" "}
                            <a
                                href="https://github.com/DitherWither"
                                className="underline"
                                target="_blank"
                            >
                                @DitherWither
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

function AboutMe() {
    return (
        <section
            id="about"
            className="bg-secondary-700 p-9 pb-16 flex justify-center"
        >
            <div className="max-w-3xl md:text-xl">
                <h2 className="text-3xl md:text-5xl font-heading text-center">
                    About Me
                </h2>
                <p className="mt-8">
                    I am a web developer/designer, and usually work in
                    typescript and rust, although I know various other
                    languages, including C, C++, Java, JavaScript, Go, and
                    Python.
                </p>
                <p className="mt-8">
                    I began learning the basics of programming in 6th grade from
                    various websites and slowly built up my skills. In 8th
                    grade, I stopped attending a traditional school, and began
                    homeschooling myself. During this time, I built a bunch of
                    websites and projects.
                </p>
            </div>
        </section>
    );
}

function EducationalQualifications() {
    return (
        <section
            id="educational-qualifications"
            className="bg-gradient-to-b from-secondary-700 to-primary-900 p-9 pb-16 flex justify-center items-center flex-col"
        >
            <h2 className="text-3xl md:text-5xl font-heading text-center">
                Education
            </h2>
            <div className="max-w-3xl md:text-xl">
                <p className="mt-8">
                    I completed my 10th grade from the National Institute of
                    Open Schooling, and was homeschooled. Before that, I have
                    attended New English Medium School, Sanjay Ghodawat
                    International School, and Podar International School.
                </p>
                <p className="mt-8">
                    I am currently doing a Computer Science Diploma in D Y Patil
                    Polytechnic, Kasaba Bawada, and I'm in the first year.
                </p>
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section
            id="projects"
            className="bg-primary-900 p-9 pb-16 flex justify-center items-center flex-col"
        >
            <h2 className="text-3xl md:text-5xl font-heading text-center">
                Projects
            </h2>
            <div className="max-w-3xl md:text-xl">
                <ul className="list-disc flex flex-col gap-4 mt-8">
                    <li>
                        <a
                            href="https://writtr.web.app"
                            target="_blank"
                            className="underline font-bold"
                        >
                            Writtr:
                        </a>{" "}
                        A website for writers to write and publish their work.
                    </li>
                    <li>
                        <a
                            href="https://ditherwither.github.io/pomotime/"
                            target="_blank"
                            className="underline font-bold"
                        >
                            PomoTime:
                        </a>{" "}
                        A simple pomodoro timer.
                    </li>
                    <li>
                        <a
                            href="https://chibi.shuttleapp.rs/"
                            target="_blank"
                            className="underline font-bold"
                        >
                            Chibi URL:
                        </a>{" "}
                        A simple URL shortener, with an public api that helps
                        you shorten urls
                    </li>
                    <li>
                        <a
                            href="https://nakshatralawns.netlify.app/"
                            target="_blank"
                            className="underline font-bold"
                        >
                            Nakshatra Lawns:
                        </a>{" "}
                        A pollution-free party lawn less than 30 minutes from
                        Kolhapur.
                    </li>
                </ul>
            </div>
        </section>
    );
}
