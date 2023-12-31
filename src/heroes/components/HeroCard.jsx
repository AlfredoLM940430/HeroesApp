
import {Link} from 'react-router-dom';

const CaracteresHero = ({alter_ego, characters}) => {
    if(alter_ego === characters) {
        return (<></>)
    }
    return <p className="card-text">{characters}</p>
}

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
    
    const heroImage = `/assets/heroes/${id}.jpg`;

    return (
        <>
            <div className="col animate__animated animate__fadeIn">
                <div className="card">
                    <div className="row no-gutters">
                        
                        <div className="col-4" >
                            <img className="card-img" alt={superhero} src={heroImage} />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>
                                {
                                    <CaracteresHero characters={characters} alter_ego={alter_ego}/>
                                }

                                <p className="card-text">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>

                                <Link to={`/hero/${id}`}>
                                    Mas..
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)}