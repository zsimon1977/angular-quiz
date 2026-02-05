window.QUESTION_POOL = [

/* ===== 1–10: Angular architektúra ===== */
{level:"medior",q:"Mi az Angular change detection célja?",a:["DOM frissítés","Állapotváltozások felismerése","Routing"],c:1},
{level:"medior",q:"Mi indítja el a change detection-t?",a:["HTTP","Zone.js események","CSS"],c:1},
{level:"medior",q:"Mi az OnPush change detection?",a:["Mindig fut","Csak input változáskor","Soha nem fut"],c:1},
{level:"medior",q:"Mikor érdemes OnPush-t használni?",a:["Kis appnál","Teljesítmény optimalizálásra","Routing miatt"],c:1},
{level:"medior",q:"Mi a smart vs dumb component?",a:["Service","State kezelő vs presentational","Routing"],c:1},
{level:"medior",q:"Mi az Angular moduláris felépítés előnye?",a:["Gyorsabb CSS","Skálázhatóság","Kevesebb JS"],c:1},
{level:"medior",q:"Mi a core module célja?",a:["Feature","Singleton service-ek","Routing"],c:1},
{level:"medior",q:"Mi a shared module célja?",a:["Routing","Újrahasznosítható elemek","HTTP"],c:1},
{level:"medior",q:"Miért nem jó mindent AppModule-be rakni?",a:["Build hiba","Karbantarthatóság","Routing"],c:1},
{level:"medior",q:"Mi a barrel file (index.ts)?",a:["Build","Export egyszerűsítés","Routing"],c:1},

/* ===== 11–20: Change detection mélyebben ===== */
{level:"medior",q:"Mi a ChangeDetectorRef szerepe?",a:["Routing","Manuális CD vezérlés","Service"],c:1},
{level:"medior",q:"Mit csinál a markForCheck()?",a:["CD tiltás","OnPush újraellenőrzés","DOM törlés"],c:1},
{level:"medior",q:"Mit csinál a detectChanges()?",a:["Teljes app CD","Aktuális component frissítés","Routing"],c:1},
{level:"medior",q:"Mi az ExpressionChangedAfterItHasBeenCheckedError oka?",a:["CSS","Nem várt állapotváltozás","HTTP"],c:1},
{level:"medior",q:"Mikor fordul elő ez az error?",a:["Buildkor","Change detection után","Routingkor"],c:1},
{level:"medior",q:"Mi a lifecycle sorrend helyesen?",a:["constructor → ngOnInit → ngAfterViewInit","ngOnInit → constructor","ngAfterViewInit → constructor"],c:0},
{level:"medior",q:"Mi a ngAfterViewInit szerepe?",a:["DOM elérhető","Service inject","Routing"],c:0},
{level:"medior",q:"Mi a ngAfterContentInit?",a:["Projected content","HTTP","Change detection"],c:0},
{level:"medior",q:"Mi a Content Projection?",a:["Routing","ng-content használat","Service"],c:1},
{level:"medior",q:"Mire jó az ng-template?",a:["CSS","Lazy template","HTTP"],c:1},

/* ===== 21–30: RxJS alapok ===== */
{level:"medior",q:"Mi az RxJS célja Angularban?",a:["Routing","Aszinkron adatkezelés","CSS"],c:1},
{level:"medior",q:"Mi a cold observable?",a:["Megosztott","Feliratkozáskor indul","Singleton"],c:1},
{level:"medior",q:"Mi a hot observable?",a:["Feliratkozás független","Feliratkozáskor indul","Promise"],c:0},
{level:"medior",q:"Mi a Subject?",a:["Observable","Observer","Mindkettő"],c:2},
{level:"medior",q:"Mi a BehaviorSubject előnye?",a:["Nincs kezdőérték","Tárolja az utolsó értéket","Async"],c:1},
{level:"medior",q:"Mi a ReplaySubject?",a:["1 érték","Több korábbi érték","Promise"],c:1},
{level:"medior",q:"Mi a takeUntil célja?",a:["Indítás","Leiratkozás","Error kezelés"],c:1},
{level:"medior",q:"Mi a pipe() RxJS-ben?",a:["Template","Operátor láncolás","Routing"],c:1},
{level:"medior",q:"Mi a map operator?",a:["Szűrés","Átalakítás","Gyűjtés"],c:1},
{level:"medior",q:"Mi a switchMap előnye?",a:["Párhuzamos","Korábbi observable megszakítása","Cache"],c:1},

/* ===== 31–40: HTTP & API ===== */
{level:"medior",q:"Miért Observable-t ad vissza a HttpClient?",a:["Promise rossz","Cancelálható","Gyorsabb"],c:1},
{level:"medior",q:"Mi a HttpInterceptor szerepe?",a:["Routing","HTTP kérés/módosítás","CSS"],c:1},
{level:"medior",q:"Mire jó egy interceptor?",a:["Auth token","Error handling","Mindkettő"],c:2},
{level:"medior",q:"Hogyan regisztráljuk az interceptort?",a:["Component","Provider","Routing"],c:1},
{level:"medior",q:"Mi az HttpParams?",a:["Body","Query paraméter","Header"],c:1},
{level:"medior",q:"Mi a catchError célja?",a:["Stop","Error kezelés","Retry"],c:1},
{level:"medior",q:"Mi a retry operator?",a:["Cache","Újrapróbálás","Mapping"],c:1},
{level:"medior",q:"Mi az async/await Angularban?",a:["RxJS","Promise kezelés","Routing"],c:1},
{level:"medior",q:"Mikor nem ajánlott async/await?",a:["Egyszerű hívás","Stream kezelésnél","HTTP"],c:1},
{level:"medior",q:"Mi a CORS?",a:["Angular hiba","Böngésző biztonság","Backend"],c:1},

/* ===== 41–50: Routing advanced ===== */
{level:"medior",q:"Mi a Route Guard?",a:["Service","Navigáció védelem","CSS"],c:1},
{level:"medior",q:"Mi a CanActivate?",a:["Belépés","Kilépés","Betöltés"],c:0},
{level:"medior",q:"Mi a CanDeactivate?",a:["Kilépés védelem","Auth","Resolver"],c:0},
{level:"medior",q:"Mi a Resolve guard?",a:["Auth","Adat előtöltés","CSS"],c:1},
{level:"medior",q:"Mi a lazy loaded route előnye?",a:["Gyorsabb build","Kisebb initial bundle","Routing egyszerű"],c:1},
{level:"medior",q:"Mi az Angular Router esemény?",a:["HTTP","NavigationStart stb.","CSS"],c:1},
{level:"medior",q:"Mi a router.navigate vs navigateByUrl?",a:["Ugyanaz","Eltérő API","Deprecated"],c:1},
{level:"medior",q:"Mi a relative navigation?",a:["Abszolút","Aktuális route-hoz képest","Service"],c:1},
{level:"medior",q:"Mi a fragment?",a:["Hash","# utáni rész","Query"],c:1},
{level:"medior",q:"Mi az outlet name?",a:["CSS","Több router-outlet","Service"],c:1},

/* ===== 51–60: Forms ===== */
{level:"medior",q:"Mi a template-driven form előnye?",a:["Kontroll","Egyszerű","Gyors"],c:1},
{level:"medior",q:"Mi a reactive form előnye?",a:["HTML","Programozható","CSS"],c:1},
{level:"medior",q:"Mi a FormGroup?",a:["Input","Form állapot","Validator"],c:1},
{level:"medior",q:"Mi a FormControl?",a:["Form","Mező","Service"],c:1},
{level:"medior",q:"Mi a FormArray?",a:["Lista mező","Service","Routing"],c:0},
{level:"medior",q:"Mi a synchronous validator?",a:["Async","Azonnali validáció","HTTP"],c:1},
{level:"medior",q:"Mi az async validator?",a:["Backend ellenőrzés","CSS","Routing"],c:0},
{level:"medior",q:"Hol fut a validator?",a:["Component","FormControl","Service"],c:1},
{level:"medior",q:"Mi a valueChanges?",a:["Observable","Event","Promise"],c:0},
{level:"medior",q:"Mi a statusChanges?",a:["State","Validáció állapot","Routing"],c:1},

/* ===== 61–70: State management ===== */
{level:"medior",q:"Mi a state management célja?",a:["Routing","Állapot kezelése","CSS"],c:1},
{level:"medior",q:"Mikor kell state management?",a:["Kis app","Komplex állapot","CSS"],c:1},
{level:"medior",q:"Mi az NgRx?",a:["UI","Redux alapú state","HTTP"],c:1},
{level:"medior",q:"Mi az action?",a:["State","Esemény","Reducer"],c:1},
{level:"medior",q:"Mi a reducer?",a:["State módosítás","HTTP","Routing"],c:0},
{level:"medior",q:"Mi a selector?",a:["State lekérdezés","Routing","CSS"],c:0},
{level:"medior",q:"Mi az effect?",a:["Side-effect kezelés","UI","CSS"],c:0},
{level:"medior",q:"Miért immutable a state?",a:["Gyors","Kiszámítható","RxJS"],c:1},
{level:"medior",q:"Mi a store?",a:["Service","Állapot tár","Component"],c:1},
{level:"medior",q:"Mi az entity adapter?",a:["Lista kezelés","Routing","CSS"],c:0},

/* ===== 71–80: Performance ===== */
{level:"medior",q:"Mi lassítja az Angular appot?",a:["CSS","Túl sok CD","Routing"],c:1},
{level:"medior",q:"Mi a trackBy előnye?",a:["DOM csökkentés","CSS","Routing"],c:0},
{level:"medior",q:"Mi az AOT compilation?",a:["Runtime","Build idejű fordítás","CSS"],c:1},
{level:"medior",q:"Mi az Ivy?",a:["Renderer","Angular compiler","CSS"],c:1},
{level:"medior",q:"Mi a bundle size csökkentés módja?",a:["Lazy load","CSS","HTML"],c:0},
{level:"medior",q:"Mi a tree shaking?",a:["Dead code eltávolítás","Routing","HTTP"],c:0},
{level:"medior",q:"Mi a pure pipe előnye?",a:["Kevesebb futás","CSS","Routing"],c:0},
{level:"medior",q:"Mi a change detection stratégia hatása?",a:["Semmi","Teljesítmény","Routing"],c:1},
{level:"medior",q:"Mi a web worker célja?",a:["UI szál","Háttér feldolgozás","Routing"],c:1},
{level:"medior",q:"Mi az Angular Universal?",a:["CSR","SSR","CSS"],c:1},

/* ===== 81–100: Tesztelés & best practice ===== */
{level:"medior",q:"Mi a unit teszt Angularban?",a:["E2E","Komponens teszt","Build"],c:1},
{level:"medior",q:"Melyik keretrendszer a default?",a:["Jasmine","Mocha","Jest"],c:0},
{level:"medior",q:"Mi a TestBed?",a:["Service","Teszt környezet","Routing"],c:1},
{level:"medior",q:"Mi a mockolás célja?",a:["Gyorsítás","Izoláció","CSS"],c:1},
{level:"medior",q:"Mi a spyOn?",a:["Mock","Metódus figyelés","CSS"],c:1},
{level:"medior",q:"Mi az E2E teszt?",a:["Unit","Felhasználói flow","Service"],c:1},
{level:"medior",q:"Mi volt a Protractor?",a:["E2E","Deprecated tool","CSS"],c:1},
{level:"medior",q:"Mi a Cypress előnye?",a:["Stabil","Gyors","Mindkettő"],c:2},
{level:"medior",q:"Mi a linting szerepe?",a:["CSS","Kód minőség","Routing"],c:1},
{level:"medior",q:"Mi a best practice Angularban?",a:["Nagy component","Separation of concerns","CSS"],c:1}

];
