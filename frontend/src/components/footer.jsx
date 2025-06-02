import { Button, Popup } from "pixel-retroui";
import { useState } from "react";
import ContactForm from "./contactForm.jsx";

// Footer component with contact form and back to top button
function Footer(){
    // State to manage the popup visibility
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // Functions to open and close the popup
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    // Render the footer
    return(
        <footer className="footer bg-neutral text-neutral-content items-center p-4 relative">
            <aside className="flex items-center gap-2">
            <svg width="36" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M22.672 15.226...z" />
            </svg>
            <p>Anti Computer Club © 2024–{new Date().getFullYear()} — All rights reserved</p>
            </aside>
            <div className="absolute right-4 flex gap-4 ">
                <div>
                    <Button
                        bg="white"
                        textColor="black"
                        borderColor="black"
                        shadow="purple"
                        className='' 
                        onClick={openPopup}>
                        contact us
                    </Button>
                    <Popup className="p-2"
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                    >
                        <ContactForm className=""/>
                    </Popup>
                </div>
                <Button
                    bg="white"
                    textColor="black"
                    borderColor="black"
                    shadow="purple"
                    className='' 
                    onClick={() => window.scrollTo(0, 0)}>
                    back to top ^
                </Button>
            </div>
        </footer>
    )

}

export default Footer;