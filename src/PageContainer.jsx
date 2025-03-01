import { useState } from "react";

export default function PageContainer() {

   // State to track items in the drop zone
   const [dropZoneItems, setDropZoneItems] = useState([]);
  
   
   // State to track if dragging over drop zone
   const [isDraggingOver, setIsDraggingOver] = useState(false);
   
   // Allow the drop and handle drag over events
   const allowDrop = (e) => {
     e.preventDefault();
     e.nativeEvent.target.classList.add('is-dropping')
     
     if (!isDraggingOver) {
       setIsDraggingOver(true);
     }
   };
   
   // Handle drag leave
   const handleDragLeave = (e) => {
    e.nativeEvent.target.classList.remove('is-dropping')
     setIsDraggingOver(false);
   };
   
   // Reset dragging state when dropped
   const handleDrop = (e) => {
     e.preventDefault();
     e.nativeEvent.target.classList.remove('is-dropping')
    //  console.log(e.nativeEvent);
     
     console.log(e.dataTransfer.getData('cardData'));
     
     return;
     const cardData = JSON.parse(e.dataTransfer.getData('cardData'));
     
     // Add the dropped item to the drop zone
     setDropZoneItems([...dropZoneItems, cardData]);
     setIsDraggingOver(false);
   };

  return (
    <div className="w-[794px] h-[1123px] bg-white shadow-lg border border-gray-300 p-8 mx-auto my-4 flex flex-col">
      <div
        className={`drop-zone ${isDraggingOver ? 'drag-over' : ''}`}
        onDrop={handleDrop}
        onDragOver={allowDrop}
        onDragLeave={handleDragLeave}
      >

        {/* Header */}
        <header className="text-center border-b pb-4 mb-4">
          <h1 className="text-2xl font-bold">A4 Page Layout</h1>
          <p className="text-gray-600">A clean, printable page layout</p>
        </header>

        {/* Content */}
        <main className="flex-grow space-y-4">
          <section>
            <h2 className="text-xl font-semibold">Section 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Section 2</h2>
            <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t pt-4 mt-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>

    </div>
  )
}
