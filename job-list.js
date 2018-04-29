//JOB LIST

var jobList = [
    {
        title: 'A68421'
    },
    {
        title: 'A63521'
    },
    {
        title: 'A68371'
    },
    {
        title: 'A86200'
    },
    {
        title: 'A08293'
    }
];


var sectionBar = jobList.map(function (navigationObject) {
    
    return ('<a class="section-list_buttons triangle-effect"'
        + ' href="job-'
        + navigationObject.title
        + '.html">' +
        navigationObject.title + '</a>');
}).join("");

document.getElementById('buttonContainer').innerHTML = sectionBar;



