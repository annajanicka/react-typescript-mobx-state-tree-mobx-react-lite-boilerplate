import * as React from 'react';
import Footer from './shared/footer';
import About from './shared/about';

export interface ILayoutProps {
  router: React.ComponentType;
  // tslint:disable-next-line:no-any
  routes: React.ComponentType<any>;
}

class Layout extends React.Component<ILayoutProps> {
  render() {
    const Router = this.props.router;
    const Routes = this.props.routes;
    
    return (
      <div id="main">
        <Router>
          <Routes></Routes>
        </Router>
        <Footer />
      </div>
    )
  }
};

export default Layout;