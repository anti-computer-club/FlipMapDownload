function Footer(){
    return(
        <footer className="footer bg-neutral text-neutral-content items-center p-4">
            <aside className="flex items-center gap-2">
            <svg width="36" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M22.672 15.226...z" />
            </svg>
            <p>Anti Computer Club © 2024–{new Date().getFullYear()} — All rights reserved</p>
            </aside>
            <nav className="ml-auto flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M24 4.557...z" />
                </svg>
            </a>
            </nav>
        </footer>
    )

}

export default Footer;