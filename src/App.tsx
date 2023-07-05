import React, { useState } from "react";
import { Data } from "./data";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";
import "./styles.css";
const LeftPanel = ({ onItemClick }) => {
  return (
    <div className="left-panel">
      <h2>List of Items</h2>
      <List>
        {Data.map((item) => (
          <ListItem
            key={item.id}
            button
            onClick={() => onItemClick(item)}
            className="list-item"
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const RightPanel = ({ selectedItem }) => {
  return (
    <div className="right-panel">
      <h2>CARD</h2>
      {selectedItem ? (
        <Card className="card">
          <CardContent>
            <Typography variant="h6" component="h3">
              ID: {selectedItem.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {selectedItem.name}
            </Typography>
            <Typography color="textSecondary" component="p">
              Price: ${selectedItem.price}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography>No item selected</Typography>
      )}
    </div>
  );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(
    Data.find((item) => item.id === 3)
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container">
      <LeftPanel onItemClick={handleItemClick} />
      <RightPanel selectedItem={selectedItem} />
    </div>
  );
};

export default App;
