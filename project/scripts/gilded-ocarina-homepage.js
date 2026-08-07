let subscribed = sessionStorage.getItem('subscribed');
const form = document.querySelector("form")

form.addEventListener("submit", () => {
    subscribed = "true";
    sessionStorage.setItem('subscribed', subscribed);
});

if (subscribed == "true") {
    form.outerHTML = "<h2>Thank you for subscribing!</h2>";
}