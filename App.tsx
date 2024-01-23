// import Message from "./message";

// import ListGroup from "./components/ListGroup";
// import "./App.css";
// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// import Alert from "./components/Alert";
// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";

// const App = () => {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
//       )}
//       <Button color="dark" onClick={() => setAlertVisibility(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// };

// export default App;

// import { BsCalendar2Fill } from "react-icons/bs";

// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <BsCalendar2Fill color="blue" size="70" />
//     </div>
//   );
// };

// export default App;

// import Like from "./components/Like";

// const App = () => {
//   return (
//     <div>
//       <Like onClick={() => console.log("clicked")} />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [isVisible, setVisibility] = useState(false);
//   const [isApprrove, setApprove] = useState(true);
//   let count = 0;

//   const handleClick = () => {
//     setVisibility(true);
//     count++;
//     console.log(isVisible);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Show</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [pesron, setPerson] = useState({
//     firstname: "",
//     lastName: "",
//     contact: {
//       address: {
//         street: "",
//       },
//     },
//   });

//   const [isLoading, setloading] = useState(false);
//   return <div>App</div>;
// }

// export default App;
// import React from "react";
// import Message from "./components/Message";

// function App() {
//   return (
//     <div>
//       <Message />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, price: 7 }); // java spread operator copies properties from object to another
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

// updating nested objects
// import React, { useState } from "react";

// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "Aexandria",
//       zipcode: 77016,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipcode: 22204 },
//     });
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

// updating arrays

// import React, { useState } from "react";

// function App() {
//   const [tags, setTags] = useState(["happy", "cheerful"]);

//   const handleClick = () => {
//     //Add
//     setTags([...tags, "smiling"]);

//     //remove
//     setTags(tags.filter((tag) => tag !== "happy"));

//     //update
//     setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

// updating arrays of objects
// import React, { useState } from "react";

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs(bugs.map(bug => bug.id===1 ? {...bug, fixed: true} : bug))
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import produce from "immer";

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed === true;
//       })
//     );
//   };
//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { Like } from "./components/Like";

// function App() {
//   return (
//     <div>
//       <Like onClick={() => console.log("Clicked")} />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";

// function App() {
//   const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
//   return (
//     <div>
//       <Navbar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });
//   const handleClick = () => {
//     setGame({
//       ...game,
//       player: { ...game.player, name: "Sam" },
//     });
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [pizza, setPizza] = useState({
//     name: "Spicy Pepperoni",
//     toppings: ["Mushrooms"],
//   });
//   const handleClick = () => {
//     setPizza({
//       ...pizza,
//       toppings: [...pizza.toppings, "cheese"],
//     });
//   };
//   return (
//     <div>

//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "product1", quantity: 1 },

//       { id: 2, title: "product2", quantity: 1 },
//     ],
//   });
//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import ExpandableText from "./components/ExpandableText";

// function App() {
//   return (
//     <div>
//       <ExpandableText maxChars={10}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum natus
//         in vero atque voluptatem itaque voluptatum quas deserunt dolorum
//         explicabo, dolorem soluta facilis impedit odit, sint eaque possimus ad
//         cupiditate ipsam laboriosam excepturi cumque eveniet corporis. Quis
//         saepe non odio adipisci fugit hic ex quos, placeat veniam libero
//         doloremque dolores ut inventore magnam quaerat dolorem accusantium ad
//         laboriosam error aliquam tenetur maiores sed perferendis. Soluta, rerum
//         quaerat quisquam expedita facilis autem facere optio deleniti dolores
//         amet tempora laudantium quia architecto nemo iste eaque sit? Laboriosam,
//         alias aspernatur. Doloribus vitae esse provident temporibus voluptas
//         molestiae nulla dolorum tempore unde odio.
//       </ExpandableText>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Form from "./components/Form";

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedcategory, setSelectedcategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const visibleExpenses = selectedcategory
    ? expenses.filter((e) => e.category === selectedcategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedcategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
