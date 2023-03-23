import { BusPage } from "../components/Bus";
import { DashBoardContainer } from "../components/Containers/DashboardContainer";

export function BusScreen(){
    return(
        <DashBoardContainer>
            <BusPage/>
        </DashBoardContainer>
    )
}