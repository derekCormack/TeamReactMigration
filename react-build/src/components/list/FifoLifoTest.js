// import dblLinkedList from './List.js'
import React from 'react';
import { render } from '@testing-library/react';
import list from './FifoLifoComp';

test ('Our pancake logic'), () => {
        console.log("hello world!");
        console.log(list.hello());
};



 




// test('renders Linked list link', () => {
//        const { getByText } = render(<List/>);
//        const linkElement = getByText(/learn react/i);
// //     //   expect(linkElement).toBeInTheDocument();
//     });



   

    











//larry---------------------------


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/pipe linked list/i);
  expect(linkElement).toBeInTheDocument();
});


// let list = new dblLinkedList()

// list.append(1)

// list.prepend(1)

// list.search(5)



// test('Check ', () => {

//     const newCity = new functions.city(1, "Bobsville", 13, 15, 1000)

//     expect(newCity.name).toBe("Bobsville");
//     expect(newCity.population).toBe(1000);
//     expect(newCity.latitude).toBe(13);
//     expect(secondCity.howBig()).toBe("City");
//     expect(secondCity.show()).toBe("Tisdale has 100002 people at position 167/16");
// });




