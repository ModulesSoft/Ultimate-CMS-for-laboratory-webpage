import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'

const Contact = () => import('./components/pages/Contact');
const Home = () => import('./components/pages/Home');
const Category = () => import('./components/pages/Category');
const Page = () => import('./components/pages/Page');
const Students = () => import('./components/pages/Students');
const Content = () => import('./components/pages/Content');

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: `${i18n.locale}/home`,
            meta: {
                progress: {
                    func: [
                        {call: 'color', modifier: 'temp', argument: '#31c2eb'},
                        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                    ]
                }
            }
        },
        {
            path: '/:lang',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                {
                    path: 'contact-us',
                    name: 'contact us',
                    component: Contact,
                    meta: {
                        progress: {
                            func: [
                                {call: 'color', modifier: 'temp', argument: '#31c2eb'},
                                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                                {call: 'location', modifier: 'temp', argument: 'top'},
                                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                            ]
                        }
                    }
                },
                {
                    path: 'home',
                    name: 'Home Page',
                    component: Home,
                    meta: {
                        progress: {
                            func: [
                                {call: 'color', modifier: 'temp', argument: '#31c2eb'},
                                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                                {call: 'location', modifier: 'temp', argument: 'top'},
                                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                            ]
                        }
                    }
                },
                {
                    path: 'students/:filter',
                    name: 'Students',
                    component: Students,
                    meta: {
                        progress: {
                            func: [
                                {call: 'color', modifier: 'temp', argument: '#31c2eb'},
                                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                                {call: 'location', modifier: 'temp', argument: 'top'},
                                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                            ]
                        }
                    }
                },
                {
                    path: 'student/:studentName',
                    name: 'Student',
                    component: Content,
                    meta: {
                        progress: {
                            func: [
                                {call: 'color', modifier: 'temp', argument: '#31c2eb'},
                                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                                {call: 'location', modifier: 'temp', argument: 'top'},
                                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                            ]
                        }
                    }
                },
                {
                    path: 'category/:slug',
                    name: 'category',
                    component: Category,
                    meta: {
                        progress: {
                            func: [
                                {call: 'color', modifier: 'temp', argument: '#31c2eb'},
                                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                                {call: 'location', modifier: 'temp', argument: 'top'},
                                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                            ]
                        }
                    }
                },
                {
                    path: 'page/:slug',
                    name: 'pages',
                    component: Page,
                    meta: {
                        progress: {
                            func: [
                                {call: 'color', modifier: 'temp', argument: '#31c2eb'},
                                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                                {call: 'location', modifier: 'temp', argument: 'top'},
                                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                            ]
                        }
                    }
                },

            ]
        }
    ]
})