var btn = document.getElementById("play");

function transform() {

   data.splice(6, 1);

   showArray(createNewArr());

}



function editArr() {
   var editedArr = [];

   data.forEach(function(value, index) {
      editedArr.push({
         url: value.url,
         name: value.name,
         params: {
            status: value.params.status,
            progress: value.params.progress
         },
         description: value.description,
         date: value.date
      });
   })

   return editedArr;

}



function createNewArr() {
   var array = editArr();

   var newArray = array.map(function(item) {
      return {
         url: insertProtocol(item.url),
         name: getCapitalLetter(item.name),
         params: `${item.params.status}=>${item.params.progress}`,
         description: cutText(item.description),
         date: getDate(item.date),
         isVisible: item.params.status
      }
   });

   var filteredArray = newArray.filter(function(item) {
      return item.isVisible == true;
   })

   return filteredArray;

}



function getCapitalLetter(text) {
   var lowerCaseText = text.toLowerCase();
   return lowerCaseText.substr(0, 1).toUpperCase() + lowerCaseText.substring(1);
}



function insertProtocol(url) {
   return "http://" + url;
}



function cutText(text) {
   return text.substr(0, 14) + "...";
}



function getDate(date) {
   var newDate = new Date(date);

   var year = newDate.getFullYear();
   var month = newDate.getMonth() + 1;
   var date = newDate.getDate();
   var hours = newDate.getHours();
   var minutes = newDate.getMinutes();

   return `${year}/${month}/${date} ${hours}:${minutes}`;

}



function showArray(array) {
   console.log(array);
}

btn.addEventListener("click", transform);