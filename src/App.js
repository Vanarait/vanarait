import React, { createContext, useContext } from 'react';

// Create a context with a default value for basename
const MyContext = createContext({ basename: '/' });

function MyComponent() {
  // Use useContext to access the context
  const { basename } = useContext(MyContext);

  // Your component logic here, using the basename
  return (
    <div>
      Base Name: {basename}
    </div>
  );
}

function App() {
  // Provide the context with the desired basename value
  return (
    <MyContext.Provider value={{ basename: '/myapp' }}>
      <MyComponent />
    </MyContext.Provider>
  );
}

export default App;
