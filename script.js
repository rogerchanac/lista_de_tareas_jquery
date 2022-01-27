$(function(){
    var btn_agregar = $("#btn-agregar");
    var tarea = $("#tarea");
    var lista = $("#lista");
    btn_agregar.click(function(){
        var elem = $("<li></li>").text(tarea.val())
        var btn_eliminar = $("<button class=\"eliminar\">X</button>");
        elem.append(btn_eliminar);
        lista.append(elem);
    })

    $(".eliminar").click(function(){
        alert('hola')
    })
})
