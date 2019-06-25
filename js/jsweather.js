document.addEventListener("DOMContentLoaded",function (event) {

        var weather = document.getElementById("weathernow");
        var geo = document.getElementById("geo");
        var datanow = document.getElementById("datahead");

        function getAjaxWeather() {
            var req = new XMLHttpRequest();
            req.onload = function () {
                var res = req.response;

                weather.textContent = Math.round(res.list[0].main.temp - 273);

                req.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=Minsk,by&APPID=528508f646f4ee268ea690d30cd82e67", true);
                req.responseType = "json";
                req.send();
            }
            req.onerror = function () {
                console.log(req.status);
            }
            req.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=Minsk,by&APPID=528508f646f4ee268ea690d30cd82e67", true);
            req.responseType = "json";
            req.send();
        }

    getAjaxWeather();
});