export default function Footer() {
    return (
        <footer className="bg-black dark:bg-gray-950 text-white text-center py-4 transition-colors duration-300">
            <p>
                © {new Date().getFullYear()} Pavan M G | just work hard
            </p>
        </footer>
    );
}
