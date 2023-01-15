// Get a reference to the Analysis Tools header and table
const analysisToolsHeader = document.getElementById('analysis-tools-header');
const analysisToolsTable = document.getElementById('analysis-tools-table');

// Hide the Analysis Tools table by default
analysisToolsTable.style.display = 'none';

// Add a click event listener to the Analysis Tools header
analysisToolsHeader.addEventListener('click', function() {
  // Toggle the visibility of the Analysis Tools table
  if (analysisToolsTable.style.display === 'none') {
    analysisToolsTable.style.display = 'block';
  } else {
    analysisToolsTable.style.display = 'none';
  }
});
