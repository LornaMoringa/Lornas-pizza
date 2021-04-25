$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        function flavor() {
            var pizzaFlavor = document.getElementById("flavor").value;
            return parseInt(pizzaFlavor);
        }
        function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
        }
        function crust() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
        }
        function topping() {
            var pizzaTopping = document.getElementById("topping").value;
            return parseInt(pizzaTopping);
        }