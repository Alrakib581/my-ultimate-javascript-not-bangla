/**
 * 100 er niche ticket nile par ticket price 100 taka
 * ar jodi ticket 100 er beshi hoy tahole prothom 100 ticket 100 taka. ar baki ticket er mullo ar baki ticket er mullo porbe 90 taka. ar jodi 200 er beshi ticket kini tahole prothom 100 ticket er mullo 100 taka 101 theke 200 porjonto dam 90 taka ar 200 er upore nile dam 70 taka.
 * firts 100 >= 100taka
 * 100 theke 200 90taka
 * 200 theke ... 70 taka
 */
function ticketPrice (ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <=100 ){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;  
        return totalCost;
    }
    
}
const finalResult = ticketPrice(201);
console.log(finalResult);