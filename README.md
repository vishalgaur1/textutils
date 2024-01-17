# React Textform Component

A simple React component for manipulating text. This component allows users to perform various text operations such as converting to uppercase, converting to lowercase, clearing text, copying text to the clipboard, and removing extra spaces.

## Features

- Convert text to UPPERCASE.
- Convert text to lowercase.
- Clear the text area.
- Copy text to the clipboard.
- Remove extra spaces from the text.

## Usage

### Installation

Install the component in your React project using npm or yarn:

```bash
npm install react-textform
# or
yarn add react-textform
```
# Import and Use


import React, { useState } from 'react';
import Textform from 'react-textform';

function App() {
  const [mode, setMode] = useState('light');

  return (
    <div>
      <h1>Your React App</h1>
      <Textform heading="Text Manipulation" mode={mode} />
    </div>
  );
}

export default App;

## Props

    heading: The heading for the text manipulation section.
    mode: The mode for the component, can be 'light' or 'dark'. Changes background and text color accordingly.

## Styling

The component supports two styles based on the mode prop:

    Light Mode: White background with black text.
    Dark Mode: Grey background with white text.
