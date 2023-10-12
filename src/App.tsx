import { Body } from "./Home";

function HeaderBar() {
    return (
        <>
            <div className="flex px-8 py-4 bg-secondary-800">
                <h1 className="text-2xl font-heading">Vardhan Patil</h1>
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
