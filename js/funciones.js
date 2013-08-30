function getImageURL(nombre_del_equipo){
	var ruta=null;

if(nombre_del_equipo == "Veracruz" ){
ruta="images/v_preview_08.png";
}else if(nombre_del_equipo == "Cruz Azul" ){
ruta="images/cruzazul.png";

}else if(nombre_del_equipo == "Am\u00e9rica" ){
ruta="images/america.png";


}else if(nombre_del_equipo == "Atlas" ){
	ruta="images/atlas.png";

}
else if(nombre_del_equipo == "Santos Laguna" ){
ruta="images/v_preview_11.png";
}
else if(nombre_del_equipo=="Quer\u00e9taro"){
ruta="images/v_preview_13.png";
}
else if(nombre_del_equipo=="Monterrey"){
ruta="images/v_preview_16.png";
}
else if(nombre_del_equipo=="Toluca"){
ruta="images/v_preview_09.png";
}
else if(nombre_del_equipo=="Morelia"){
ruta="images/v_preview_15.png";
}
else if(nombre_del_equipo=="Tijuana"){
ruta="images/v_preview_10.png";
}

else if(nombre_del_equipo=="Pachuca"){
ruta="images/v_preview_14.png";
}
else if(nombre_del_equipo=="Le\u00f3n"){
ruta="images/v_preview_17.png";
}else if(nombre_del_equipo=="Chiapas"){
ruta="images/v_preview_07.png";
}else if(nombre_del_equipo=="Puebla"){
ruta="images/v_preview_12.png";
}else if(nombre_del_equipo=="Pumas UNAM"){
	ruta="images/pumas.png";
}
else if(nombre_del_equipo=="Tigres UANL"){
	ruta="images/v_preview_18.png";
}
else if(nombre_del_equipo=="Guadalajara"){
	ruta="images/v_preview_19.png";
}
else if(nombre_del_equipo=="Atlante"){
		ruta="images/atlante.png";

}
if(ruta==null){

	ruta="images/mlogo.png";
}
return ruta;

}