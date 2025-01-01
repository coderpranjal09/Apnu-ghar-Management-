// Show the correct form based on button click
document.getElementById("advanceBtn").addEventListener("click", function () {
    document.getElementById("advanceForm").style.display = "block";
    document.getElementById("checkoutForm").style.display = "none";
});

document.getElementById("checkoutBtn").addEventListener("click", function () {
    document.getElementById("checkoutForm").style.display = "block";
    document.getElementById("advanceForm").style.display = "none";
});

// Handle Advance Collector form submission
document.getElementById("advanceFormDetails").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const advanceAmount = document.getElementById("advanceAmount").value;

    const params = new URLSearchParams({
        name,
        mobile,
        checkin,
        checkout,
        advanceAmount,
    });

    window.location.href = `billPage.html?${params}`;
});

// Handle Checkout form submission
document.getElementById("checkoutFormDetails").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("checkoutName").value;
    const mobile = document.getElementById("checkoutMobile").value;
    const checkin = document.getElementById("checkoutCheckin").value;
    const checkout = document.getElementById("checkoutCheckout").value;
    const roomRent = document.getElementById("roomRent").value;
    const food = document.getElementById("food").value;
    const extraCharges = document.getElementById("extraCharges").value || 0;
    const advancePaid = document.getElementById("advancePaid").value;

    const totalAmount = parseInt(roomRent) + parseInt(food) + parseInt(extraCharges) - parseInt(advancePaid);

    const params = new URLSearchParams({
        name,
        mobile,
        checkin,
        checkout,
        roomRent,
        food,
        extraCharges,
        advancePaid,
        totalAmount,
    });

    window.location.href = `billPage.html?${params}`;
});
