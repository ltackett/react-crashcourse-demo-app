import React from 'react'
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';

export const ResultResource = (props) => {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    fetch(props.url)
      .then((res) => {
        res.json().then(data => {
          // Put the data into app state
          setData(data)
      })
      .catch((err) => {
        throw new Error()
      })
  })}, [])
  
  return (
    <>
    {data ? (
      <>
      {console.log(data)}
        <header>
          <p>{data.name}</p>
        </header>
        <main>
          <props.displayWith {...data} />
        </main>
      </>
    ) : (
      <Spinner label="Loading..." />
    )}
    </>
  )
}