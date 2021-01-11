import VueRouter from 'vue-router';
import MainPage from '../main-page';
import Profile from '../profile';

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/user/:id',
            name: "users",
            component: Profile
        }

    ]
})

