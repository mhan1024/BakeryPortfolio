import { React, useEffect, useRef } from 'react';
import './ResumePopup.css';

function ResumePopup({isOpen, onClose}) {

    // Creates a box that will hold the resume popup's DOM element 
    const resRef = useRef(null);

    // Run this effect when the resume popup is either opened or closed
    useEffect(() => {
        // If the popup is not open, do nothing
        if (!isOpen) return;

        // Check if user clicked outside the popup
        function handleClick(event) {
            // If so, close the popup
            if (resRef.current && !resRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [isOpen, onClose]);

    // Handle downloading resume file
    const downloadRes = () => {
        const resPath = `${process.env.PUBLIC_URL}/images/Michelle_Han.pdf`;
        const link = document.createElement('a');
        link.href = resPath;
        link.download = 'Han_Michelle.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Stop rendering if popup isn't open
    if (!isOpen) return null;

    return (
        <div className='res-backdrop'>
            <div className='res-container' ref={ resRef }>
                <img src={ `${process.env.PUBLIC_URL}/images/resume_frame_blank.png` } alt='resume frame' className='res-img'/>

                <div className='res-buttons-box'>
                    <button 
                        className='res-button'
                        onClick={ () => window.open(`${process.env.PUBLIC_URL}/images/Michelle_Han.pdf`, '_blank')}
                    >
                        Preview
                    </button>

                    <button
                        className='res-button'
                        onClick={ downloadRes }
                    >
                        Download
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ResumePopup;