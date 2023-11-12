// Global middlewares are executed by alphabetical order
export default defineNuxtRouteMiddleware((to, from) => {    
    console.log('----- Setup Global middleware');
})