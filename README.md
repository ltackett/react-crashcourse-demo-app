This is an example React app that shows:
* Statefdul functional components
* Application state
* Hooks (`useState`, `useEffect`, and `useContext`)
* Context providers and consumers
* Non-rendering (data-only) components
* API integration

# Getting started

In the terminal:

```
git clone https://github.com/ltackett/react-crashcourse-demo-app.git
cd react-crashcourse-demo-app
npm install
npm start
```

## Component Tree

```
<App>
  <ContextProvider>
    <Router>
      <API />

      <SearchPage>
        <Search />
      </SearchPage>

      <ResultsPage>
        <Results />
        <Pagination />
      </ResultsPage>
    </Router>
  </ContextProvider>
</App>
