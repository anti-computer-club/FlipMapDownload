import { Button } from "pixel-retroui";

function Footer(){
    return(
        <footer className="footer bg-neutral text-neutral-content items-center p-4 relative">
            <aside className="flex items-center gap-2">
            <svg width="36" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M22.672 15.226...z" />
            </svg>
            <p>Anti Computer Club © 2024–{new Date().getFullYear()} — All rights reserved</p>
            </aside>
            <Button
              bg="white"
              textColor="black"
              borderColor="black"
              shadow="purple"
              className='absolute right-4' 
              onClick={() => window.scrollTo(0, 0)}
            >
                       back to top ^
                      </Button>
        </footer>
    )

}

export default Footer;