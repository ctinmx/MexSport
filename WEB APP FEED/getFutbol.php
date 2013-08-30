<?php

//Se requiere descargar esta libreria http://sourceforge.net/projects/simplehtmldom/files/
require_once 'simple_html_dom.php';
$url="'http://mx.deportes.yahoo.com/f%C3%BAtbol/mexicano/?t=";
$url="http://yahoo-latam.hosted3.globalsportsmedia.com/b/block.competition_matches.fixtures_results?gameweek=".$_GET['jornada']."&competition_id=155&season_id=8415&round_id=21476&sport=soccer&localization_id=es-latam";
$html = file_get_html($url);
$bandera=true;
//echo "Hola";
foreach($html->find('div[class="table-container"]') as $article) {
//foreach($html->find('table[class="container"') as $article) {
    //echo "entre";
    foreach($article->find('tr') as $ul) {
        //if( $ul->find('td.team-a',0)->plaintext != "" ){
          //  $fecha = trim($ul->find('li.date',0)->plaintext);
        //}
        if($bandera){
            $bandera=false;
        }else{
            $fecha = trim($ul->find('td.day',0)->plaintext)." ".trim($ul->find('td.date',0)->plaintext);;
            $equipo1 = trim($ul->find('td.team-a',0)->plaintext);
            $score = trim($ul->find('td.score-time',0)->plaintext);
            //$status = trim($ul->find('td.team-a',0)->plaintext);
            $equipo2 = trim($ul->find('td.team-b',0)->plaintext);
            $partidos[] = array('fecha'=>$fecha, 'equipo1'=>$equipo1, 'score'=>$score,'equipo2'=>$equipo2);
        }

        
    }
}

echo $_GET['callback']."(".json_encode($partidos).")";

?>
