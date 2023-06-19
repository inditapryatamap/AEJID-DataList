$(document).ready(function () {
    // Data array
    var data = [{
            number: 1,
            info: "Data pertama",
            date: "2020-01-10T00:35:00"
        },
        {
            number: 2,
            info: "Data kedua",
            date: "2020-02-12T04:15:00"
        },
        {
            number: 3,
            info: "Data ketiga",
            date: "2020-03-22T12:50:00"
        },
        {
            number: 4,
            info: "Data keempat",
            date: "2021-04-25T19:23:00"
        },
        {
            number: 5,
            info: "Data kelima",
            date: "2021-05-12T06:50:00"
        },
        {
            number: 6,
            info: "Data keenam",
            date: "2021-06-13T13:30:00"
        },
        {
            number: 7,
            info: "Data ketujuh",
            date: "2022-07-04T04:15:00"
        },
        {
            number: 8,
            info: "Data kedelapan",
            date: "2022-08-15T12:25:00"
        },
        {
            number: 9,
            info: "Data kesembilan",
            date: "2022-09-16T12:30:00"
        },
        {
            number: 10,
            info: "Data kesepuluh",
            date: "2022-10-17T15:45:00"
        },
        {
            number: 11,
            info: "Data kesebelas",
            date: "2022-11-08T13:30:00"
        },
        {
            number: 12,
            info: "Data kedua belas",
            date: "2022-12-19T17:15:00"
        },
        {
            number: 13,
            info: "Data ketiga belas",
            date: "2023-01-31T09:30:00"
        },
        {
            number: 14,
            info: "Data keempat belas",
            date: "2023-02-11T14:45:00"
        },
        {
            number: 15,
            info: "Data kelima belas",
            date: "2023-03-20T10:15:00"
        },
        {
            number: 16,
            info: "Data keenam belas",
            date: "2023-04-25T11:30:00"
        },
        {
            number: 17,
            info: "Data ketujuh belas",
            date: "2023-04-23T14:15:00"
        },
        {
            number: 18,
            info: "Data kedelapan belas",
            date: "2023-07-15T10:45:00"
        },
        {
            number: 19,
            info: "Data kesembilan belas",
            date: "2023-07-06T12:30:00"
        },
        {
            number: 20,
            info: "Data kedua puluh",
            date: "2023-07-21T15:45:00"
        },
    ];
    // Tambahkan data lainnya di sini...

    // Loop through the data and append to the table
    $.each(data, function (index, item) {
        var row =
            "<tr>" +
            "<td>" +
            item.number +
            "</td>" +
            "<td>" +
            item.info +
            "</td>" +
            "<td>" +
            new Date(item.date).getFullYear() +
            "</td>" +
            "<td>" +
            (new Date(item.date).getMonth() + 1) +
            "</td>" +
            "<td>" +
            new Date(item.date).getDate() +
            "</td>" +
            "<td>" +
            new Date(item.date).toLocaleTimeString() +
            "</td>" +
            "</tr>";

        $("#data-table tbody").append(row);
    });
});