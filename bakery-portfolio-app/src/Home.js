import { React, useEffect, useState, useRef } from 'react';
import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LetterPopup from './components/LetterPopup';
import DisplayCase from './components/DisplayCase';
import TagPopup from './components/TagPopup';
import Loading from './components/Loading';
import useAllImages from './hooks/useAllImages';

function Home() {
    const [ letter, setLetter ] = useState(false);
    const [ blur, setBlur ] = useState(false);
    const [ tagImg, setTagImg ] = useState(null);
    const [ frontTag, setFrontTag ] = useState(null);
    const [ showFront, setShowFront ] = useState(true);
    const [ currIndex, setCurrIndex ] = useState(0);

    const blurRef = useRef(null);
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

    useEffect(() => {
        function handleBlur(event) {
            if (blurRef.current && !blurRef.current.contains(event.target)) {
                setBlur(false);
            }
        }

        if (blur) {
            document.addEventListener('mousedown', handleBlur);
        } else {
            document.removeEventListener('mousedown', handleBlur);
        }

        return () => {
            document.removeEventListener('mousedown', handleBlur)
        };

    }, [blur]);

    const closePopUp = () => {
        setBlur(false);
        setShowFront(true);
    }

    const popUpImg = (frontPath, index) => {
        setFrontTag(frontPath);
        setTagImg(frontPath);
        setBlur(true);
        setCurrIndex(index);
        setShowFront(true);
    }

    const flipTag = () => {
        setShowFront(prevShowFront => {
            const newShowFront = !prevShowFront;
            setTagImg(newShowFront ? frontTag : TAG_BACK);
            return newShowFront;
        });
    } 

    const changeTag = (curr, direction) => {
        const newIndex = (direction === 'prev') ? ((curr === 0) ? NUM_TAGS - 1 : curr - 1) : ((curr === NUM_TAGS - 1) ? 0 : curr + 1);

        popUpImg(tags[newIndex], newIndex);
    }

    if (loading) return <Loading />;

    return (
        <div className="Home">
           <div className='left-background'></div>
           <div className='center-background'>

                <TagPopup blur={ blur } currIndex={ currIndex } tagImg={ tagImg } showFront={ showFront } TAG_BACK={ TAG_BACK } flipTag={ flipTag } changeTag={ changeTag } closePopUp={ closePopUp }/>

                <LetterPopup isOpen={ letter } onClose={ () => setLetter(false) } />

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

                <DisplayCase popUpImg={ popUpImg }  TAG_BACK={ TAG_BACK }/>


           </div>
           <div className='right-background'></div>
        </div>
    )
}

export default Home;