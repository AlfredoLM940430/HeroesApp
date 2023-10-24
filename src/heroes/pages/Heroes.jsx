import {useParams, Navigate, useNavigate} from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const Heroes = () => {

    const {id} = useParams();
    const hero = useMemo(() => getHeroById(id), [id]); 

    const navigate = useNavigate();

    const onReturn = () => {
        navigate(-1);
    }

    if(!hero) {
        return <Navigate to={'/'}/>
    }

    return (
        <>
            <div className="row mt-5 container">
                <div className="col-4">
                    <img className="img-thumbnail animate__animated animate__fadeInLeft" src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} />
                </div>

                <div className="col-8">
                    <h3>{hero.superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego}</li>
                        <li className="list-group-item"> <b>Publisher: </b> {hero.publisher}</li>
                        <li className="list-group-item"> <b>Primera Apariencia: </b> {hero.first_appearance}</li>
                    </ul>
                    <h5 className="mt-3">Characters</h5>
                    <p>{hero.characters}</p>
                    <button className="btn btn-primary ml-5" onClick={onReturn}>Regresar</button>
                </div>
            </div>
        </>
)}