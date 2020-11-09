import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  	<App>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;1,600&display=swap" rel="stylesheet">
		<title>Tefys Brands</title>
	</head>
	<body>
		<div class="headerprincipal">
			<img src="imgtefy/imgprincipal.png">
				<div class="logo">
					<img src="imgtefy/logoblanco.svg">
				</div>
				<div class="menu">
					<button class="buttonhome" type="button">HOME</button>
					<button class="buttonservices" type="button">NUESTROS SERVICIOS</button>
					<button class="buttonportfolio" type="button">PORTFOLIO</button>
					<button class="buttonabout" type="button">QUÉNES SOMOS</button>
					<button class="buttoncontact" type="button">CONTACTO</button>
					<button class="buttones" type="button">ES /</button>
					<button class="buttonen" type="button">EN</button>
				</div>
				<div class="centraltext">
					<p class="h2">Branding and Web Design</p>
					<h1 class="h1">Creamos el branding que conecta contigo</h1>
					<button class="buttonmain">¡CUÉNTAME MÁS!</button>
				</div>
		</div>	
	</body>
	    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
