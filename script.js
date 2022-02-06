$(function(){
    var txt_tarea = $("#txt-tarea");
    var btn_agregar = $("#btn-agregar");
    var lista_tareas = $("#list-tareas")

    btn_agregar.click(function(){
        //Creacion de un item nuevo para la lista con el valor del textarea
        var item = $("<li></li>").text(txt_tarea.val())
        item.addClass("list-group-item")
        //Creamos un boton para poder Eliminar la tarea
        var btn_eliminar = $('<button class="btn btn-danger"></button>')
        btn_eliminar.text("Eliminar")
        item.append(btn_eliminar)
        btn_eliminar.addClass("btn-eliminar")
        //agregamos el item a la lista
        lista_tareas.append(item)

    })
});