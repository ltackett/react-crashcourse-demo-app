import React from 'react'
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';
import { ResultResource } from './ResultResource'
import { StarshipData } from './StarshipData'
import { GenericData } from './GenericData'

export const ResultPage = (props) => {
  const [result, setResult] = React.useState({})
  const url = `https://swapi.co/api${props.location.pathname}`

  React.useEffect(() => {
    fetch(url)
      .then((res) => {
        res.json().then(data => {
          // Put the data into app state
          setResult({ data })
      })
      .catch(() => {
        throw new Error()
      })
  })}, [])
  
  return (
    <>
      {result.data ? (
        <>
          {console.log(result.data)}
          <header>
            <p>{result.data.name}</p>
          </header>
          <main>
            <dl>
              <dt>Height:</dt>
              <dd>{result.data.height}</dd>

              <dt>Mass:</dt>
              <dd>{result.data.mass}</dd>
            </dl>

            <section>
              <h4>Starships</h4>
              {result.data.starships.map(starship =>
                <ResultResource url={starship} displayWith={StarshipData} />
              )}
            </section>

            <section>
              <h4>Films</h4>
              {result.data.films.map(film =>
                <ResultResource url={film} displayWith={GenericData} />
              )}
            </section>
            
          </main>
        </>
      ) : (
        <Spinner label="Loading..." />
      )}
    </>
  )
}