// src/components/PageContainer.jsx
import { useState, useRef, useEffect } from "react";
import useDashboardBuilderStore from "./state/dashboardBuilderStore";
import WidgetComponent from "./views/Blocks";

export default function PageContainer() {
  // Reference to the drop zone for position calculations
  const dropZoneRef = useRef(null);
  
  // State to track if dragging over drop zone
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  
  // Get data and actions from the store
  const { 
    widgets, 
    draggedWidgetType,
    addWidgetAtPosition,
    deselectAllWidgets
  } = useDashboardBuilderStore();

  // Allow the drop and handle drag over events
  const allowDrop = (e) => {
    e.preventDefault();
    e.nativeEvent.target.classList.add('is-dropping');
    if (!isDraggingOver) {
      setIsDraggingOver(true);
    }
  };

  // Handle drag leave
  const handleDragLeave = (e) => {
    e.nativeEvent.target.classList.remove('is-dropping');
    setIsDraggingOver(false);
  };

  // Handle drop - add widget to the dashboard
  const handleDrop = (e) => {
    e.preventDefault();
    e.nativeEvent.target.classList.remove('is-dropping');
    
    // Get the dragged widget type
    const widgetType = e.dataTransfer.getData('widgetType');
    
    if (!widgetType) {
      console.error('No widget type provided in drop');
      return;
    }
    
    // Calculate position relative to the drop zone
    const dropZoneRect = dropZoneRef.current.getBoundingClientRect();
    const position = {
      x: e.clientX - dropZoneRect.left,
      y: e.clientY - dropZoneRect.top
    };
    
    // Add the widget at the calculated position
    addWidgetAtPosition(widgetType, position);
    setIsDraggingOver(false);
  };

  // Handle click on empty area to deselect widgets
  const handleBackgroundClick = (e) => {
    // Only deselect if clicking directly on the background, not on a widget
    if (e.target === dropZoneRef.current) {
      deselectAllWidgets();
    }
  };

  return (
    <div className="w-[794px] h-[1123px] bg-white shadow-lg border border-gray-300 p-8 mx-auto my-4 flex flex-col">
      <div
        ref={dropZoneRef}
        className={`drop-zone relative w-full h-full ${isDraggingOver ? 'drag-over bg-blue-50' : ''}`}
        onDrop={handleDrop}
        onDragOver={allowDrop}
        onDragLeave={handleDragLeave}
        onClick={handleBackgroundClick}
      >
        {/* Render all widgets from the store */}
        {JSON.stringify(widgets)}
        
        {/* Optional dropzone helper text */}
        {widgets.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Drag and drop widgets here
          </div>
        )}
      </div>
    </div>
  );
}