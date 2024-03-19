function deleteRowsWithFilter() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues(); // Get all data from the sheet
    var numRows = data.length;
    var rowsToDelete = [];
  
    // Loop through all rows in the sheet
    for (var i = 0; i < numRows; i++) {
      var row = data[i];
      var url = row[1]; // Assuming URLs are in Column B
      if (url.includes("filter")) { // Check if URL contains 'filter'
        rowsToDelete.push(i + 1); // Add row number to the list (1-indexed)
      }
    }
  
    // Reverse the array to start deleting from the bottom to avoid index shifting
    rowsToDelete.reverse().forEach(function(rowNum) {
      sheet.deleteRow(rowNum); // Delete each row
    });
  }
  