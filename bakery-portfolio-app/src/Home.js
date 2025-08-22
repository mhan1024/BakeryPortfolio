import { React, useEffect, useState, useRef } from 'react';
import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LetterPopup from './components/LetterPopup';
import DisplayCase from './components/DisplayCase';
import TagPopup from './components/TagPopup';
import ResumePopup from './components/ResumePopup';
import Loading from './components/Loading';
import useAllImages from './hooks/useAllImages';

function Home() {
    const [ letter, setLetter ] = useState(false);
    const [ res, setRes ] = useState(false);
    const [ blur, setBlur ] = useState(false);
    const [ tagImg, setTagImg ] = useState(null);
    const [ frontTag, setFrontTag ] = useState(null);
    const [ showFront, setShowFront ] = useState(true);
    const [ currIndex, setCurrIndex ] = useState(0);

    // Creates a box that will hold a DOM element 
    const blurRef = useRef(null);
    // Preloads the images upon opening app
    const loading = useAllImages();
    const TAG_BACK = '/images/tag_back.png';
    const NUM_TAGS = 12;
    const tags = {
        0 : ['/images/java_tag.png'],
        1 : ['/images/python_tag.png'],
        2 : ['/images/swift_tag.png'],
        3 : ['/images/kotlin_tag.png'],
        4 : ['/images/javascript_tag.png'],
        5 : ['/images/html_tag.png'],
        6 : ['/images/css_tag.png'],
        7 : ['/images/mysql_tag.png'],
        8 : ['/images/php_tag.png'],
        9 : ['/images/c_sharp_tag.png'],
        10 : ['/images/c_tag.png'],
        11 : ['/images/c_plus_plus_tag.png']
    };

    // Run this effect when the blur state changes, like when a popup appears or when it closes
    useEffect(() => {
        function handleBlur(event) {
            // Checks if user clicked outside of the blurRef box
            if (blurRef.current && !blurRef.current.contains(event.target)) {
                // If so, turn off the blur effect by setting setBlur to false
                setBlur(false);
            }
        }

        // If blur is true, start listening for mouse clicks and for every mouse click, run handleBlur
        if (blur) {
            document.addEventListener('mousedown', handleBlur);
        } else {
            // Otherwise, stop listening to mouse clicks
            document.removeEventListener('mousedown', handleBlur);
        }
        
        // Ensure that the event listener is removed when the effect stops
        return () => {
            document.removeEventListener('mousedown', handleBlur)
        };

    }, [blur]);

    // When closing the popup, stop the blur effect and ensure that the front of the programming lang tag is showing whenever a tag popup is opened
    const closePopUp = () => {
        setBlur(false);
        setShowFront(true);
    }

    // Handles the popup appearing with the correct tag when the user clicks on a certain dessert button
    const popUpImg = (frontPath, index) => {
        // Save the image path of the tag's front for when the user flips the tag
        setFrontTag(frontPath);
        // Save the image of the tag's front as this will be displayed to the user
        setTagImg(frontPath);
        // Turn on the blur effect and enable the "close on clicking outside the tag"
        setBlur(true);
        // Save the current tag that is being shown -> useful for previous and next buttons
        setCurrIndex(index);
        // Ensure that the front of the tag is displayed when popup appears
        setShowFront(true);
    }

    // Handles flipping the tag when the user clicks on the flip button 
    const flipTag = () => {
        // Take the current showFront state and flip it to reflect the new state
        setShowFront(prevShowFront => {
            const newShowFront = !prevShowFront;
            // If the new state is true, then the front of the tag should be displayed, otherwise the back should be shown
            setTagImg(newShowFront ? frontTag : TAG_BACK);
            // Update the showFront state so that the UI renders and updates
            return newShowFront;
        });
    } 

    // Handles showing the correct tag when the user clicks on either the previous or next buttons
    const changeTag = (curr, direction) => {
        // Calculate the tag's index that should appear when either button is clicked
        const newIndex = (direction === 'prev') ? ((curr === 0) ? NUM_TAGS - 1 : curr - 1) : ((curr === NUM_TAGS - 1) ? 0 : curr + 1);
        // Show the new tag based on the new index
        popUpImg(tags[newIndex], newIndex);
    }

    // If images are still pre-loading, then show the loading screen
    if (loading) return <Loading />;

    return (
        <div className="Home">
           <div className='left-background'></div>
           <div className='center-background'>

                {/* Set up for how the tag popup's layout should appear */}
                <TagPopup blur={ blur } currIndex={ currIndex } tagImg={ tagImg } showFront={ showFront } TAG_BACK={ TAG_BACK } flipTag={ flipTag } changeTag={ changeTag } closePopUp={ closePopUp }/>

                {/* Set up for how the letter popup's layout should appear */}
                <LetterPopup isOpen={ letter } onClose={ () => setLetter(false) } />

                <ResumePopup isOpen={ res } onClose={ () => setRes(false) } />

                <div className='barista'>
                    <img src={ `${process.env.PUBLIC_URL}/images/barista.png` } alt='barista' className='barista-img'/>
                </div>

                <div className='coffee-shelf'>
                    <img src={ `${process.env.PUBLIC_URL}/images/shelf.png` } alt='coffee shelf' className='coffee-shelf-img'/>

                    <div className='coffee-buttons'>
                        <button 
                            className='socials-buttons'
                            onClick={ () => setLetter(true) }    
                        >
                            <img src={ `${process.env.PUBLIC_URL}/images/email_button.PNG` } alt='email coffee' className='socials-img'/>
                        </button>

                        <button 
                            className='socials-buttons'
                            onClick={() => window.open('https://github.com/mhan1024', '_blank')}
                        >
                            <img src={ `${process.env.PUBLIC_URL}/images/github_button.PNG` } alt='github coffee' className='socials-img'/>
                        </button>

                        <button 
                            className='socials-buttons'
                            onClick={() => window.open('https://www.linkedin.com/in/michelle-han-2a2629279/', '_blank')}
                        >
                            <img src={ `${process.env.PUBLIC_URL}/images/linkedin_button.PNG` } alt='linkedin coffee' className='socials-img'/>
                        </button>
                    </div>

                    
                
                </div>

                <div className='resume-box'>
                    <button 
                        className='resume-frame-button'
                        onClick={ () => setRes(true) }    
                    >
                        <img src={ `${process.env.PUBLIC_URL}/images/resume_frame.png` } alt='resume frame' className='resume-frame-img'/>
                    </button>
                </div>
                

                

                {/* Set up for how the display case layout should appear */}
                <DisplayCase popUpImg={ popUpImg }  TAG_BACK={ TAG_BACK }/>


           </div>
           <div className='right-background'></div>
        </div>
    )
}

export default Home;