import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';


const Layout = (Component) => {


    return () => (
        <div>
            <div className="" >
                <Header />
                <ProSidebarProvider>
                    <main className="flex">
                        <SideBar />
                        <Component />
                    </main>
                </ProSidebarProvider>

            </div>
        </div>
    );
}

export default Layout
