import React, {useContext} from "react";
import {DogContext} from "../providers/dogProvider"

const FavouriteDog = () => {
    const {state, dispatch} = useContext(DogContext);

    const removeFavouriteDog = (e, dog) => {
        e.preventDefault()

        dispatch({
            type: "REMOVE_FAVOURITE_DOG",
            id: dog.id
        })
    }

    return (
        <section className="p-8 max-w-8xl mx-auto">
            <div className='container mx-auto mt-5 mb-5'>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4 my-10 lg:my-20">
                    {state.favouriteDogs.map((dog) => (
                        <article key={dog.id} className='dog-card p-4 rounded relative'>
                            <div className="flex flex-col h-full">
                                <div className="flex-grow">
                                    <h3 className='text-lg font-bold mt-4'>{dog.name || 'N/A'}</h3>
                                    <p>Life Span: {dog.life_span || 'N/A'}</p>
                                    <p>Origin: {dog.origin || 'N/A'}</p>
                                    <p>Bred: {dog.bred_for || 'N/A'}</p>
                                    <p>Temperament: {dog.temperament || 'N/A'}</p>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <form onSubmit= {(e) => removeFavouriteDog(e, dog)}>
                                        <button type='submit' size="small">Remove from Favourite</button>
                                    </form>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FavouriteDog;