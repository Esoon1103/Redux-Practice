const DogCard = (props) => {

// or do this
// const {dog, addFavouriteDog} = props

    return (
        <article key={props.dog.id} className='dog-card p-4 rounded relative'>
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <h3 className='text-lg font-bold mt-4'>{props.dog.name || 'N/A'}</h3>
                    <p>Life Span: {props.dog.life_span || 'N/A'}</p>
                    <p>Origin: {props.dog.origin || 'N/A'}</p>
                    <p>Bred: {props.dog.bred_for || 'N/A'}</p>
                    <p>Temperament: {props.dog.temperament || 'N/A'}</p>
                </div>
                <div className='flex justify-center mt-2'>
                    <form onSubmit={(e) => props.addFavouriteDog(e, props.dog)}>
                        <button type='submit' size="small">Add to Favourites</button>
                    </form>
                </div>
            </div>
        </article>
    );
}

export default DogCard