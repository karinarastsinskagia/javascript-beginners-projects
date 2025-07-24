import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"

export default function App() {

    const entryElements = data.map(function (entry, index) {

        return <Entry
                    key={index}
                    mainImg={entry.img.src}
                    country={entry.country}
                    mapUrl={entry.googleMapsLink}
                    dates={entry.dates}
                    title={entry.title}
                    description={entry.text}
                    //{...entry} : use spread operator as alternative
                />
    })

    return (
        <>
            <Header/>
            <main className="container">
                {entryElements}
            </main>
        </>

    )
}