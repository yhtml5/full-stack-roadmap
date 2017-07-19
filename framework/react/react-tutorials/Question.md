## Qustion of React 

#### Notice
1. React encourage to extract components.
   Don't be afraid to split components into smaller components.
2. The ternary operator and Arrow function   
   `(true)? 1:2  &&  ()=>`   
3. A component should ideally only do one thing
4. Don't use state at all to build this static version.
   State is reserved only for interactivity

#### How link to img and set url
````
import url from './logo.png'
avater.url = url
````
#### Converting a Function to a Class
   
Why: This lets us use additional features such as local state and lifecycle hooks.   

You can convert a functional component like Clock to a class in five steps:
 
1. Create an ES6 class with the same name that extends React.Component.
2. Add a single empty method to it called render().
3. Move the body of the function into the render() method.
4. Replace props with this.props in the render() body.
5. Delete the remaining empty function declaration.

Function:
````
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
````
Class:
````

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
````
Result:
> <Clock date={new Date()} />


#### How to set list keys
The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.   
Most often you would use IDs from your data as keys  

When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort

````
 <li key={todo.id} />  
 <li key={index} />  
````

####  which one is state or prop

1. Is it passed in from a parent via props? If so, it probably isn't state.
2. Does it remain unchanged over time? If so, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it isn't state.

##### demo:

-[ ] The original list of products
-[x] The search text the user has entered
-[x] The value of the checkbox
-[ ] The filtered list of products









