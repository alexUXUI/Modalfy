# Modalfy

> This project was insipred by the need for a modal component that unmounts when it is closed.

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
    id={10}
    // lifecycle methods expose the undelying modal exponent, making it available to you in you custom callback functions
    mounted={modal => { 
      // do something async, 
      modal.setState({ loading: true }, () => { //setState on modal's state
        setTimeout(() => {
          modal.setState({ loading: false })
        }, 1000)
      })
    }}
    updated={modal => console.log(`Updated: ${modal}`)}
    unmounted={modal => console.log(`Unmounted: ${modal}`)}
    content={<div>Content to Modalfy</div>}
    loadingIndicator={<div>loading...</div>}
  />
```
> Modalfy makes the undelying modal component available to your custom call back functions!

3. Properties

Add your own bahvior with functions that are passed to the react lifecycle methods of Modalfy.

| property | type | description
|---|---| ---|
| id | Number | unique id |
| mounted | Function | `componentDidMount` |
| updated | Function | `componentDidUpdate` |
| unmouted | Function | `componentWillUnmount` |
| content | JSX | the content of your modal |

> All of the properties are optional, and will fallback to defualts

4. Styling

```javascript
@todo: make styles extendable
```

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

## Contributing

Contributions are more than welcome!

> This project uses [react-npm-component-starter](https://github.com/markusenglund/react-npm-component-starter) for it's NPM package generating boilerplate code. Many thanks to [@markusenglund](https://github.com/markusenglund)

The stuff you need to start extedning Modalfy is located in `/npm`

```shell
$ cd npm
$ yarn dev
// make you changes in src/lib
$ yarn docs:prod // build node module
// make a PR against this repo with you changes 🎉
```

> There is another demo app using Modalfy in the npm folder. Use `yarn dev` to see it running on `localhost:8000`
