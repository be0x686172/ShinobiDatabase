import './style.scss';

const Card = (props) => {
    return (
        <div className='Card'>
            <div>
                <img className='backgroundCard' src={`assets/images/background_card7.webp`} alt='' />
                <img className='character' src={props.character.images[0].image_url} alt='' />
            </div>
            <h3>{props.character.name}</h3>
            <div className='informations'>
                {props.character.village ? (<p>🏡 Village: {props.character.village.name.split(' ')[0]}</p>) : ''}
            </div>
        </div>
    );
};

export default Card;