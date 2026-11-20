import "../../globals.css"

import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <html lang="en">
                <body>
                    <div className="bg-orange-50 text-gray-900 lg:flex min-h-screen">
                      <Sidebar />
                      {children}  
                    </div>                
                </body>
            </html>
        </>

    );
};

export default DashboardLayout;