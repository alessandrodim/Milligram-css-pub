const home = {
  data() {
    return {
      articoli: [
        {
          title: "Cos'è <abbr title='Milligram Css'>Mg</abbr>?",
content: `
<p><abbr title="Milligram CSS">Milligram</abbr> è un micro-framework CSS rilasciato nel 2015 da <strong>César Ferreira</strong>, con l'obiettivo di offrire una base semplice e leggera per la realizzazione di interfacce web moderne. <br/>
Progettato per ridurre al minimo la quantità di codice necessario, Milligram si distingue per una dimensione estremamente contenuta (meno di 2KB compressi) e per un design pulito che privilegia l’essenzialità.</p>

<ul>
  <li><strong>Leggerezza</strong>: pesa meno di 2KB (gzippato), garantendo velocità di caricamento eccezionali.</li>
  <li><strong>Semplicità</strong>: offre solo gli stili essenziali, con classi minimali e un'impostazione chiara.</li>
  <li><strong>Efficienza</strong>: perfetto per prototipi, esercitazioni e progetti dove è essenziale partire subito con un layout coerente.</li>
</ul>

<p>Questi tre aspetti permettono di concentrarsi sul contenuto e sull’esperienza utente, evitando il peso e la rigidità dei framework più complessi.</p>

<div class='row d-flex align-items-center'>
  <div class='col-12 col-md-6'>
    <img src='./Graficomilligram.png' class='img-fluid rounded border border-dark' alt='Grafico utilizzo Milligram CSS'>
  </div>
  <div class='col-12 col-md-6'>
    <div class='contentTable border border-dark p-2 my-3 mx-4'>
      <h5 class='purple'>Trend di utilizzo</h5>
      <p>Il grafico mostra l’adozione crescente di <strong>Milligram CSS</strong> negli ultimi anni, specialmente in tre ambiti:</p>
      <ul>
        <li><strong>Progetti personali</strong>: per la sua leggerezza e velocità di adozione.</li>
        <li><strong>Prototipi aziendali</strong>: utile per mockup e MVP.</li>
        <li><strong>Didattica</strong>: ottimo per introdurre il CSS senza sovraccarico.</li>
      </ul>
      <p class='mb-0'>Questo conferma che Milligram è una scelta efficace in contesti dove semplicità e prestazioni sono prioritarie.</p>
    </div>
  </div>
</div>
`


        },
        {
          title: "Il framework di Milligram",
          content: `
<p>Il <strong>Framework di Milligram</strong> è un micro-framework CSS...</p>
<div class='float-lg-start me-5' style='max-width: 400px'>
  <p>
    <button class='btn btn-primary collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#milligramexample' aria-expanded='false' aria-controls='milligramexample'>
      Un esempio di Milligram css
    </button>
  </p>
  <div class='collapse' id='milligramexample'>
    <div class='card card-body'>
      <code><pre>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;it&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Milligram CSS Example&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;h1&gt;Ciao, Milligram!&lt;/h1&gt;
      &lt;p&gt;Un esempio semplice con griglia e form.&lt;/p&gt;
      &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;column&quot;&gt;
          &lt;button&gt;Cliccami&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class=&quot;column&quot;&gt;
          &lt;input type=&quot;text&quot; placeholder=&quot;Scrivi qui...&quot;&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;form&gt;
        &lt;fieldset&gt;
          &lt;label for=&quot;name&quot;&gt;Nome&lt;/label&gt;
          &lt;input type=&quot;text&quot; placeholder=&quot;Il tuo nome&quot; id=&quot;name&quot;&gt;
          &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;
          &lt;input type=&quot;email&quot; placeholder=&quot;La tua email&quot;&gt;
          &lt;input type=&quot;checkbox&quot; id=&quot;terms&quot;&gt;
          &lt;label class=&quot;label-inline&quot; for=&quot;terms&quot;&gt;Accetto i termini e le condizioni&lt;/label&gt;
          &lt;input class=&quot;button-primary&quot; type=&quot;submit&quot; value=&quot;Invia&quot;&gt;
        &lt;/fieldset&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre></code>
    </div>
  </div>
</div>
`
        },
       {
  title: "I tre punti di forza di Milligram",
  content: "<p>Milligram CSS si basa su tre principi fondamentali che lo rendono ideale per progetti snelli ed efficaci:</p>\
<ul>\
  <li><strong>Leggerezza</strong>: pesa meno di 2KB (gzippato), garantendo velocità di caricamento eccezionali.</li>\
  <li><strong>Semplicità</strong>: offre solo gli stili essenziali, con classi minimali e un'impostazione chiara.</li>\
  <li><strong>Efficienza</strong>: perfetto per prototipi, esercitazioni e progetti dove è essenziale partire subito con un layout pulito.</li>\
</ul>\
<p>Questi tre aspetti permettono di concentrarsi sul contenuto e sull'esperienza utente, evitando il peso eccessivo di framework più complessi.</p>"
}

      ]
    };
  },
  template: `
    <h1><span class="h2">Introduzione a</span><br/>Milligram <span class="purple">Css</span> </h1>
    <div class="row d-flex align-items-center">
      <div class="col-10 offset-1 col-md-5 offset-md-1">
        <div class="contentTable border border-dark p-2 my-3 mx-4">
          <h4>Tabella dei contenuti</h4>
          <ul>
            <li>Cosa e'<abbr title='Milligram css'>Mg</abbr>?</li>
            <li>Il Framework di Milligram</li>
            <li>I tre punti di forza di Millgram 
              <ul>
                <li>Leggerezza</li>
                <li>Semplicita'</li>
                <li>Efficienza</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <img class="img-fluid mx-auto d-block" src="./Milli.png" alt="Milligram logo">
      </div>
    </div>
    <div class='row'>
      <div class='col-12'>
        <article v-for="articolo in articoli" class='pt-2 clearfix'>
          <h2 class="purple" v-html="articolo.title"></h2>
          <div v-html="articolo.content"></div>
        </article>
      </div>
    </div>
  `
};


const jsonApp = {
	data() {
		return {
			datiPWA: null, //array per memorizzare dati JSON
		};
	},
	methods: {
		getPWAs: function () {
			//acquisisce dati da JSON
			axios.get("./StudenTools.json").then(response => {
				this.datiPWA = response.data;
				console.log(this.datiPWA);
			});
		},
	},
	mounted() {
		this.getPWAs();
	},
	template: `
  <h1><span class="purple">ToolBox</span> Studenti</h1>
  <div class='row'>
    <div class='col-12'>
     <h2 class="purple">Strumenti disponibili</h2>
      <div class='row'>
        <div id="appContainer" class="col-12 col-md-6 col-lg-4 my-4 align-items-center d-flex" v-for="(app, index) in datiPWA">
          <div class='row'>
            <div class='col-auto align-items-center d-flex'>
              <!-- ##### ACCESSIBILITÀ: :alt ##### -->
              <img class="mx-2 " id="icon" :src="app.icons" :alt="'icona di '+app.name"/>

            </div>
            <div class='col'>
              <h5>{{app.name}}</h5>
              <p class='text-muted'>{{app.description}}</p>
              <button type="button" class="btn btn-outline-primary btn-sm py-0 px-2">{{app.price}}</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-outline-primary"><router-link to="/editApp">Gestisci strumenti</router-link></button>
    </div>
  </div>
  `,
};

const editApp = {
	data() {
		return {
			datiPWA: null, //array per memorizzare dati JSON
			selected: 0, //index per la select
			newApp: {
				//oggetto per aggiunta nuova app
				name: "",
				description: "",
				price: "",
			},
		};
	},
	methods: {
		getPWA: function () {
			//acquisisce dati da JSON
			axios.get("./StudenTools.json").then(response => {
				this.datiPWA = response.data;
				console.log(this.datiPWA);
			});
		},
		deleteApp: function () {
			//elimina l'app selezionata: metodo assegnato a button
			this.datiPWA.splice(this.selected, 1);
		},
		pushApp: function () {
			//aggiunge nuova app con dati del form: metodo assegnato a button
			this.datiPWA.push(this.newApp);
			this.newApp = {
				name: "",
				description: "",
				price: "",
			};
		},
	},
	mounted() {
		this.getPWA();
	},
	template: `
  <h1>Gestione <span class='purple'>Strumenti</span></h1>
  <!--### ELENCO APP ###-->
  <div class='row'>
    <div class='col-12'>
      <h2>Elenco strumenti</h2>
      <div class='row'>
        <div id="appContainer" class="col-12 col-md-6 col-lg-4 my-4 align-items-center d-flex" v-for="(app, index) in datiPWA">
          <div class='row'>
            <div class='col-auto align-items-center d-flex'>
              <!-- ##### ACCESSIBILITÀ: :alt ##### -->
              <img class="mx-2 " id="icon" :src="app.icons" :alt="'icona di '+app.name"/>

            </div>
            <div class='col'>
              <h5>{{app.name}}</h5>
              <p class='text-muted'>{{app.description}}</p>
              <button type="button" class="btn btn-outline-primary btn-sm py-0 px-2">{{app.price}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--### MODIFICA APP ###-->
  <h2>Modifica App Store</h2>
  <label class="purple" for="appSelect">Seleziona l'app da modificare</label>
  <select id="appSelect" class="form-select" v-model="selected">
    <option disabled value="">Seleziona un'app</option>
    <option v-for="(app, index) in datiPWA" :value="index">{{app.name}}</option>
  </select>
  <div class='row'>
    <section v-if="datiPWA && datiPWA.length > 0" id="appContainer" class="my-4" aria-live="polite">
    <!-- ##### ACCESSIBILE GRAZIE A aria-live="polite" ##### -->
      <div class='row'>
        <div class='col-auto align-items-center d-flex'>
          <img class="mx-2" id="icon" v-bind:src="datiPWA[selected].icons" :alt="'icona di '+datiPWA[selected].name"/>
        </div>
        <div class='col'>
          <h5>{{datiPWA[selected].name}}</h5>
          <p>{{datiPWA[selected].description}}</p>
          <button type="button" class="btn btn-outline-primary btn-sm py-0 px-2">{{datiPWA[selected].price}}</button>
        </div>
      </div>
    </section>
    <div v-if="datiPWA && datiPWA.length > 0">
      <h2>Stai modificando <span class='purple'>{{ datiPWA[selected].name }}</span></h2>
      <form>
        <!-- ##### ACCESSIBILITA GARANTITA DA "aria-describedby" ##### -->
        <div class="form-floating mb-3">\
        <input v-model="datiPWA[selected].name" id="appName" type="text" class="form-control" aria-describedby="ariaAppName"/><label for="appName">Nome App:</label></div>
        <div id="ariaAppName" class="visually-hidden">Inserire un nuovo nome per l'app selezionata</div>
        <div class="form-floating mb-3">\
        <input v-model="datiPWA[selected].description" id="appDescription" type="text" class="form-control" aria-describedby="ariaAppDescription"/><label for="appDescription">Descrizione App:</label></div>
        <div id="ariaAppDescription" class="visually-hidden">Inserire una nuova descrizione per l'app selezionata</div>
        <div class="form-floating mb-3">\
        <input v-model="datiPWA[selected].price" id="appPrice" type="text" class="form-control" aria-describedby="ariaAppPrice"/><label for="appPrice">Prezzo:</label></div>
        <div id="ariaAppPrice" class="visually-hidden">Inserire un nuovo prezzo per l'app selezionata</div>
      </form>
      <button type="button" class="btn btn-outline-danger" @click='this.deleteApp()'>Rimuovi App</button>
    </div>
  </div>
  <!--### AGGIUNGI APP ###-->
  <div class="row">
    <div v-if="datiPWA && datiPWA.length > 0" class="mt-2">
      <h2>Aggiungi uno strumento</h2>
      <form>
        <!-- ##### ACCESSIBILITA GARANTITA DA "aria-describedby" ##### -->
        <div class="form-floating mb-3">\
        <input v-model="newApp.name" id="appName" type="text" class="form-control" aria-describedby="ariaNewName"/><label for="appName">Nome App:</label></div>
        <div id="ariaNewName" class="visually-hidden">Inserire un nome per la nuova App</div>
        <div class="form-floating mb-3">\
        <input v-model="newApp.description" id="appDescription" type="text" class="form-control" aria-describedby="ariaNewDescription"/><label for="appDescription">Descrizione App:</label></div>
        <div id="ariaNewDescription" class="visually-hidden">Inserire una descrizione per la nuova App</div>
        <div class="form-floating mb-3">\
        <input v-model="newApp.price" id="appPrice" type="text" class="form-control" aria-describedby="ariaNewPrice"/><label for="appPrice">Prezzo:</label></div>
        <div id="ariaNewPrice" class="visually-hidden">Inserire un prezzo per la nuova App</div>
      </form>
      <button type="button" class="btn btn-outline-primary" @click='this.pushApp()'>Aggiungi App</button>
    </div>
  </div>
  `,
};
const features = {
template: `
<div class="container">
  <h1 class="purple">Approfondimenti</h1>
  <p>Questa sezione è dedicata all'approfondimento tecnico e pratico di <strong>Milligram CSS</strong>, con esempi reali, comparazioni, tecniche di estensione e consigli di utilizzo.</p>

  <hr/>

  <h2>Confronto tra framework</h2>
  <table>
    <thead>
      <tr>
        <th>Caratteristica</th>
        <th>Milligram</th>
        <th>Bootstrap</th>
        <th>Tailwind</th>
        <th>Bulma</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Peso (minificato)</td><td>~2KB</td><td>~150KB</td><td>~50KB</td><td>~180KB</td></tr>
      <tr><td>Filosofia</td><td>Minimal</td><td>Componenti</td><td>Utility-first</td><td>Componenti</td></tr>
      <tr><td>Griglia</td><td>✓</td><td>✓</td><td>(via classi)</td><td>✓</td></tr>
      <tr><td>Curva apprendimento</td><td>Molto bassa</td><td>Media</td><td>Alta</td><td>Media</td></tr>
    </tbody>
  </table>

  <hr/>

  <h2>Esempio pratico</h2>
  <pre><code>
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;column column-50&quot;&gt;
    &lt;label for=&quot;nome&quot;&gt;Nome&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;nome&quot; placeholder=&quot;Inserisci il tuo nome&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;column column-50&quot;&gt;
    &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;
    &lt;input type=&quot;email&quot; id=&quot;email&quot; placeholder=&quot;Inserisci email&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;
  </code></pre>

  <hr/>

  <h2>Estendere Milligram</h2>
  <ul>
    <li>Creare componenti custom (es. <code>.card</code>, <code>.navbar</code>)</li>
    <li>Personalizzare variabili CSS globali</li>
    <li>Integrare con librerie leggere come AlpineJS o Vue</li>
  </ul>

  <hr/>

  <h2>Best practices</h2>
  <ul>
    <li>Non usare per progetti troppo complessi</li>
    <li>Separare bene stili personalizzati</li>
    <li>Testare la responsività manualmente</li>
  </ul>
</div>
`

};

const routes = [
	{
		path: "/",
		component: home,
	},
	{
		path: "/features",
		component: features,
	},
	{
		path: "/jsonApp",
		component: jsonApp,
	},
	{
		path: "/editApp",
		component: editApp,
	},
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

const vueApp = Vue.createApp({
	data() {
		return {};
	},
	methods: {
		mountOk: function () {
			console.log("mount ok");
		},
	},
	mounted() {
		this.mountOk();
	},
});

vueApp.use(router);
vueApp.mount("#vueApp");
