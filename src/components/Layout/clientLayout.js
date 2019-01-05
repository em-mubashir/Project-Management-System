import { Content,Footer, Header, clientSidebar} from 'components/Layout';
import React from 'react';

const clientLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-light">
        <clientSidebar />
        <Content fluid onClick={this.handleContentClick}>
          <Header />
          {children}
          <Footer />
        </Content>

       
      </main>
);

export default clientLayout;
