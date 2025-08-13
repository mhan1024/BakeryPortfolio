import './Loading.css';

function Loading() {
    return (
        <div className="loading-container">
            <img src={ `${process.env.PUBLIC_URL}/images/bread_loading.png` } alt='bread loading' className='loading-img'/>
            <h3 className='loading-text'>Rolling out the perfect portfolio...</h3>
        </div>
    );
}

export default Loading;