
export default function Entry({key, mainImg, country, mapUrl, dates, title, description}) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={mainImg}/>
            </div>
            <div className="info-container">
                <img className="marker" src="/assets/marker.jpg" alt="map marker icon"/>
                <span className="country">{country}</span>
                <a href={mapUrl}>View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{dates}</p>
                <p className="entry-text">{description}</p>
            </div>

        </article>
    )
}