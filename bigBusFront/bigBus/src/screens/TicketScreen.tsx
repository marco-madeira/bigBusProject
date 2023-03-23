import { DashBoardContainer } from "../components/Containers/DashboardContainer";
import { TicketPage } from "../components/Ticket";

export function TicketScreen(){
    return(
        <DashBoardContainer>
            <TicketPage/>
        </DashBoardContainer>
    )
}