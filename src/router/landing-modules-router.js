// layout
import DefaultLayout from '../layouts/landing-modules/default-layout'

// pages
import Home from '../views/landing-modules/home'
import Faq from '../views/landing-modules/faq'
import About from '../views/landing-modules/about'
import Features from '../views/landing-modules/features'
import Pricing from '../views/landing-modules/pricing'
import Blog from '../views/landing-modules/blog'
import ContactUs from '../views/landing-modules/contact-us'
import SoftwareLandingPage from '../views/landing-modules/software-landing-page'
import BlogDetail from '../views/landing-modules/blog-detail'

export const LandingModulesRouter = [
    {
        path: '/landing-modules',
        element: <DefaultLayout header2='true'/>,
        children: [ 
            {
                path: 'home',
                element: <Home />,
            }
        ]
    },
    {
        path: '/landing-modules',
        element: <DefaultLayout header1='true'/>,
        children: [
            {
                path: 'faq',
                element: <Faq />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'features',
                element: <Features />,
            },
            {
                path: 'pricing',
                element: <Pricing />,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'contact-us',
                element: <ContactUs />,
            },
            {
                path: 'software-landing-page',
                element: <SoftwareLandingPage />,
            },
            {
                path: 'blog-detail',
                element: <BlogDetail />,
            }
        ]
    },
]