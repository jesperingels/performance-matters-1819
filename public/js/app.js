// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('js/service-worker.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//             return registration.update()
//         }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }
//
//

// if("serviceWorker" in navigator){
//     window.addEventListener("load",()=>{
//         navigator.serviceWorker.register("js/service-worker.js").then(regis=>{
//             console.log("SW registering")
//             return regis.update()
//         }).catch(err=> console.log(err))
//     })
// }