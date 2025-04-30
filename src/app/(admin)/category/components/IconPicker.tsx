import React, { useState } from "react";
import {
  Package,
  Box,
  ShoppingCart,
  Tag,
  Clipboard,
  File,
  CreditCard,
  Archive,
  Plus,
  Minus,
  Edit,
  Trash,
  Check,
  Search,
  Filter,
  Save,
  Download,
  Upload,
  Home,
  Menu,
  Settings,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Loader,
} from "lucide-react";

const iconList = [
  { name: "Package", component: <Package /> },
  { name: "Box", component: <Box /> },
  { name: "ShoppingCart", component: <ShoppingCart /> },
  { name: "Tag", component: <Tag /> },
  { name: "Clipboard", component: <Clipboard /> },
  { name: "File", component: <File /> },
  { name: "CreditCard", component: <CreditCard /> },
  { name: "Archive", component: <Archive /> },
  { name: "Plus", component: <Plus /> },
  { name: "Minus", component: <Minus /> },
  { name: "Edit", component: <Edit /> },
  { name: "Trash", component: <Trash /> },
  { name: "Check", component: <Check /> },
  { name: "Search", component: <Search /> },
  { name: "Filter", component: <Filter /> },
  { name: "Save", component: <Save /> },
  { name: "Download", component: <Download /> },
  { name: "Upload", component: <Upload /> },
  { name: "Home", component: <Home /> },
  { name: "Menu", component: <Menu /> },
  { name: "Settings", component: <Settings /> },
  { name: "CheckCircle", component: <CheckCircle /> },
  { name: "XCircle", component: <XCircle /> },
  { name: "AlertTriangle", component: <AlertTriangle /> },
  { name: "Clock", component: <Clock /> },
  { name: "Loader", component: <Loader /> },
];

type IconItem = {
  name: string;
  component: any;
};

const InventoryApp = () => {
  const [selectedIcon, setSelectedIcon] = useState<IconItem | null>(null);
  const handleIconClick = (icon: IconItem) => {
    setSelectedIcon(icon);
  };

  return (
    <div>
      <h1>Inventory App - Icon Picker</h1>
      <div>
        <h3>Select an Icon for the Inventory Item</h3>
        <div style={{ marginBottom: "20px" }}>
          {selectedIcon ? (
            <div>
              <h4>Selected Icon:</h4>
              {selectedIcon.component}
            </div>
          ) : (
            <p>No icon selected</p>
          )}
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {iconList.map((icon) => (
          <div
            key={icon.name}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "50px",
              textAlign: "center",
            }}
            onClick={() => handleIconClick(icon)}
          >
            {icon.component}
            <div style={{ fontSize: "10px", wordBreak: "break-word" }}>
              {icon.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryApp;
