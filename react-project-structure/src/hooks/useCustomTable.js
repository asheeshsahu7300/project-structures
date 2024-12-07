import { useState, useCallback } from "react";

const useCustomTable = (initialData) => {
  const [tableData, setTableData] = useState(initialData);

  const updateTableData = useCallback((rowIndex, cellIndex, newValue) => {
    setTableData((currentData) => {
      const newData = [...currentData];
      if (!newData[rowIndex]) {
        newData[rowIndex] = []; // Ensure the row exists
      }
      const newRow = [...newData[rowIndex]];
      const newCell = { ...newRow[cellIndex], value: newValue };
      newRow[cellIndex] = newCell;
      newData[rowIndex] = newRow;
      return newData;
    });
  }, []);

  return [tableData, setTableData, updateTableData];
};

export default useCustomTable;
