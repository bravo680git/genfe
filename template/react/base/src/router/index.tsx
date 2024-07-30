import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { appRoutes } from './routes';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((route) => {
          let element = route.layout ? (
            <route.layout>
              <route.page />
            </route.layout>
          ) : (
            <route.page />
          );

          if (!route.public) {
            element = <ProtectedRoute>{element}</ProtectedRoute>;
          }

          return <Route key={route.path} path={route.path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
