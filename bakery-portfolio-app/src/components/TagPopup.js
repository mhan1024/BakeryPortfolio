import { React } from 'react';
import './TagPopup.css';

function TagPopup({ blur, currIndex, tagImg, showFront, TAG_BACK, flipTag, changeTag, closePopUp }) {
    if (!blur) return null;

    // title :
    // desc :
    // techStack :
    // repo :

    const projs = {
        0 : [{
                title : 'JustBaked', 
                desc : 'A full-stack Java and React app for placing, managing, and tracking bakery orders in real time.',
                techStack: ['Eclipse', 'MySQL Server', 'React.js', 'Node.js', 'HTML/CSS', 'Spring Boot', 'Hibernate/JPA', 'Azure Data Studio'], 
                repo : 'https://github.com/mhan1024/justbaked'
             }
            ],
        1 : [{
                title : 'InDevA', 
                desc : 'An AI model that generates feedback for written tutorials.',
                techStack: ['Jupyter Notebook', 'Anaconda'], 
                repo : 'https://github.com/mhan1024/InDevA'
            }],
        2 : [{}],
        3 : [{
                title : 'Application Tracker', 
                desc : 'An Android app enabling users to track internship and job applications from mobile devices.',
                techStack: ['Firebase Database', 'Android Studio'], 
                repo : 'https://github.com/mcady1/ApplicationTrackerRevised'
            }],
        4 : [{
                title : 'Application Tracker (Web)', 
                desc : 'A web app version of a job applications tracker.',
                techStack: ['MongoDB', 'Node.js', 'Express', 'HTML/CSS'], 
                repo : 'https://github.com/mhan1024/applicationTrackerWebApp'
            }],
        5 : [{}],
        6 : [{}],
        7 : [{}],
        8 : [{}],
        9 : [{
                title : 'Grapple Game', 
                desc : 'A space-themed first-person platformer game with two levels.',
                techStack: ['Unity'], 
                repo : 'https://github.com/mhan1024/GrappleGame'
            }],
        10 : [{
                title : 'Bank and ATM System', 
                desc : 'A simple banking system simulation program.',
                techStack: ['Cybersecurity', 'Cryptography'], 
                repo : 'https://github.com/mhan1024/ATM-Security?tab=readme-ov-file'
            }],
        11 : [{}],
    }

    return (
        <div className='tag-background'>
            <div className='tag'> 
                <button 
                    className='prev-button'
                    onClick={ () => changeTag(currIndex, 'prev') }
                >
                    <i className="bi bi-arrow-left-circle-fill"></i>
                </button>

                <button 
                    className='close-button'
                    onClick={ closePopUp }
                >
                    <i className="bi bi-x-lg"></i>
                </button>

                <div className='tag-container'>
                    <img src={ process.env.PUBLIC_URL + tagImg } alt='tag' className='tag-img'/>
                    { tagImg === TAG_BACK && projs[currIndex].length > 0 &&  projs[currIndex][0].title && <div className='tag-text'>
                        {
                            projs[currIndex].map((p, i) => (
                                <div key={ i } className='proj-info'>
                                    <h3><a href={p.repo} target='_blank' rel="noopener noreferrer">{p.title}</a></h3>
                                    <p>{p.desc}</p>
                                    <p>TechStack: {p.techStack.join(', ')}</p>
                                    
                                </div>
                            ))
                        }
                    </div>}
                </div>


                <button 
                    className='flip-button'
                    onClick= { flipTag }
                >
                    <i className="bi bi-arrow-repeat"></i>
                </button>

                <button
                    className='next-button'
                    onClick={ () => changeTag(currIndex, 'next') }
                >
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
                
            </div>
        </div>
    );
}

export default TagPopup;