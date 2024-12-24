import './App.css'
import PriceDetails from './components/PriceDetails/PriceDetails'
import TicketCard from './components/TicketCard/TicketCard'
import { CurrencyContextProvider } from './context/CurrencyContext/CurrencyContext'
import { TransferContextProvider } from './context/TransferContext/TransferContext'
import { TicketsData } from './data/Ticket'
import plane from './images/plane_aidplane_aircraft_icon_246044.svg'

function App() {
  return (
    <TransferContextProvider>
      <CurrencyContextProvider>
        <img src={plane} alt="Plane"></img>
        <section className="currency">
          <PriceDetails />
          <TicketCard tickets={TicketsData.tickets} />
        </section>
      </CurrencyContextProvider>
    </TransferContextProvider>
  );
}

export default App;

