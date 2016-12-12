 window.addEventListener("load", init, false);


function init()
{
	

	var nav = {

							view : {},

							control : {},

							model : {}

					};




					nav.view.init = function(){



								//Récupération du conteneur
								nav.view.navContainer = document.getElementById("navContainer");
								nav.view.navContainer.style.top ="-100vh";
						
								
									
						
								//création de l'input
								nav.view.recherche = document.createElement("input");
								nav.view.recherche.type="search";
								nav.view.recherche.id="searchMobile";
								nav.view.recherche.style.width="40%";
								nav.view.recherche.style.height="10vw";
								nav.view.recherche.style.fontSize="160%";
								nav.view.recherche.style.padding = "1vw";
								nav.view.recherche.style.borderRadius="1vh";
								nav.view.recherche.style.margin="0 auto";
								nav.view.recherche.style.display = "none";
								nav.view.recherche.style.marginTop="10vw";
						
								nav.view.recherche.placeholder="rechercher";

								nav.view.recherche.style.zIndex = 15;
								nav.view.navContainer.appendChild(nav.view.recherche);


								//création du lien 1
								nav.view.link1 = document.createElement("a");
								nav.view.link1.style.width = "100%";
								nav.view.link1.style.color = "white";
								nav.view.link1.style.cursor = "pointer";
								nav.view.link1.style.fontSize = "6vw";
								//nav.view.link1.style.marginLeft = "30vw";
								nav.view.link1.style.marginTop = "8vh";
								nav.view.link1.style.display = "none";
								nav.view.link1.className = "link";
								nav.view.link1.style.fontWeight = "bold";
								nav.view.link1.style.textDecoration = "none";
								nav.view.link1.innerHTML = "Nouveautés";
								nav.view.link1.href = "#";


								nav.view.link1.style.zIndex = 10;
								nav.view.navContainer.appendChild( nav.view.link1);


								//création du lien 2
								nav.view.link2 = document.createElement("a");
								nav.view.link2.style.width = "100%";
								nav.view.link2.style.color = "white";
								//nav.view.link2.style.marginLeft = "33vw";
								nav.view.link2.style.marginTop = "8vh";
								nav.view.link2.style.fontSize = "6vw";
								nav.view.link2.style.display = "none";
								nav.view.link2.style.cursor = "pointer";
								nav.view.link2.className = "link";         
								nav.view.link2.style.textDecoration = "none";  
								nav.view.link2.style.fontWeight = "bold";
								nav.view.link2.href = "#";
								nav.view.link2.innerHTML = "S'abonner";

								nav.view.link2.style.zIndex = 11;
								nav.view.navContainer.appendChild( nav.view.link2);
						
								//création du lien 3
								nav.view.link3 = document.createElement("a");
								nav.view.link3.style.width = "100%";
								nav.view.link3.style.color = "white";
								nav.view.link3.style.marginTop = "20%";
								nav.view.link3.style.display = "none";
								//nav.view.link3.style.marginLeft = "29vw";
								nav.view.link3.style.marginTop = "8vh";
								nav.view.link3.style.fontSize = "6vw";
								nav.view.link3.style.cursor = "pointer";
								nav.view.link3.className = "link";         
								nav.view.link3.style.textDecoration = "none";  
								nav.view.link3.style.fontWeight = "bold";
								nav.view.link3.href = "#";
								nav.view.link3.innerHTML = "Me connecter";

								nav.view.link3.style.zIndex = 11;
								nav.view.navContainer.appendChild( nav.view.link3);
						
								//création du lien 3
								nav.view.link4 = document.createElement("a");
								nav.view.link4.style.width = "100%";
								nav.view.link4.style.color = "white";
								nav.view.link4.style.marginTop = "20%";
								//nav.view.link4.style.marginLeft = "25vw";
								nav.view.link4.style.marginTop = "8vh";
								nav.view.link4.style.display = "none";
								nav.view.link4.style.fontSize = "6vw";
								nav.view.link4.style.cursor = "pointer";
								nav.view.link4.className = "link";         
								nav.view.link4.style.textDecoration = "none";  
								nav.view.link4.style.fontWeight = "bold";
								nav.view.link4.href = "#";
								nav.view.link4.innerHTML = "Créer un compte";

								nav.view.link4.style.zIndex = 11;
								nav.view.navContainer.appendChild( nav.view.link4);
						
								
								// -- CREATION DE LA NAVIGATION POUR LE SCREEN -- //
						
								//création du conteneur de la navigation
								nav.view.header = document.getElementById("header");
						
								nav.view.accountMenu = document.getElementById("menuAccount");
						
						
								
						
								nav.view.link1Account = document.createElement("a");
								nav.view.link1Account.style.width = "100%";
								nav.view.link1Account.style.color = "white";
								
								//nav.view.link1Account.style.marginLeft = "25vw";
								nav.view.link1Account.style.marginTop = "6vh";
								nav.view.link1Account.style.fontSize = "2vw";
								nav.view.link1Account.style.textAlign = "center";
								nav.view.link1Account.style.cursor = "pointer";
								nav.view.link1Account.className = "linksAccount";
								       
								nav.view.link1Account.style.textDecoration = "none";  
								nav.view.link1Account.style.fontWeight = "bold";
								nav.view.link1Account.href = "#";
								nav.view.link1Account.innerHTML = "Créer un compte";

								nav.view.link1Account.style.zIndex = 11;
								nav.view.accountMenu.appendChild( nav.view.link1Account);
						
						
						
						
								nav.view.link2Account = document.createElement("a");
								nav.view.link2Account.style.width = "100%";
								nav.view.link2Account.style.color = "white";
								nav.view.link2Account.style.textAlign = "center";
								//nav.view.link2Account.style.marginLeft = "25vw";
								nav.view.link2Account.style.marginTop = "6vh";
								nav.view.link2Account.style.fontSize = "2vw";
								nav.view.link2Account.className = "linksAccount";
								nav.view.link2Account.style.cursor = "pointer";
								       
								nav.view.link2Account.style.textDecoration = "none";  
								nav.view.link2Account.style.fontWeight = "bold";
								nav.view.link2Account.href = "#";
								nav.view.link2Account.innerHTML = "Me connecter";

								nav.view.link2Account.style.zIndex = 11;
								nav.view.accountMenu.appendChild( nav.view.link2Account);


					};


					//Initialisation des écouteurs
					nav.control.init = function()
					{
						nav.view.button = document.getElementById("menuImgPhone")
						nav.view.button.addEventListener("click", nav.model.moveIn, false);
						
						
						nav.view.account = document.getElementById("imgAccount");
						nav.view.account.addEventListener("mouseover", nav.model.showAccountMenu, true);
						
						
					}

					//Initialisation de la fonction de déplacement de la nav
					nav.model.moveIn = function()
					{
						nav.view.navContainer.style.transition="0.5s";
						nav.view.navContainer.style.top ="0px";
						nav.view.recherche.style.display = "block";
						nav.view.link1.style.display = "block";
						nav.view.link2.style.display = "block";
						nav.view.link3.style.display = "block";
						nav.view.link4.style.display = "block";
						
						nav.view.button.removeEventListener("click",nav.model.moveIn, false);
						
						nav.view.button.addEventListener("click", nav.model.moveOut, true);
						
						
						nav.view.button.style.position="fixed";
						nav.view.button.style.textAlign="center"
						nav.view.button.style.top="10vw";
						nav.view.button.style.left="12vw";
						nav.view.button.style.transition="0.5s";
						nav.view.button.style.transform = "rotate(-90deg)";

					}

					//Initialisation de la fonction de déplacement de la nav dans l'autre sens
					 nav.model.moveOut = function()
					{
						
						 nav.view.navContainer.style.transition="0.5s";
						 nav.view.button.style.position="relative";
						 nav.view.button.style.webkitTransform = "rotate(0deg)";
						 nav.view.recherche.style.display = "none";
						nav.view.link1.style.display = "none";
						nav.view.link2.style.display = "none";
						nav.view.link3.style.display = "none";
						nav.view.link4.style.display = "none";
						 nav.view.button.style.left="0vw";
						 nav.view.button.style.top="-3vw";
						 nav.view.button.style.zIndex = "40%";
						 nav.view.navContainer.style.top ="-140vh";
					
						 window.setTimeout(nav.control.resetControls, "1s");
						 
					}
					 
					 nav.model.showAccountMenu = function()
					{
						
						
						nav.view.accountMenu.style.right = "0";
						 
						 
						nav.view.right = document.getElementById("right");
					
						nav.view.right.addEventListener("mouseover", nav.model.hideAccountMenu, false);

					}
					 
					 nav.model.hideAccountMenu = function()
					{
						nav.view.accountMenu.style.right = "-40vw";
					
					}
	
					 nav.control.resetControls= function()
					 {
						 nav.view.button.removeEventListener("click", nav.model.moveOut, true);
						 nav.view.button.addEventListener("click", nav.model.moveIn, false);
						 
						 nav.view.account.removeEventListener("click", nav.model.showAccountMenu, true);
						 nav.view.account.addEventListener("click", nav.model.hideAccountMenu, false);
					 }

					//Démarrage des fonctions principales
					nav.view.init();
					nav.control.init();
}