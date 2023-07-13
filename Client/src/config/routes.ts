import IRoute from "../interfaces/route";
import ChangePasswordPage from "../pages/auth/change";
import ForgotPasswordPage from "../pages/auth/forgot";
import LoginPage from "../pages/auth/login";
import LogoutPage from "../pages/auth/logout";
import RegisterPage from "../pages/auth/register";
import ResetPasswordPage from "../pages/auth/reset";
import HomePage from "../pages/home";
import Welcome from "../pages/welcome";
import Playground from "../pages/playground";
import Compare from "../pages/compare";
import Settings from "../pages/settings";
import Chat from "../pages/chat";


const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: Welcome,
        name: 'Welcome',
        protected: false
    },
    {
        path: '/homepage',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/homepage/playground',
        exact: true,
        component: Playground,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/homepage/compare',
        exact: true,
        component: Compare,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/homepage/settings',
        exact: true,
        component: Settings,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/homepage/chat',
        exact: true,
        component: Chat,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/register',
        exact: true,
        component: RegisterPage,
        name: 'Register Page',
        protected: false
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/change',
        exact: true,
        component: ChangePasswordPage,
        name: 'Change Password Page',
        protected: true
    },
    {
        path: '/logout',
        exact: true,
        component: LogoutPage,
        name: 'Logout Page',
        protected: true
    },
    {
        path: '/forget',
        exact: true,
        component: ForgotPasswordPage,
        name: 'Forgot Password Page',
        protected: false
    },
    {
        path: '/reset',
        exact: true,
        component: ResetPasswordPage,
        name: 'Reset Password Page',
        protected: false
    }
];

export default routes;
