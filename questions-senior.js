window.QUESTION_POOL = [

/* ===== 1–10: Angular internals ===== */
{level:"senior",q:"Mi az Angular Zone.js szerepe?",a:["Routing","Async események figyelése","HTTP"],c:1},
{level:"senior",q:"Mi történik Zone.js nélkül?",a:["CD nem működik","HTTP nem megy","Routing nem megy"],c:0},
{level:"senior",q:"Mi az Angular change detection tree?",a:["DOM fa","Component fa","Service fa"],c:1},
{level:"senior",q:"Mi a ViewRef?",a:["DOM referencia","Change detection referencia","Service"],c:1},
{level:"senior",q:"Mi a EmbeddedViewRef?",a:["Component view","ng-template view","Router view"],c:1},
{level:"senior",q:"Mi a Renderer2 célja?",a:["DOM közvetlen","Platform-független DOM","CSS"],c:1},
{level:"senior",q:"Mi az Angular platformBrowserDynamic?",a:["Build","Bootstrap API","HTTP"],c:1},
{level:"senior",q:"Mi történik bootstrap során?",a:["Service reg","Root component init","Routing"],c:1},
{level:"senior",q:"Mi a injector hierarchy?",a:["Egy injector","Fa struktúra","Singleton"],c:1},
{level:"senior",q:"Mi a provider resolution sorrend?",a:["Root→Child","Component→Module→Root","Random"],c:1},

/* ===== 11–20: Change Detection mélyen ===== */
{level:"senior",q:"Miért drága a default change detection?",a:["DOM","Teljes fa bejárás","HTTP"],c:1},
{level:"senior",q:"Mi a detached change detector?",a:["Letiltott CD","Leválasztott CD","OnPush"],c:1},
{level:"senior",q:"Mire jó a detach()?",a:["CD gyorsítás","CD kikapcsolás","Routing"],c:1},
{level:"senior",q:"Mi a reattach()?",a:["Új CD","Visszakapcsolás","Routing"],c:1},
{level:"senior",q:"Mi a manual CD vezérlés előnye?",a:["Komplex UI","Performance","Routing"],c:1},
{level:"senior",q:"Mi okozza az ExpressionChangedAfterItHasBeenCheckedError-t?",a:["Async update","Nem várt állapotváltozás","Routing"],c:1},
{level:"senior",q:"Mi a microtask vs macrotask?",a:["Promise vs setTimeout","Routing","CSS"],c:0},
{level:"senior",q:"Miért fontos ez Angularban?",a:["Zone","CD timing","HTTP"],c:1},
{level:"senior",q:"Mi az ngZone.runOutsideAngular?",a:["CD letiltás","Teljesítmény optimalizálás","Routing"],c:1},
{level:"senior",q:"Mikor használnád?",a:["Animáció","Polling","Mindkettő"],c:2},

/* ===== 21–30: RxJS advanced ===== */
{level:"senior",q:"Mi a multicasting?",a:["Több feliratkozó","Promise","HTTP"],c:0},
{level:"senior",q:"Mi a shareReplay veszélye?",a:["Memory leak","Race","Routing"],c:0},
{level:"senior",q:"Mi az unsubscribe stratégia hiánya?",a:["GC","Memory leak","Routing"],c:1},
{level:"senior",q:"Mi a higher-order observable?",a:["Observable of Observable","Promise","Subject"],c:0},
{level:"senior",q:"Mi a concatMap előnye?",a:["Sorrend","Párhuzamos","Cancel"],c:0},
{level:"senior",q:"Mi a mergeMap hátránya?",a:["Sorrend","Túl sok párhuzam","Cancel"],c:1},
{level:"senior",q:"Mi a exhaustMap tipikus használata?",a:["Login","Polling","Retry"],c:0},
{level:"senior",q:"Mi a backpressure RxJS-ben?",a:["Túl sok event","HTTP","CSS"],c:0},
{level:"senior",q:"Mi a scheduler szerepe?",a:["Thread","Időzítés","Routing"],c:1},
{level:"senior",q:"Mi a cold→hot konverzió módja?",a:["Subject","Promise","HTTP"],c:0},

/* ===== 31–40: HTTP & interceptors ===== */
{level:"senior",q:"Mi a HttpContext Angularban?",a:["Metaadat","Interceptor konfiguráció","Routing"],c:1},
{level:"senior",q:"Miért fontos az interceptor sorrend?",a:["Auth","Header","Mindkettő"],c:2},
{level:"senior",q:"Mi az idempotens HTTP hívás?",a:["GET","POST","PATCH"],c:0},
{level:"senior",q:"Mi a retryWhen előnye?",a:["Fix retry","Feltételes retry","Routing"],c:1},
{level:"senior",q:"Mi a circuit breaker kliens oldalon?",a:["Timeout","Hibák izolálása","Routing"],c:1},
{level:"senior",q:"Mi a cancellation token Angularban?",a:["AbortController","Subject","Promise"],c:0},
{level:"senior",q:"Mi a HTTP request cancel előnye?",a:["UX","Memory","Mindkettő"],c:2},
{level:"senior",q:"Mi a streaming HTTP?",a:["Chunk","WebSocket","CSS"],c:0},
{level:"senior",q:"Mi a SSE?",a:["Server push","WebSocket","HTTP polling"],c:0},
{level:"senior",q:"Mikor jobb SSE mint WS?",a:["Egyirányú","Kétirányú","Auth"],c:0},

/* ===== 41–50: Routing & guards advanced ===== */
{level:"senior",q:"Mi a preloading strategy?",a:["Lazy","Előtöltés","Routing"],c:1},
{level:"senior",q:"Mi a PreloadAllModules?",a:["Lazy","Automatikus preload","CSS"],c:1},
{level:"senior",q:"Mi a custom preloading?",a:["Service","Feltételes preload","Routing"],c:1},
{level:"senior",q:"Mi a router reuse strategy?",a:["Cache route","Reuse component","Routing"],c:2},
{level:"senior",q:"Mi a guard side-effect veszélye?",a:["Routing loop","HTTP","CSS"],c:0},
{level:"senior",q:"Mi a resolver downside?",a:["Delay","UX romlás","Routing"],c:1},
{level:"senior",q:"Mi a secondary outlet tipikus használata?",a:["Modal","Sidebar","Mindkettő"],c:2},
{level:"senior",q:"Mi a route data?",a:["Metaadat","Service","CSS"],c:0},
{level:"senior",q:"Mi a snapshot vs observable route?",a:["Static vs reactive","HTTP","CSS"],c:0},
{level:"senior",q:"Mikor NE használj snapshot-et?",a:["Param változás","Init","Routing"],c:0},

/* ===== 51–60: Forms advanced ===== */
{level:"senior",q:"Mi a ControlValueAccessor célja?",a:["Custom form control","Validation","Routing"],c:0},
{level:"senior",q:"Mi a dynamic form?",a:["Runtime form","Static","CSS"],c:0},
{level:"senior",q:"Mi a cross-field validation?",a:["Egy mező","Több mező","Async"],c:1},
{level:"senior",q:"Mi a form state serialization?",a:["JSON","Backend sync","Both"],c:2},
{level:"senior",q:"Mi a patchValue vs setValue?",a:["Partial vs full","Same","Async"],c:0},
{level:"senior",q:"Mi a form performance bottleneck?",a:["Validators","CD","Routing"],c:1},
{level:"senior",q:"Mi a debounced validation?",a:["Delay","UX","HTTP"],c:0},
{level:"senior",q:"Mi a form builder előnye?",a:["Kevesebb boilerplate","CSS","Routing"],c:0},
{level:"senior",q:"Mi a typed forms előnye?",a:["Type safety","Runtime","Routing"],c:0},
{level:"senior",q:"Mikor vezették be a typed forms-t?",a:["Angular 12","Angular 14","Angular 16"],c:1},

/* ===== 61–70: State & architecture ===== */
{level:"senior",q:"Mi a unidirectional data flow?",a:["Redux elv","Two-way","CSS"],c:0},
{level:"senior",q:"Mi a store bloat veszélye?",a:["Túl nagy state","Memory","Routing"],c:0},
{level:"senior",q:"Mi a feature store?",a:["Modul state","Global","CSS"],c:0},
{level:"senior",q:"Mi az entity normalization?",a:["Flat state","Nested","CSS"],c:0},
{level:"senior",q:"Mi a signal Angularban?",a:["Reactive primitive","RxJS","CSS"],c:0},
{level:"senior",q:"Mikor jó signal-t használni?",a:["Local state","Global store","HTTP"],c:0},
{level:"senior",q:"Mi a computed signal?",a:["Derived state","HTTP","CSS"],c:0},
{level:"senior",q:"Mi a effect signal?",a:["Side-effect","UI","Routing"],c:0},
{level:"senior",q:"Mi a signal vs observable különbség?",a:["Push vs pull","Same","CSS"],c:0},
{level:"senior",q:"Mi a zoneless Angular célja?",a:["No Zone.js","Performance","Routing"],c:1},

/* ===== 71–80: Performance & build ===== */
{level:"senior",q:"Mi a differential loading?",a:["ES5/ES2015","CSS","Routing"],c:0},
{level:"senior",q:"Mi az esbuild szerepe Angularban?",a:["Bundler","Renderer","CSS"],c:0},
{level:"senior",q:"Mi a standalone component előnye?",a:["Kevesebb boilerplate","CSS","Routing"],c:0},
{level:"senior",q:"Mi a lazy hydration?",a:["SSR optimalizálás","CSR","CSS"],c:0},
{level:"senior",q:"Mi a bundle budget?",a:["Limit","CSS","Routing"],c:0},
{level:"senior",q:"Mi a source map hátránya prod-ban?",a:["Size","Security","Both"],c:2},
{level:"senior",q:"Mi a preconnect/preload?",a:["Network hint","CSS","Routing"],c:0},
{level:"senior",q:"Mi a tree-shaking határa?",a:["Side effects","CSS","Routing"],c:0},
{level:"senior",q:"Mi a code splitting célja?",a:["Initial load csökkentés","CSS","Routing"],c:0},
{level:"senior",q:"Mi az Angular SSR fő előnye?",a:["SEO","UX","Mindkettő"],c:2},

/* ===== 81–100: Security, testing, edge ===== */
{level:"senior",q:"Mi az XSS elleni védelem Angularban?",a:["Sanitization","Escape","Both"],c:2},
{level:"senior",q:"Mi a DomSanitizer veszélye?",a:["Bypass","XSS","Both"],c:2},
{level:"senior",q:"Mi a CSRF Angularban?",a:["Cookie alapú","Token alapú","Both"],c:0},
{level:"senior",q:"Mi a strictTemplates célja?",a:["Type safety","CSS","Routing"],c:0},
{level:"senior",q:"Mi a strictInjectionParameters?",a:["DI safety","CSS","Routing"],c:0},
{level:"senior",q:"Mi a monorepo előnye?",a:["Megosztás","Skálázás","Both"],c:2},
{level:"senior",q:"Mi a Nx szerepe?",a:["Monorepo tool","CSS","Routing"],c:0},
{level:"senior",q:"Mi a microfrontend Angularban?",a:["Federation","Lazy","CSS"],c:0},
{level:"senior",q:"Mi a Module Federation?",a:["Runtime megosztás","Build","CSS"],c:0},
{level:"senior",q:"Mi a Webpack vs Vite különbség Angularnál?",a:["Build speed","CSS","Routing"],c:0}

];
