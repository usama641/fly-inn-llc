import React from 'react'
import ReduxProvider from './ReduxProvider'
import QueryProvider from './QueryClientProvider'
import AntdThemeProvider from './AntdThemeProvider'
import { App } from 'antd';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import NextAuthProvider from './nextauth';
import { AppMessageProvider } from './AppMessageProvider';

const AppProviders = ({children}:{children : React.ReactNode}) => {
  return (
    <ReduxProvider>
      <QueryProvider>
        <AntdRegistry>
          <AntdThemeProvider>
            <NextAuthProvider>
              <AppMessageProvider>
                {children}
              </AppMessageProvider>
            </NextAuthProvider>
          </AntdThemeProvider>
        </AntdRegistry>
      </QueryProvider>
    </ReduxProvider>
  )
}

export default AppProviders