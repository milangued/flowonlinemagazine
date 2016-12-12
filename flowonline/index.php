BONJOUR<!DOCTYPE html>
<html>
	<head>
        <?php include_once('includes/header.php'); ?>

		<!-- On declare l'encodage -->
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	
		<!-- On affiche le titre de la page -->
		<title>FlowOnline</title>
        
        <meta name="description" content="Version online du magazine Flow." />

        
		<!-- On charge la feuille de style du site -->
        <link rel="stylesheet" href="<?php echo base_url();?>files/css/reset.css" type="text/css" />
		<link rel="stylesheet" href="<?php echo base_url();?>files/css/phone.css" type="text/css" />
		<link rel="stylesheet" href="<?php echo base_url();?>files/css/tab.css" type="text/css" />
		<link rel="stylesheet" href="<?php echo base_url();?>files/css/screen.css" type="text/css" />
        <link rel="stylesheet" href="<?php echo base_url();?>files/css/fontface.css" type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		
		
		<!-- On charge le script -->
		<script src="files/js/nav.js"></script>
		
		
		
		<!-- On affiche un Favicon -->
        <link rel="icon" type="image/png" href="<?php echo base_url() ; ?>files/img/icons/favicon.png" />


	</head>
    
    <body>
       
        <main> 
			
			<div id="navContainer"></div>
            
            <header id="header">
                
                <h1>FlowOnline</h1>
                <img src="<?php echo base_url();?>files/img/design/logo.svg" id="logoFlow" alt="Logo Flow Online"/>
                
                <div id="nav">
                    <ul>
                        <li><a href="#">Nouveautés</a></li>
                        <li><a href="#">S'abonner</a></li>                
                    </ul>

                    <input id="search" type="search" placeholder="rechercher"/>
					
                    <img id="searchIcon" src="<?php echo base_url();?>files/img/icons/search.svg" alt="Rechercher"/>

                    <div id="account">
                        <img id="imgAccount" src="<?php echo base_url();?>files/img/icons/account.svg" alt="Mon compte"/>
						<div id="menuAccount"></div>
                    </div>

                    <div id="menu">
                        <img src="<?php echo base_url();?>files/img/icons/menu.svg" alt="Menu" id="menuImgPhone"/>
                    </div>
                </div>
            
            </header>
            
            <section id="left">
                
                <section id="articleDuMois">
                    <h2>l'article du mois</h2>
                    
                    <figure class="art">
                        <a href="#"><figcaption>&laquo; à l'ancienne &raquo;</figcaption></a>
                        <img src="<?php echo base_url();?>files/upload/art1.jpg" title="à l'ancienne"/>     
                    </figure>
                    
                </section>
            
            </section>
            
            <section id="right">
                
                <section id="dernierement">
                    <h2>dernièrement</h2>
                    
                    <figure class="art">
                        <a href="#"><figcaption>&laquo; #FlowLeaf2016 &raquo;</figcaption></a>
                        <img src="<?php echo base_url();?>files/upload/art4.jpg" title="#FlowLeaf2016"/>
                    </figure>

                    <figure class="art">
                        <a href="#"><figcaption>&laquo; cheesecake aux fraises &raquo;</figcaption></a>
                        <img src="<?php echo base_url();?>files/upload/art5.jpg" title="cheesecake aux fraises"/>
                    </figure>
                    
                </section>
                
            </section>
			
			<footer>
				
			
			</footer>
            
        </main>

    </body>

</html>
