import React from 'react'
// import { Switch, Route } from 'react-router-dom'

// auth
import ConfirmMail from '../views/dashboard/auth/confirm-mail'
import LockScreen from '../views/dashboard/auth/lock-screen'
import Recoverpw from '../views/dashboard/auth/recoverpw'
import SignIn from '../views/dashboard/auth/sign-in'
import SignUp from '../views/dashboard/auth/sign-up'
// errors
import Error404 from '../views/dashboard/errors/error404'
import Error500 from '../views/dashboard/errors/error500'
import Maintenance from '../views/dashboard/errors/maintenance'

// const SimpleRouter = () => {
//     return (
//             <>
//             <Switch>

//                 {/* auth */}
//                 <Route exact path="/auth/confirm-mail" component={ConfirmMail}/>
//                 <Route exact path="/auth/lock-screen"  component={LockScreen}/>
//                 <Route exact path="/auth/recoverpw"    component={Recoverpw}/>
//                 <Route exact path="/auth/sign-in"      component={SignIn}/>
//                 <Route exact path="/auth/sign-up"      component={SignUp}/>  
//                 {/* error */}
//                 <Route exact path="/errors/error404"   component={Error404}/>  
//                 <Route exact path="/errors/error500"  component={Error500}/>
//                 <Route exact path="/errors/maintenance" component={Maintenance}/>
//             </Switch>

//             </>
//     )
// }

export const SimpleRouter = [
    {
        path: 'auth/sign-in',
        element: <SignIn />
    },
    {
        path: 'auth/sign-up',
        element: <SignUp />
    },
    {
        path: 'auth/confirm-mail',
        element: <ConfirmMail />
    },
    {
        path: 'auth/lock-screen',
        element: <LockScreen />
    },
    {
        path: 'auth/recoverpw',
        element: <Recoverpw />
    },
    {
        path: 'errors/error404',
        element: <Error404 />
    },
    {
        path: 'errors/error500',
        element: <Error500 />
    },
    {
        path: 'errors/maintenance',
        element: <Maintenance />
    }
]
