import './DisplayCase.css';

function DisplayCase({ popUpImg, TAG_BACK }) {
    
    return (
        <div className='display-case'>
            <img src={ process.env.PUBLIC_URL + '/images/display_case.png' } alt='display case' className='display-img'/>

            <div className='shelf-top'>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/java_tag.png', 0) }
                >    
                    <img src={ `${process.env.PUBLIC_URL}/images/java_button.PNG` } alt='java tiramisu' className='lang-img'/>
                </button>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/python_tag.png', 1) }
                >
                        <img src={ `${process.env.PUBLIC_URL}/images/python_button.PNG` } alt='python macarons' className='lang-img'/>
                </button>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/swift_tag.png', 2) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/swift_button.PNG` } alt='swift lemon tart' className='lang-img'id='swift-lemon'/>
                </button>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/kotlin_tag.png', 3) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/kotlin_button.PNG`} alt='kotlin mille feuille' className='lang-img'/>
                </button>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/javascript_tag.png', 4) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/javascript_button.PNG` } alt='javascript cupcake' className='lang-img'/>
                </button>
            </div>


            <div className='shelf-mid'>
                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/html_tag.png', 5) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/html_button.PNG` } alt='html cookies' className='lang-img'/>
                </button>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/css_tag.png', 6) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/css_button.PNG` } alt='css parfait' className='lang-img' id='css-parfait'/>
                </button>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/mysql_tag.png', 7) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/mysql_button.png` } alt='mysql cheesecake' className='lang-img' id='mysql-cheesecake'/>
                </button>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/php_tag.png', 8) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/php_button.png` } alt='php banana bread' className='lang-img' id='php-banana'/>
                </button>

                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/c_sharp_tag.png', 9) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/c_sharp_button.PNG` } alt='c sharp black forrest cake' className='lang-img'/>
                </button>

            </div>

            <div className='shelf-bottom'>
                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/c_tag.png', 10) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/c_button.PNG` } alt='c scones' className='lang-img'/>
                </button>
    
                <button 
                    className='lang-buttons'
                    onClick={ () => popUpImg('/images/c_plus_plus_tag.png', 11) }
                >
                    <img src={ `${process.env.PUBLIC_URL}/images/c_plus_plus_button.PNG` } alt='c plus plus flan' className='lang-img' id='c-plus-plus-flan'/>
                </button>
            </div>
        </div>
    );
}

export default DisplayCase;