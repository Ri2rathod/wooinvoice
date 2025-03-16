// src/store/dashboardBuilderStore.js
import { create } from 'zustand';
import { nanoid } from 'nanoid'; // For generating unique IDs

const useDashboardBuilderStore = create((set, get) => ({
  // State
  widgets: [], // All widgets in the document
  selectedWidgetId: null, // Currently selected widget ID (null if none)
  isAddingNewWidget: false, // Whether we're in "add new widget" mode
  draggedWidgetType: null, // Type of widget being dragged from toolbar
  isDragging: false, // Whether a drag operation is in progress
  
  // Computed value (not stored in state directly)
  getSelectedWidget: () => {
    const state = get();
    return state.widgets.find(widget => widget.id === state.selectedWidgetId);
  },
  
  // Check if a specific widget is selected
  isWidgetSelected: (widgetId) => {
    return get().selectedWidgetId === widgetId;
  },
  
  // Actions
  selectWidget: (widgetId) => set({
    selectedWidgetId: widgetId,
    isAddingNewWidget: false
  }),
  
  deselectWidget: () => set({
    selectedWidgetId: null
  }),
  
  startAddingWidget: () => set({
    isAddingNewWidget: false,
    selectedWidgetId: null
  }),
  
  cancelAddingWidget: () => set({
    isAddingNewWidget: false
  }),
  
  // Start dragging a new widget from toolbar
  startDraggingNewWidget: (widgetType) => set({
    draggedWidgetType: widgetType,
    isDragging: true,
    isAddingNewWidget: false
  }),
  
  // End dragging without adding widget
  cancelDragging: () => set({
    draggedWidgetType: null,
    isDragging: false
  }),
  
  // Add a new widget at specific position (e.g., after drop)
  addWidgetAtPosition: (widgetType, position) => set((state) => {
    const newWidget = {
      id: nanoid(),
      type: widgetType,
      position: position,
      size: getDefaultSizeForWidgetType(widgetType),
      isSelected: true, // Mark as selected when added
      content: '',
      properties: getDefaultPropertiesForWidgetType(widgetType)
    };
    
    return {
      widgets: [...state.widgets.map(w => ({...w, isSelected: false})), newWidget],
      selectedWidgetId: newWidget.id,
      isDragging: false,
      draggedWidgetType: null,
      isAddingNewWidget: false
    };
  }),
  
  // Update a widget's properties
  updateWidget: (widgetId, updates) => set((state) => ({
    widgets: state.widgets.map(widget => 
      widget.id === widgetId ? { ...widget, ...updates } : widget
    )
  })),
  
  // Update a widget's position (during drag)
  moveWidget: (widgetId, newPosition) => set((state) => ({
    widgets: state.widgets.map(widget => 
      widget.id === widgetId 
        ? { ...widget, position: newPosition } 
        : widget
    )
  })),
  
  // Resize a widget
  resizeWidget: (widgetId, newSize) => set((state) => ({
    widgets: state.widgets.map(widget => 
      widget.id === widgetId 
        ? { ...widget, size: newSize } 
        : widget
    )
  })),
  
  // Delete a widget
  deleteWidget: (widgetId) => set((state) => ({
    widgets: state.widgets.filter(widget => widget.id !== widgetId),
    selectedWidgetId: state.selectedWidgetId === widgetId ? null : state.selectedWidgetId
  })),
  
  // Select widget and deselect others
  setSelectedWidget: (widgetId) => set((state) => ({
    widgets: state.widgets.map(widget => ({
      ...widget,
      isSelected: widget.id === widgetId
    })),
    selectedWidgetId: widgetId
  })),
  
  // Deselect all widgets
  deselectAllWidgets: () => set((state) => ({
    widgets: state.widgets.map(widget => ({
      ...widget,
      isSelected: false
    })),
    selectedWidgetId: null
  })),
   // End dragging without adding widget
   addNewWidget: () => set({
    isAddingNewWidget:true
  })

}));

// Helper functions for widget defaults
function getDefaultSizeForWidgetType(type) {
  switch (type) {
    case 'text':
      return { width: 200, height: 50 };
    case 'image':
      return { width: 200, height: 200 };
    case 'chart':
      return { width: 400, height: 300 };
    case 'table':
      return { width: 400, height: 250 };
    case 'metric':
      return { width: 200, height: 100 };
    default:
      return { width: 150, height: 100 };
  }
}

function getDefaultPropertiesForWidgetType(type) {
  switch (type) {
    case 'text':
      return { 
        fontSize: 14,
        fontFamily: 'Arial',
        textAlign: 'left',
        color: '#000000',
        backgroundColor: 'transparent'
      };
    case 'image':
      return { 
        src: '',
        alt: '',
        fit: 'contain'
      };
    case 'chart':
      return { 
        chartType: 'bar',
        dataSource: '',
        colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853'],
        showLegend: true
      };
    case 'table':
      return {
        dataSource: '',
        pagination: true,
        pageSize: 10,
        showHeader: true
      };
    case 'metric':
      return {
        value: 0,
        label: 'Metric',
        format: 'number',
        icon: '',
        color: '#4285F4'
      };
    default:
      return {};
  }
}

export default useDashboardBuilderStore;