import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  const items = ["java", "C#", "C++", "C", "React", "Vue", "JS"];
  const [selectedItem, setSelectedItem] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {/* <div className={selectedItem === "" ? "visually-hidden" : ""}> */}
      {showAlert && (
        <Alert isShow={showAlert} hideAlert={hideAlert}>
          {/* <span>{selectedItem}</span> */}
          {selectedItem}
        </Alert>
      )}
      {/* </div> */}
      <ListGroup
        items={items}
        heading="Languages"
        onSelectItem={handleSelectItem}
      />
      <Button
        children="Click Me!"
        onClick={() => alert("Hello, You clicked button")}
      />
    </div>
  );
}

export default App;
