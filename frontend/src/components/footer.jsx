import { Button } from "pixel-retroui";

function Footer(){
    return(
        <footer className="footer bg-neutral text-neutral-content items-center p-4">
            <aside className="flex items-center gap-2 relative">
            <svg width="36" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M22.672 15.226...z" />
            </svg>
            <p>Anti Computer Club © 2024–{new Date().getFullYear()} — All rights reserved</p>
            <Button className='absoluteright-4' 
                        onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                       back to top ^
                      </Button>
            </aside>
        </footer>
    )

}

export default Footer;