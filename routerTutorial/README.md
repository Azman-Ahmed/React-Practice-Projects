- At first install the react-router Package (used Version 6.4)
```bash
npm install react-router-dom@6.4
```

## Method 1: (Old One)
Here The BrowserRouter is used inside the render scope.

```bash
return (
    <BrowserRouter>
      <NavLink to="/about">Areh</NavLink>
      <NavLink to="/">Ohho</NavLink>
      <main>
          <Routes>
          <Route path='/' element={<One/>}/>
            <Route path='/about' element={<Onet/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  )
```

## Method 2: (new One)