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

    // Redirect to the bill page with query parameters
    window.location.href = `https://coderpranjal09.github.io/Apnu-ghar-Management-/billpage.html?${params.toString()}`;
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

    const totalAmount = parseFloat(roomRent) + parseFloat(food) + parseFloat(extraCharges) - parseFloat(advancePaid);

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

    // Redirect to the bill page with query parameters
    window.location.href = `https://coderpranjal09.github.io/Apnu-ghar-Management-/billpage.html?${params.toString()}`;
});
