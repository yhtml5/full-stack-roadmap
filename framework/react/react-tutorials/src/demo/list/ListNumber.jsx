import  React from 'react'

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Correct! Key should be specified inside the array.
//         <ListItem key={number.toString()}
//                   value={number} />
//     )
//     console.log('NumberList', listItems)
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// }

//JSX allows embedding any expressions in curly braces so we could inline the map() result
function NumberListEmbed(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number} />
            )}
        </ul>
    );
}

export default NumberListEmbed