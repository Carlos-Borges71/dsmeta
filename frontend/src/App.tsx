import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./componets/Header";
import SallesCard from "./componets/SallesCard/index";
import './index.css';

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="selles">
          <div className="dsmeta-conteiner">
          <SallesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
