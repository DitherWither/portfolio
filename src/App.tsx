import { Body } from "./Home";

function HeaderBar() {
    return (
        <>
            <div className="flex px-4 md:px-24 py-4 bg-secondary-800 flex-col md:flex-row">
                <div className="flex-grow">
                    <h1 className="text-2xl font-heading font-bold">
                        Vardhan Patil
                    </h1>
                </div>
                <div className="flex flex-col">
                    <nav className="h-full px-12 md:px-0">
                        <ul className="flex md:justify-center items-center gap-2 text-xl h-full text-secondary-200 underline">
                            <li className="flex gap-4">
                                <a href="#contact-details">Contact Me</a>
                                <a href="#about">About Me</a>
                                <a href="#educational-qualifications">Education</a>
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
            <div className="bg-secondary-800 text-center p-8">
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
            <header>
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
