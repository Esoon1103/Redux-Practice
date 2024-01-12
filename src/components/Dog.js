import React, { useState, useContext, useEffect } from "react";
import {DogContext} from "../providers/dogProvider"
import '../styles/dog.css';
import DogCard from "./DogCard"

const Dog = () => {
    const APIURL = "https://api.thedogapi.com/v1/breeds"
    const [dogs, setDogs] = useState([])
    const {dispatch} = useContext(DogContext);

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const respond = await fetch(APIURL);
                const data = await respond.json();

                if (data) {
                    setDogs(data)
                }
            } catch (error) {
                console.error("Error fetching dog data:", error);
            }
        }

        fetchDogData()
        console.log("Import Dog Data")
    }, [])

    const addFavouriteDog = (e, dog) => {
        e.preventDefault()

        const newFavouriteDog = {
            id: dog.id,
            name: dog.name,
            life_span: dog.life_span,
            bred_for: dog.bred_for,
            temperament: dog.temperament,
            origin: dog.origin,
        }

        dispatch({
            type: "ADD_FAVOURITE_DOG",
            favouriteDog: newFavouriteDog
        })

    }

    return (
        <section className="p-8 max-w-8xl mx-auto">
            <div className='container mx-auto mt-5 mb-5'>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4 my-10 lg:my-20">
                    {dogs.map((dog) => (
                        <DogCard key={dog.id} dog={dog} addFavouriteDog={addFavouriteDog} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Dog;
