<template>
	<div class="main">
		<div class="promo-page">
			<div class="promo-header">
				<h1>Bigudiuri fără căldură</h1>
				<img src="./assets/ezgif-3-18f75a608c.gif" alt="Promo Image" class="promo-image" />
				<h2>35% REDUCERE</h2>
				<a href="#form"><button class="cta-button">Comandă aici</button></a>
				<p>*Apăsați aici pentru a afla prețul!*</p>
				<p>Nu-ți mai arde părul! Renunță la ondulatorul tău și descoperă aceste role fără căldură</p>
			</div>
			<div class="promo-content">
				<img src="./assets/ezgif-5-295ee63ca5.webp" alt="Demo GIF" class="demo-gif" />
				<p>
					<input type="checkbox" checked /> Obțineți ondulări fabuloase, bucle naturale sau bucle cu agrafe
					fără căldură, având grijă de părul dumneavoastră.
				</p>
				<div class="images">
					<img src="./assets/img_1-2.png" alt="image01" />
					<img src="./assets/Herramienta-20-piezas-rizador-de-pelo-m-gico-rosa-sin-clip-sin-rizador-de-pelo-de.jpg_Q90.jpg_.webp"
						alt="image02" />
					<img src="./assets/rulos-3.jpg" alt="image03" />
				</div>
				<div class="grid-container">
					<span><img src="./assets/2705.svg" class="check-icon"> Bucle rezistente la căldură, poți folosi
						căldura indirectă a unui uscător de păr pentru a activa buclele mai rapid.</span>

					<span><img src="./assets/2705.svg" class="check-icon"> Rulouri blânde, poți dormi cu ele fără
						probleme.</span>

					<span><img src="./assets/2705.svg" class="check-icon"> Aceste role pot fi spălate la mașină atunci
						când este necesar.</span>
				</div>
			</div>
		</div>
		<div class="explainText">
			<div style="margin-top:10px;"><img src="./assets/1f4b0.svg" class="check-icon"> &nbsp;PREȚ REDUS: 59.90 RON
				<del>125 RON</del>
			</div>
			<div style="margin-top:10px;"><img src="./assets/1f69a.svg" class="check-icon"> &nbsp;LIVRARE RAPIDĂ ÎN 1-2
				ZILE.</div>
			<div style="margin-top:10px;"><img src="./assets/1f4b5.svg" class="check-icon"> &nbsp; PLATA LA LIVRARE.
			</div>
			<div style="margin-top:10px;"><img src="./assets/2728.svg" class="check-icon"> &nbsp;CALITATE GARANTATĂ.
			</div>
			<div style="margin-top:10px; margin-bottom:30px;"><img src="./assets/2705.svg" class="check-icon"> &nbsp;
				DREPT DE RETUR 14 ZILE. </div>
		</div>
		<div class="order-form" id="form">
			<form @submit.prevent="placeOrder">
				<div class="form-group">
					<label for="name">Nume și Prenume*<br>
						<div style="margin-top:5px; display:flex; align-items:center;"><img src="./assets/06.png"
								alt="Roz" /><span style="margin-left:10px; font-size:12px; color:#aaa">Completează
								numele aici</span></div>
					</label>
					<input type="text" id="name1" v-model="form.name1" autocomplete="off" />
				</div>
				<div class="form-group">
					<label for="name">Număr Telefon: (pentru curier)*<br>
						<div style="margin-top:5px; display:flex; align-items:center;"><img src="./assets/06.png"
								alt="Roz" /><span style="margin-left:10px; font-size:12px; color:#aaa">Completează
								numărul aici</span></div>
					</label>
					<input type="text" id="name2" v-model="form.name2" autocomplete="off" />
				</div>
				<div class="form-group">
					<label for="name">Județ*<br>
						<div style="margin-top:5px; display:flex; align-items:center;"><img src="./assets/06.png"
								alt="Roz" /><span style="margin-left:10px; font-size:12px; color:#aaa">Completează
								județul aici</span></div>
					</label>
					<input type="text" id="name3" v-model="form.name3" autocomplete="off" />
				</div>
				<div class="form-group">
					<label for="name">Localitate, comună sau sat*<br>
						<div style="margin-top:5px; display:flex; align-items:center;"><img src="./assets/06.png"
								alt="Roz" /><span style="margin-left:10px; font-size:12px; color:#aaa">Completează
								localitatea/comuna/satul aici</span></div>
					</label>
					<input type="text" id="name4" v-model="form.name4" autocomplete="off" />
				</div>
				<div class="form-group">
					<label for="name">Stradă, Număr, bloc, scară, ap.*<br>
						<div style="margin-top:5px; display:flex; align-items:center;"><img src="./assets/06.png"
								alt="Roz" /><span style="margin-left:10px; font-size:12px; color:#aaa">Completează
								adresa aici</span></div>
					</label>
					<input type="text" id="name5" v-model="form.name5" autocomplete="off" />
				</div>
				<div class="form-group">
					<label>Culoare*</label>
					<div class="color-options">
						<div @click="selectColor('Roz')" :class="{ selected: form.color === 'Roz' }">
							<p>Roz</p>
							<img src="./assets/01.png" alt="Roz" />
						</div>
						<div @click="selectColor('Albastru')" :class="{ selected: form.color === 'Albastru' }">
							<p>Albastru</p>
							<img src="./assets/02.png" alt="Albastru" />
						</div>
					</div>
				</div>
				<div class="form-group">
					<label>Cantitate* <br>
						<div style="margin-top:5px; display:flex; align-items:center;"><span
								style="font-size:12px; color:#aaa">Un set contine 10 bigudiuri. 5 mari si 5
								normale</span></div>
					</label>
					<div class="quantity-options">
						<div class="quantity-option" v-for="option in quantityOptions" :key="option.value">
							<label :for="option.value">{{ option.label }} - {{ option.price }} L</label>
							<input class="input-radio" type="radio" :id="option.value" :value="option.value"
								v-model="form.quantity" />
						</div>
					</div>
					<p></p>
				</div>
				<button type="submit">Plaseaza Comanda — {{ totalPrice }} L</button>
			</form>
		</div>
		<div class="elementor-widget-wrap elementor-element-populated">
			<div class="elementor-element elementor-element-68b76b89 elementor-widget elementor-widget-heading"
				data-id="68b76b89" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">Ce spun clienții noștri?</h2>
				</div>
			</div>
			<div class="elementor-element elementor-element-256bb201 elementor-widget elementor-widget-image"
				data-id="256bb201" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
					<img loading="lazy" decoding="async" width="479" height="405"
						src="https://antelio.ro/wp-content/uploads/2023/03/customer-reviews-2.png"
						class="attachment-large size-large" alt=""
						srcset="https://antelio.ro/wp-content/uploads/2023/03/customer-reviews-2.png 479w, https://antelio.ro/wp-content/uploads/2023/03/customer-reviews-2-300x254.png 300w"
						sizes="(max-width: 479px) 100vw, 479px">
				</div>
			</div>
		</div>
		<div class="elementor-widget-wrap elementor-element-populated"
			style="background-color: rgb(65, 65, 65); color:white;">
			<div class="elementor-element elementor-element-18374f37 elementor-align-center elementor-widget elementor-widget-button"
				data-id="18374f37" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
						<a href="https://antelio.ro/tos/" target="_blank" style="text-decoration-line:none !important;" 
							class="elementor-button-link elementor-button elementor-size-xl" role="button">
							<span class="elementor-button-content-wrapper">
								<span class="elementor-button-text" style="color:white; cursor:pointer;"> Retur, Termeni
									și condiții, Politica de
									Confidențialitate</span>
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="elementor-element elementor-element-2d5b0d07 elementor-widget elementor-widget-text-editor"
				data-id="2d5b0d07" data-element_type="widget" data-widget_type="text-editor.default" style="padding-bottom:20px;">
				<div class="elementor-widget-container">
					<p style="text-align: center;"><b>CONTACT:</b></p>
					<div style="text-align: center;">Pentru orice tip de informație sau reclamație, vă rugăm să ne
						contactați prin e-mail la&nbsp;<span
							style="font-weight: bolder;">comenzi.help@gmail.com</span>&nbsp;de luni până vineri<b>.</b>
					</div>
				</div>
			</div>
		</div>		
		<section
			class="elementor-section elementor-top-section elementor-element elementor-element-597c7ab5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
			data-id="597c7ab5" data-element_type="section">
			<div class="elementor-container elementor-column-gap-default">
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-21a0e154"
					data-id="21a0e154" data-element_type="column">
					<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-221b0db5 elementor-widget elementor-widget-image"
							data-id="221b0db5" data-element_type="widget" data-widget_type="image.default">
							<div class="elementor-widget-container" style="padding-top:20px; padding-bottom:10px;">
								<a href="https://anpc.ro/ce-este-sal/" target="_blank">
									<img loading="lazy" decoding="async" width="250" height="50"
										src="https://antelio.ro/wp-content/uploads/2023/02/logo-anpc.jpg"
										class="attachment-large size-large" alt=""> </a>
										<a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=RO%3E"
									target="_blank">
									<img loading="lazy" decoding="async" width="250" height="50"
										src="https://antelio.ro/wp-content/uploads/2023/02/logo-litigiu.jpg"
										class="attachment-large size-large" alt=""> </a>
																</div>							
						</div>
					</div>
				</div>				
			</div>
		</section>
	</div>
</template>
<script>
export default {
	data() {
		return {
			form: {
				name: '',
				phone: '',
				county: '',
				locality: '',
				address: '',
				color: '',
				quantity: 1
			},
			quantityOptions: [
				{ value: 1, label: '1 Set Bigudiuri', price: 59.90 },
				{ value: 2, label: '2 Seturi Bigudiuri', price: 92.90 },
				{ value: 3, label: '3 Seturi Bigudiuri', price: 109.90 }
			]
		};
	},
	computed: {
		totalPrice() {
			const selectedOption = this.quantityOptions.find(option => option.value === this.form.quantity);
			return selectedOption ? selectedOption.price : 0;
		}
	},
	methods: {
		selectColor(color) {
			this.form.color = color;
		},
		placeOrder() {
			// Handle the form submission logic
			const url = ''; // Replace with your desired URL
      		window.location.href = url;	
		}
	}
};
</script>

<style>
.order-form {
	max-width: 600px;
	margin: 0 auto;
	padding: 40px;
	background-color: #fff;
	margin-bottom: 60px;
}

.form-group {
	margin-bottom: 25px;
	padding-bottom: 10px;
}

.form-group label {
	display: block;
	margin-bottom: 5px;

}

.form-group input {
	width: 100%;
	padding: 8px;
	box-sizing: border-box;
	border-radius: 5px;
	;
	border: 1px solid rgba(20, 20, 20, 0.4);
}

.input-radio {
	width: 15% !important;
}


.color-options {
	margin-left: 3%;
	margin-right: 3%;
	display: flex;
	justify-content: space-between;
}

.color-options div {
	cursor: pointer;
	padding: 10px;
	border: 1px solid #aaa;
	border-radius: 5px;
	text-align: center;
}

.color-options div.selected {
	background-color: rgb(46, 74, 188);
}

.color-options img {
	width: 250px;
	height: 250px;
	box-shadow: 2px 2px 2px 2px grey;
}

.quantity-options {
	display: flex;
	flex-direction: column;
}

.quantity-option {
	display: flex;
	align-items: center;
	padding: 10px;
	border: 1px solid #aaa;
	border-radius: 5px;
	margin-bottom: 12px;
	cursor: pointer;
}

.quantity-option label {
	margin-left: 10px;
	width: 100%;
	text-align: left;
}

.quantity-option input[type="radio"] {
	align-items: right;
}

.quantity-option:hover {
	background-color: rgb(46, 74, 188);
}

.quantity-option input[type="radio"]:checked+label {
	background-color: rgb(46, 74, 188);
	color: white;
	border-radius: 5px;
}

button {
	font-size: 20px;
	width: 100%;
	padding: 15px;
	background-color: rgb(46, 74, 188);
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

button:hover {
	background-color: rgb(7, 7, 77);
}

.promo-page {
	font-family: Arial, sans-serif;
	text-align: center;
	background-color: white;
}

.promo-header h1 {
	font-size: 2em;
}

.promo-image {
	width: 100%;
	max-width: 200px;
}

.cta-button {
	background-color: #007bff;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	font-size: 1em;
	cursor: pointer;
	width: 160px;
}

.cta-button:hover {
	background-color: #0056b3;
}

.promo-content .demo-gif {
	width: 100%;
	max-width: 200px;
}

.images img {
	width: 220px;
	height: 180px;
	margin: 30px;

}

.images {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

.check-icon {
	width: 12px;
	height: 12px;
}

.under-text text-area {
	width: 220px !important;
}

.grid-container {
	display: grid;
	grid-template-columns: 20% 20% 20%;
	/*Make the grid smaller than the container*/
	margin-left: 21%;
	padding-left: 1%;
	gap: 5.5%;
	padding-bottom: 50px;
}

.main {
	background-color: rgb(65, 65, 65);
}

.explainText {
	color: white;
	margin-left: 22%;
}

.elementor-widget-wrap {
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.elementor-widget-button {
	font-family: "Roboto", Sans-serif;
	font-size: 20px;
	font-weight: 500;
	background-color: #1353E8;
	border-radius: 50px 50px 50px 50px;
	padding: 25px;
	margin-top: 30px;
}

.elementor-widget-wrap {}
</style>


<!-- <template>
	<div>
	  <button
		v-for="(button, index) in buttons"
		:key="index"
		:class="{ 'active': selectedButton === button }"
		@click="selectButton(button)"
	  >
		<input type="radio" :value="button" v-model="selectedButton" />
		{{ button }}
	  </button>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		buttons: ['Button 1', 'Button 2', 'Button 3'],
		selectedButton: null
	  };
	},
	methods: {
	  selectButton(button) {
		this.selectedButton = button;
	  }
	}
  };
  </script>
  
  <style scoped>
  button {
	margin: 5px;
	padding: 10px 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	cursor: pointer;
	background-color: #fff;
  }
  
  button.active {
	background-color: blue;
	color: white;
  }
  </style>
<!-- 
  <template>
	<div>
	  <button
		v-for="(button, index) in buttons"
		:key="index"
		:class="{ 'active': selectedButton === button }"
		@click="selectButton(button)"
	  >
	  <span class="button-text">{{ button }}</span>	
	  <input type="radio" :value="button" v-model="selectedButton" />
		
	  </button>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		buttons: ['Button 1', 'Button 2', 'Button 3'],
		selectedButton: null
	  };
	},
	methods: {
	  selectButton(button) {
		this.selectedButton = button;
	  }
	}
  };
  </script>
  
  <style scoped>
  button {
	margin: 5px;
	padding: 10px 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	cursor: pointer;
	background-color: #fff;
  }
  
  button.active {
	background-color: blue;
	color: white;
  }
  
  .button-text {
	margin-left: 5px; /* Adjust the spacing between the radio button and text */
  }
  </style>
   -->