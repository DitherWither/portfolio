import { Body } from "./Home";

function HeaderBar() {
    return (
        <>
            <div className="flex px-8 md:px-24 py-4 flex-col md:flex-row bg-gradient-to-b from-background-900 from-0% to-80% to-transparant">
                <div className="flex-grow">
                    <h1 className="text-2xl font-heading font-bold">
                        Vardhan Patil
                    </h1>
                </div>
                <div className="hidden md:flex flex-col">
                    <nav className="h-full px-12 md:px-0">
                        <ul className="flex md:justify-center items-center gap-2 text-xl h-full text-secondary-200 underline">
                            <li className="flex gap-4">
                                <a href="#contact-details">Contact Me</a>
                                <a href="#about">About Me</a>
                                <a href="#educational-qualifications">
                                    Education
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

function Footer() {
    return (
        <>
            <div className="bg-gradient-to-b from-primary-900 to-30% to-secondary-800 text-center p-12 pt-20">
                <p className="text-xl text-text-200">
                    &copy; 2023 Vardhan Patil, All rights reserved.
                </p>
            </div>
        </>
    );
}

function App() {
    return (
        <>
            <header className="sticky top-0">
                <HeaderBar />
            </header>
            <main>
                <Body />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
