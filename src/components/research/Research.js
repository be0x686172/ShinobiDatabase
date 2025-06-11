import './style.scss';

const Research = ({value}) => {

    const sendValueToParent = () => {
        value(document.querySelector('input').value);
    };

    return (
        <div className='Research'>
            <div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder='Rechercher un shinobi' />
            </div>
            <button onClick={sendValueToParent}>Entrer</button>
        </div>
    );
};

export default Research;