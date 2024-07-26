import { ConfigProvider } from 'antd';
import AppRouter from './router';
import { themeConfig } from './theme/config';

function App() {
  return (
    <>
      <ConfigProvider theme={themeConfig}>
        <AppRouter />
      </ConfigProvider>
    </>
  );
}

export default App;
