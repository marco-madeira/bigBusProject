import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BusDriverScreen } from "../screens/BusDriverScreen";
import { BusScreen } from "../screens/BusSceen";
import {SearchTravelScreen } from "../screens/SearchTravelSceen";
import { LoginScreen } from "../screens/LoginScreen";
import { TicketScreen } from "../screens/TicketScreen";
import { TravelScreen } from "../screens/TravelScreen";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginScreen/>}/>
        <Route path="/customer/searchTravel" element={<SearchTravelScreen/>}/>
        <Route path="/customer/ticket" element={<TicketScreen/>}/>
        <Route path="/company/bus" element={<BusScreen/>}/>
        <Route path="/company/busDriver" element={<BusDriverScreen/>}/>
        <Route path="/company/travel" element={<TravelScreen/>}/>
      </Routes>
    </Router>
  );
}
