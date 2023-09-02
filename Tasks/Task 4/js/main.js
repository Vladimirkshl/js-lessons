var array = [1, 2, 1, 2, 2, "test", "test1", "test", true, true];

 
function checkDublicates(array) {
    var clearArray = [];

    for (var i = 0; i < array.length; i++) {
        if (clearArray.indexOf(array[i]) === -1) {
            clearArray.push(array[i]);
        }
    }

    clearArray.forEach(function(value, index) {
        console.log(`${index}: ${value}`);
    })
}

checkDublicates(array);