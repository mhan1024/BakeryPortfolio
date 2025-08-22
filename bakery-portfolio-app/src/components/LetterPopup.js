import { React, useEffect, useRef } from 'react';
import './Letter.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function LetterPopup({isOpen, onClose}) {
    // Creates a box that will hold the letter popup's DOM element 
    const letterRef = useRef(null);

    // Run this effect when the letter popup is either opened or closed
    useEffect(() => {
        // If the popup is not open, do nothing
        if (!isOpen) return;

        // Check if user clicked outside the popup
        function handleClick(event) {
            // If so, close the popup
            if (letterRef.current && !letterRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [isOpen, onClose]);

    // Handles when the user clicks on the "copy email" button and email is copied/saved to the user's clipboard
    const copyEmail = () => {
        navigator.clipboard.writeText("mhan10242019@gmail.com")
            .catch(err => console.error(err));
    }

    // Stop rendering if popup isn't open
    if (!isOpen) return null;

    return (
        <div className='letter-backdrop'>
            <div className='letter-container'>
                <img src={ `${process.env.PUBLIC_URL}/images/letter_blank.PNG` } alt='letter' className='letter-img'/>
                <div className='overlay-text'>
                    <div ref={ letterRef } >
                        <p className='letter-text'>I&apos;d love to hear from you — don&apos;t hesitate to say hi!</p>
                        <p className='letter-text'>
                            mhan10242019@gmail.com
                            <button
                                className='copy-button'
                                onClick={ copyEmail }    
                            >
                                <i className="bi bi-copy"></i>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>);


}

export default LetterPopup;