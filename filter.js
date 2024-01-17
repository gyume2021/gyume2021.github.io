document.addEventListener('DOMContentLoaded', function () {
    // Get the select element and table
    var wonfilterSelect = document.getElementById('wonfilterSelect');
    var dataTable = document.getElementById('dataTable');
    var typefilterSelect = document.getElementById('typefilterSelect');
    wonfilterSelect.value = '';
    typefilterSelect.value = '';

    // Add a change event listener to the filter select
    wonfilterSelect.addEventListener('change', function () {

        // Get all rows in the table body
        var rows = dataTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        // Loop through each row
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var columns = row.getElementsByTagName('td');
            var shouldShow = true;

            //////////////////////
            // change column number
            /////////////////////
            var wonColumn = columns[0].textContent;
            var typeColumn = columns[1].textContent;

            //default
            if (typefilterSelect.value == ''){
                if (wonfilterSelect.value !== wonColumn) {
                    shouldShow = false;           
                }
            }
            // not default
            else {
                if (typefilterSelect.value !== typeColumn || wonfilterSelect.value !== wonColumn) {
                    shouldShow = false;              
                }
            }

            // Show or hide the row based on the filter
            row.style.display = shouldShow ? '' : 'none';  
        }
    });

    // Add a change event listener to the filter select
    typefilterSelect.addEventListener('change', function () {

        // Get all rows in the table body
        var rows = dataTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        // Loop through each row
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var columns = row.getElementsByTagName('td');
            var shouldShow = true;

            //////////////////////
            // change column number
            /////////////////////
            var wonColumn = columns[0].textContent;
            var typeColumn = columns[1].textContent;

            //default
            if (wonfilterSelect.value == ''){
                if (typefilterSelect.value !== typeColumn) {
                    shouldShow = false;           
                }
            }
            // not default
            else {
                if (typefilterSelect.value !== typeColumn || wonfilterSelect.value !== wonColumn) {
                    shouldShow = false;              
                }
            }

            // Show or hide the row based on the filter
            row.style.display = shouldShow ? '' : 'none';  
        }
    });
});

function buttonClick() {
    var dataTable = document.getElementById('dataTable');
    // Get all rows in the table body
    
    var rows = dataTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    console.log(rows);
    // Loop through each row
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        // Show or hide the row based on the filter
        row.style.display = '';
    }
}