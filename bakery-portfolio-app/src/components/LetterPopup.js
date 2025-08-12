import { React, useEffect, useRef } from 'react';
import './Letter.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function LetterPopup({isOpen, onClose}) {
    const letterRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        function handleClick(event) {
            if (letterRef.current && !letterRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [isOpen, onClose]);

    const copyEmail = () => {
        navigator.clipboard.writeText("mhan10242019@gmail.com")
            .catch(err => console.error(err));
    }

    if (!isOpen) return null;

    return (
    <div className='letter-container'>
        <img src={ process.env.PUBLIC_URL + '/images/letter_blank.png' } alt='letter' className='letter-img'/>
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
    </div>);


}

export default LetterPopup;