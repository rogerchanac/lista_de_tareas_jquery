$(function(){
    var txt_tarea = $("#txt-tarea");
    var btn_agregar = $("#btn-agregar");
    var lista_tareas = $("#list-tareas")

    btn_agregar.click(function(){
        //Creacion de un item nuevo para la lista con el valor del textarea
        var item = $("<li></li>").text(txt_tarea.val())
        item.addClass("list-group-item")
        //agregamos el item a la lista
        lista_tareas.append(item)
    })
});