var manifest = {};

function parseJSON_guildmember() {
    try {
        const jsonInput = document.getElementById('jsonInput').value;
        const parsedResult = JSON.parse(jsonInput);

        const text = JSON.stringify(parsedResult["results"][1]["result"]["response"]["clan"]["members"], null, 2);

        var sss = "";
        
        var id = null;
        const obj = JSON.parse(text, function (key, value) {
            if (key == "id"){
                sss = sss + "<div>" + value;
                id = value;
            }
            if (key == "name"){
                sss = sss + ": " +value + "</div>";
                manifest[id] = value;
            }                    
            
        });

        // Convert the array to a JSON string
        const jsonString = JSON.stringify(manifest);

        // Store the JSON string in localStorage
        localStorage.setItem('members', jsonString);

        document.getElementById('guildmember_parsedResult').innerHTML = sss; 
    } catch (error) {
        document.getElementById('guildmember_parsedResult').textContent = 'Error parsing JSON: ' + error.message;
    }
}

function parseJSON_oshdamage() {
    try {
        if (isObjectEmpty(manifest)){
            // Retrieve the JSON string from localStorage
            const jsonString = localStorage.getItem('members');

            // Parse the JSON string to get the array
            manifest = JSON.parse(jsonString);
        }
        const jsonInput = document.getElementById('jsonInput').value;
        const parsedResult = JSON.parse(jsonInput);

        const text = JSON.stringify(parsedResult["results"][1]["result"]["response"], null, 2);

        const bossDamage_target = 10000000
        const nodesPoints_target = 800
        const nodesAttemptsSpent_target = 9 
        const bossAttemptsSpent_target = 5
        
        var sss = "<table><tr><th>bossDamage</th>"+
                            "<th>nodesPoints ("+nodesPoints_target.toString()+")</th>"+
                            "<th>nodesAttemptsSpent ("+nodesAttemptsSpent_target.toString()+")</th>"+
                            "<th>bossAttemptsSpent ("+bossAttemptsSpent_target.toString()+")</th>"+
                            "<th>member</th>\
                            </tr>";
        var i = 0;
        const obj = JSON.parse(text, function (key, value) {
            // bossDamage
            if (i%5==0){
                if (parseInt(value)>=bossDamage_target){
                    sss = sss + "<tr><td>" + value + "</td>"; 
                }
                else {
                    sss = sss + "<tr><td class='failed'>" + value + "</td>"; 
                }
            }
            // nodesPoints
            if (i%5==1){
                if (value==null){
                    sss = sss + "<td class='failed'>0</td>"; 
                }
                else{
                    if (parseInt(value)>=nodesPoints_target){
                        sss = sss + "<td>" + value + "</td>"; 
                    }
                    else {
                        sss = sss + "<td class='failed'>" + value + "</td>"; 
                    }
                    
                }
            }
             // nodesAttemptsSpent
            if (i%5==2){
                if (parseInt(value)>=nodesAttemptsSpent_target){
                    sss = sss + "<td>" + value + "</td>"; 
                }
                else {
                    sss = sss + "<td class='failed'>" + value + "</td>"; 
                }
            }
            // bossAttemptsSpent
            if (i%5==3){
                if (parseInt(value)>=bossAttemptsSpent_target){
                    sss = sss + "<td>" + value + "</td>"; 
                }
                else {
                    sss = sss + "<td class='failed'>" + value + "</td>"; 
                }
            }
            // member
            if (i%5==4){
                sss = sss + "<td>" + manifest[key] + "</td></tr>"; 
            }           
            
            i = i + 1;                
        });

        var sss = sss + "</table>";

        document.getElementById('oshdamage_parsedResult').innerHTML = sss; 
    } catch (error) {
        document.getElementById('oshdamage_parsedResult').textContent = 'Error parsing JSON: ' + error.message;
    }
}

function parseJSON_herostrength() {
    try {
        // if (isObjectEmpty(manifest)){
        //     // Retrieve the JSON string from localStorage
        //     const jsonString = localStorage.getItem('members');

        //     // Parse the JSON string to get the array
        //     manifest = JSON.parse(jsonString);
        // }
        const jsonInput = document.getElementById('jsonInput').value;
        const parsedResult = JSON.parse(jsonInput);

        const text = JSON.stringify(parsedResult["results"][1]["result"]["response"], null, 2);

        // var sss = "<table><tr><th>bossDamage</th>\
        //                     <th>nodesPoints (800)</th>\
        //                     <th>nodesAttemptsSpent (9)</th>\
        //                     <th>bossAttemptsSpent (5)</th>\
        //                     <th>member</th>\
        //                     </tr>";
        // var i = 0;
        // const obj = JSON.parse(text, function (key, value) {
        //     if (i%5==0){
        //         sss = sss + "<tr><td>" + value + "</td>"; 
        //     }
        //     if (i%5==1){
        //         if (value==null){
        //             sss = sss + "<td>0</td>"; 
        //         }
        //         else{
        //             sss = sss + "<td>" + value + "</td>"; 
        //         }
                
        //     }
        //     if (i%5==2){
        //         sss = sss + "<td>" + value + "</td>"; 
        //     }
        //     if (i%5==3){
        //         sss = sss + "<td>" + value + "</td>"; 
        //     }
        //     if (i%5==4){
        //         sss = sss + "<td>" + manifest[key] + "</td></tr>"; 
        //     }           
            
        //     i = i + 1;                
        // });

        // var sss = sss + "</table>";

        document.getElementById('oshdamage_parsedResult').innerHTML = text; 
    } catch (error) {
        document.getElementById('oshdamage_parsedResult').textContent = 'Error parsing JSON: ' + error.message;
    }
}


function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }