import React from 'react'
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';

export const ResultResource = (props) => {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    async function fetchData()
    {
      let res = await fetch(props.url);
      let data = await res.json();
      setData(data);
    }

    fetchData();
  }, [])
  
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