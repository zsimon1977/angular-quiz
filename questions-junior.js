window.QUESTION_POOL = [

/* ===== 1–10: Angular alapok ===== */
{level:"junior",q:"Mi az Angular?",a:["CSS library","Frontend framework","Backend framework"],c:1},
{level:"junior",q:"Melyik nyelvet használja alapból az Angular?",a:["JavaScript","TypeScript","Java"],c:1},
{level:"junior",q:"Mi az Angular CLI célja?",a:["Build szerver","Projekt generálás és eszközök","CSS preprocesszor"],c:1},
{level:"junior",q:"Melyik parancs indít fejlesztői szervert?",a:["ng build","ng serve","ng start"],c:1},
{level:"junior",q:"Mi az Angular fő építőeleme?",a:["Component","Service","Module"],c:0},
{level:"junior",q:"Mi a component feladata?",a:["Adatbázis kezelés","UI logika és template","Routing"],c:1},
{level:"junior",q:"Mi a template?",a:["CSS fájl","HTML nézet","Config fájl"],c:1},
{level:"junior",q:"Mi a selector szerepe?",a:["CSS kiválasztó","Component hivatkozás HTML-ben","Route"],c:1},
{level:"junior",q:"Mi a decorator Angularban?",a:["Komment","Metadata jelölés","CSS osztály"],c:1},
{level:"junior",q:"Melyik decorator jelöl componentet?",a:["@Injectable","@NgModule","@Component"],c:2},

/* ===== 11–20: Modules ===== */
{level:"junior",q:"Mi az NgModule?",a:["Service","Angular modul","Component"],c:1},
{level:"junior",q:"Mi az AppModule szerepe?",a:["Routing","Root modul","Service registry"],c:1},
{level:"junior",q:"Mi a declarations mező?",a:["Servicek","Componentek és pipe-ok","Route-ok"],c:1},
{level:"junior",q:"Mi az imports mező?",a:["CSS","Más modulok","Servicek"],c:1},
{level:"junior",q:"Mi a bootstrap mező?",a:["Service","Root component","Routing"],c:1},
{level:"junior",q:"Miért kell CommonModule?",a:["HTTP","Alap direktívák","Forms"],c:1},
{level:"junior",q:"Mi a feature module?",a:["Lazy modul","Funkcionális modul","Service"],c:1},
{level:"junior",q:"Mi a lazy loading?",a:["Azonnali betöltés","Késleltetett modul betöltés","CSS töltés"],c:1},
{level:"junior",q:"Mi a SharedModule célja?",a:["Servicek","Újrahasznosítható elemek","Routing"],c:1},
{level:"junior",q:"Mi az Angular Material?",a:["Backend","UI komponens könyvtár","CSS framework"],c:1},

/* ===== 21–30: Data binding ===== */
{level:"junior",q:"Mi az interpolation?",a:["{{ }} használata","Event binding","Property binding"],c:0},
{level:"junior",q:"Mi a property binding?",a:["()","[]","{{}}"],c:1},
{level:"junior",q:"Mi az event binding?",a:["()","[]","{{}}"],c:0},
{level:"junior",q:"Mi a two-way binding?",a:["[]","()","[()]"],c:2},
{level:"junior",q:"Melyik direktíva kell ngModelhez?",a:["CommonModule","FormsModule","HttpClientModule"],c:1},
{level:"junior",q:"Mi a [(ngModel)] célja?",a:["Routing","Two-way adatkapcsolat","Service inject"],c:1},
{level:"junior",q:"Mi az input binding?",a:["@Input","@Output","@Injectable"],c:0},
{level:"junior",q:"Mi az output binding?",a:["@Input","@Output","@NgModule"],c:1},
{level:"junior",q:"Mi az EventEmitter?",a:["Observable","Esemény küldés","Promise"],c:1},
{level:"junior",q:"Mire használjuk a $event-et?",a:["Service","Event adat","Routing"],c:1},

/* ===== 31–40: Direktívák ===== */
{level:"junior",q:"Mi a structural directive?",a:["CSS","DOM módosítás","Service"],c:1},
{level:"junior",q:"Melyik structural directive?",a:["ngIf","ngClass","ngStyle"],c:0},
{level:"junior",q:"Mire jó az *ngFor?",a:["Feltétel","Lista megjelenítés","Routing"],c:1},
{level:"junior",q:"Mi az ngClass?",a:["Structural","Attribute directive","Pipe"],c:1},
{level:"junior",q:"Mi az ngStyle?",a:["Pipe","Attribute directive","Module"],c:1},
{level:"junior",q:"Mi történik *ngIf=false esetén?",a:["CSS elrejt","DOM-ból kivesz","Semmi"],c:1},
{level:"junior",q:"Mi a trackBy célja?",a:["Gyorsítás","DOM optimalizálás","Routing"],c:1},
{level:"junior",q:"Mi az attribute directive?",a:["DOM struktúra","Megjelenés módosítás","Service"],c:1},
{level:"junior",q:"Mi a custom directive?",a:["Beépített","Saját direktíva","Pipe"],c:1},
{level:"junior",q:"Hol deklaráljuk a directive-et?",a:["Service","Module","Routing"],c:1},

/* ===== 41–50: Services & DI ===== */
{level:"junior",q:"Mi a service célja?",a:["UI","Business logika","Routing"],c:1},
{level:"junior",q:"Melyik decorator jelöl service-t?",a:["@Component","@Injectable","@Pipe"],c:1},
{level:"junior",q:"Mi a dependency injection?",a:["Új példány","Függőség beadása","Routing"],c:1},
{level:"junior",q:"Hol lehet providert definiálni?",a:["Component","Module","Mindkettő"],c:2},
{level:"junior",q:"Mi az injector?",a:["Service","DI motor","Component"],c:1},
{level:"junior",q:"Mi a singleton service?",a:["Egy példány","Mindenhol új","Lazy"],c:0},
{level:"junior",q:"Mi történik ha component provider?",a:["Globális","Component szintű példány","Hiba"],c:1},
{level:"junior",q:"Mi az HttpClient?",a:["Backend","HTTP kommunikáció","Routing"],c:1},
{level:"junior",q:"Melyik modul kell hozzá?",a:["FormsModule","HttpClientModule","CommonModule"],c:1},
{level:"junior",q:"Mit ad vissza a HttpClient?",a:["Promise","Observable","Array"],c:1},

/* ===== 51–60: Routing ===== */
{level:"junior",q:"Mi a RouterModule?",a:["Service","Routing modul","Component"],c:1},
{level:"junior",q:"Mi a router-outlet?",a:["CSS","Nézet helye","Service"],c:1},
{level:"junior",q:"Mi az útvonal (route)?",a:["Service","URL mapping","Component"],c:1},
{level:"junior",q:"Mi a path?",a:["URL szegmens","Service","Selector"],c:0},
{level:"junior",q:"Mi a component route-ban?",a:["Service","Megjelenítendő component","Module"],c:1},
{level:"junior",q:"Mi a redirectTo?",a:["Átirányítás","Service","Guard"],c:0},
{level:"junior",q:"Mi az ActivatedRoute?",a:["HTTP","Route információ","Guard"],c:1},
{level:"junior",q:"Mi a paramMap?",a:["Query","Paraméterek","Service"],c:1},
{level:"junior",q:"Mi a query param?",a:["URL extra adat","Service","Component"],c:0},
{level:"junior",q:"Mi a wildcard route?",a:["*","Fallback route","Guard"],c:1},

/* ===== 61–70: Pipes ===== */
{level:"junior",q:"Mi a pipe?",a:["Service","Adat transzformáció","Routing"],c:1},
{level:"junior",q:"Melyik beépített pipe?",a:["async","http","router"],c:0},
{level:"junior",q:"Mi az async pipe?",a:["Promise","Observable kezelése","CSS"],c:1},
{level:"junior",q:"Mi a date pipe?",a:["Formázás","Routing","Service"],c:0},
{level:"junior",q:"Mi a currency pipe?",a:["Szám","Pénz formázás","HTTP"],c:1},
{level:"junior",q:"Mi a custom pipe?",a:["Saját","Beépített","Deprecated"],c:0},
{level:"junior",q:"Melyik decorator kell pipe-hoz?",a:["@Pipe","@Component","@NgModule"],c:0},
{level:"junior",q:"Hol deklaráljuk a pipe-ot?",a:["Module","Service","Routing"],c:0},
{level:"junior",q:"Mi a pure pipe?",a:["Mindig fut","Csak input változáskor","Async"],c:1},
{level:"junior",q:"Mi az impure pipe hátránya?",a:["Gyors","Sokszor fut","Nem működik"],c:1},

/* ===== 71–100: Vegyes alapok ===== */
{level:"junior",q:"Mi az Observable?",a:["Promise","Adatfolyam","Array"],c:1},
{level:"junior",q:"Melyik library adja az Observable-t?",a:["RxJS","Angular","Zone.js"],c:0},
{level:"junior",q:"Mi a subscribe célja?",a:["Indítás","Feliratkozás","Leállítás"],c:1},
{level:"junior",q:"Mi az unsubscribe?",a:["Feliratkozás","Leiratkozás","Promise"],c:1},
{level:"junior",q:"Mi a memory leak oka Angularban?",a:["CSS","Nem leiratkozott Observable","Routing"],c:1},
{level:"junior",q:"Mi az ngOnInit?",a:["Constructor","Lifecycle hook","Service"],c:1},
{level:"junior",q:"Mi az ngOnDestroy?",a:["Init","Cleanup hook","Routing"],c:1},
{level:"junior",q:"Mikor fut a constructor?",a:["DOM után","Példányosításkor","Routingkor"],c:1},
{level:"junior",q:"Mi a lifecycle hook?",a:["Event","Életciklus metódus","Pipe"],c:1},
{level:"junior",q:"Mi a Zone.js szerepe?",a:["Routing","Change detection","HTTP"],c:1}

];
