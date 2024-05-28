import Navbar from '@/components/shared/navbar';
import { SidebarLG } from '@/components/shared/sidebar';
import { Suspensed } from '@/components/ui/suspensed';
import { Route, Routes } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="w-full">
      <SidebarLG />
      <div className="flex-1 min-h-[100vh] ml-0 lg:ml-[240px]">
        <Navbar />

        <div className="w-full mt-[140px] px-4">
          <div className="gap-10  flex flex-col w-full  container mx-auto">
            <div className="w-full pb-[120px]">
              <Routes>
                <Route
                  path="dashboard"
                  element={
                    <Suspensed>
                      <div>Dashboard</div>
                    </Suspensed>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
