import Vue from 'vue';
import VueRouter from 'vue-router';

import mallpage from './mallpage/mallpage.vue';
import formpage from './formpage/formpage.vue';
import form from './formpage/form-component/form.vue';
import rendered from './formpage/form-component/rendered.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
    {
        path:'/',
        redirect:'/mallpage'
    },
    {
        path:'/mallpage',
        name:'mallpage',
        component: mallpage
    },
    {
        path:'/formpage', 
        component: formpage,
        children:[
            {
                path:'',
                name:'form',
                component:form
            },
            {
                path:'rendered', 
                name:'rendered',
                component:rendered
            }
        ]
    },
    {
        path:'*',
        redirect:'/'
    }
    ],
    mode:'history',
    scrollBehavior(to, from, savedPosition){
        if(to.hash){
            return {
                selector:to.hash
            };
        } else {
            return {
                x:0,
                y:0
            };
        }
    }
});