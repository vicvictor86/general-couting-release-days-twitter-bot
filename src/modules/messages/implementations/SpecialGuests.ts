import SpecialGuestDTO from "../dtos/SpecialGuestDTO";

const specialGuests = [
    {
        id: "Specific person Id",
        message: "Special message",
    } as SpecialGuestDTO,
];

function getGuest(author_id: string): SpecialGuestDTO | undefined {
    const guest = specialGuests.find(guest => guest.id === author_id);

    if(!guest){
        return undefined;
    }
    
    return guest;
}

export default getGuest;