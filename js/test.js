let offerApplied = false
let purchasedTwoItems = confirm('If two items were purchased please press OK, otherwise press Cancel');
let offerValid = confirm('If the offer is still valid please press OK, otherwise press Cancel');
let premiumMember = confirm('If you\'re a Premium Member please press OK, otherwise press Cancel');

if (purchasedTwoItems) {
    if (premiumMember) {
        if (offerValid) {
            alert('Welcome Premium Member! Your offer is valid.');
        } else if (purchasedTwoItems) {
            alert('Welcome! Your offer is valid.');
        }
    }
} else if (!purchasedTwoItems) {
    alert('We apologize but your offer is NOT valid.');
}