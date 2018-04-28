var sectionList = [
    {
        title: 'SD06-MTLP'
    },
    {
        title: 'SD06-MTLP'
    },
    {
        title: 'SD10-MTLP'
    },
    {
        title: 'PD05-MTLP'
    },
    {
        title: 'SM06-MTLP'
    }
];

var sectionBar = sectionList.map(function (navigationObject) {
    return ('<a class="section-list_buttons triangle-effect"'
        + ' href="section-'
        + navigationObject.title
        + '.html">' +
        navigationObject.title + '</a>');
}).join("");
document.getElementById('buttonContainer').innerHTML = sectionBar;




// // Modal Box



// var modal = document.getElementById('modal');

// var jobTable = document.getElementsByName('tr');
// var span = document.getElementById('close-btn');
//  jobTable.onclick = function () { 
//     //modal.style.display = "block";
//      alert('hi');
// }
// span.onclick = function () { 
//     modal.style.display = "none";
// }
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
