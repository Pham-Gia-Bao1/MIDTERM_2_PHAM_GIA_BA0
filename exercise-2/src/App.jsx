import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState('');

  const handleContentChange = (event) => {
    setContent(event.target.value.toUpperCase());
  };

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input
        type="text"
        onChange={handleContentChange}
      />

      <p>
        <label>Here is the text in upper case</label>
        <input
          type="text"
          value={content}
          disabled
        />
      </p>
    </main>
  );
}

export default App;
