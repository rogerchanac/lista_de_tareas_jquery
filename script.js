$(function(){
    var btn_agregar = $("#btn-agregar");
    var tarea = $("#tarea");
    var lista = $("#lista")
    btn_agregar.click(function(){
        lista.append(`<li>${tarea.val()}</li>`)
    })
})