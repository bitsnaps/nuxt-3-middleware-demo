// Global middlewares are executed by alphabetical order
export default defineNuxtRouteMiddleware(async (to, from) => {    
    console.log('----- Setup Global middleware');

    /* Handling an error in a middleware
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        return navigateTo('/profile/'+ data.user.name);
    } catch (error) {
        return abortNavigation("Failing at a middleware: "+ error);
    }*/

    /*/ Custom error
    if (to.path === '/login'){
        throw createError({
            statusCode: 405,
            statusMessage: 'Oh, sorry it broke!'
        })
    }*/
})