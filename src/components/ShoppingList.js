import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem,setSearchedItem] = useState("")
  const [activeItems,setActiveItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
      setSearchedItem(event.target.value)
  }

  function handleItemFormSubmit(event) {
    event.preventDefault()
    const newItemObj = {
      id: ((activeItems.length)+1),
      name: event.target.name.value,
      category: event.target.category.value
    }
    const itemsPlusNewItem = [...activeItems,newItemObj]
    setActiveItems(itemsPlusNewItem)
  }

  const itemsToDisplay = activeItems.filter((item) => {
    if (selectedCategory === "All" && (item.name.toLowerCase()).startsWith((searchedItem).toLowerCase())===true){

    return true; }

    else if ((item.name.toLowerCase()).startsWith((searchedItem).toLowerCase())===true) {
    return item.category === selectedCategory; }
  });



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
