# Simple Modal

> I just want a modal component that unmounts when it is closed. 

## Usage

1. Import `Modalfy` and place anywhere  you would like the button for the modal to appear.

```javascript
import React from 'react'
import Modalfy from 'modalfy';

<Modalfy />
```

2. Once you have the `Modalfy` component, you can configure it with some properties.

```javascript

  <Modalfy
    id={}
    mounted={}
    updated={}
    unmounted={}
  />
```

3. Properties

Add your own bahvior with functions that are passed to the react lifecycle methods of Modalfy.

| property | type | description
|---|---| ---|
| id | Number | unique id |
| mounted | Function | `componentDidMount` |
| updated | Function | `componentDidUpdate` |
| unmouted | Function | `componentWillUnmount` |

> All of the properties are optional, and will fallback to defualts

## Run the Sample App

1. This project was created with create-react-app, and uses all the regular CRA scripts.

```sh
$ git clone <this repo>
$ cd <this repo>
$ yarn install
$ yarn start
```

## Testing
```
$ yarn test
```