console.log("laoder");
$.ajax({
    type: 'GET',
    url: "./data/infomation.json",
    dataType: "json",
    success: function(json) {
        console.log(json);
    },
    error: function(err) {
        console.log(err);
    }
});
console.log("end");