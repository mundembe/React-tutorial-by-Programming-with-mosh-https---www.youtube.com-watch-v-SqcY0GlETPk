import { useState } from "react";

interface ListGroupProps {
    items: String[];
    heading: String;
    onSelectedItem: (item: String) => void
}


function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {

    let [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectedItem(item)
                        }}
                    >
                        {item}
                    </li>))}
            </ul>
        </>
    );
}

export default ListGroup