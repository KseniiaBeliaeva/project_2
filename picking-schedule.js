

var pickingSchedule = [
    {
        section: 'SD06-MTLP',
        location: 'Offcut Bay',
        length: '3400',
        quantity: '3'
    },
    {
        section: 'SD06-MTLP',
        location: 'H-L-1.2',
        length: '3520',
        quantity: '11'
    },
    {
        section: 'SD06-MTLP',
        location: 'Offcut Bay',
        length: '520',
        quantity: '32'
    },
    {
        section: 'SD06-MTLP',
        location: 'Offcut Bay',
        length: '9389',
        quantity: '5'
    },
    {
        section: 'SD06-MTLP',
        location: 'Offcut Bay',
        length: '3400',
        quantity: '3'
    }
];


var $pickingScheduleComponent = $('<table><tr class="description"><th>Section</th>' +
    '<th>Location</th><th>Length(mm)</th><th>Quantity</th></tr></table>');

pickingSchedule.forEach(function (object) {
    var row = $('<tr class="row"><td>' + object.location
        + '</td><td>' + object.length
        + '</td><td>' + object.quantity
        + '</td></tr>');
    var firstColumn = $('<td></td>');

    var link = $('<a href="#">' + object.section + '</a>');
    link.click(function () { alert('It\'s located on ' + object.location); });
    link.appendTo(firstColumn);
    firstColumn.prependTo(row);
    row.appendTo($pickingScheduleComponent);
});

$pickingScheduleComponent.appendTo(document.getElementById('job-table'));
