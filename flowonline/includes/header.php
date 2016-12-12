<?php
	/* CONFIG */
	
	
    setlocale (LC_ALL, "fr_FR"); 

	if($_SERVER['HTTP_HOST'] == "127.0.0.1" OR $_SERVER['HTTP_HOST'] == "localhost")
	{
		if(!function_exists('base_url')){
		function base_url(){ $u="http://milanguedec.fr/flow/" ; return $u;} }
	}
	else
	{
		if(!function_exists('base_url')){
		function base_url(){ $u="http://milanguedec.fr/flow/" ; return $u;} }
	}
		
	
	// Connexion BDD

		


//On charge les sessions
	if(session_id() == "")
	{
		session_start();
	}	
 
?>