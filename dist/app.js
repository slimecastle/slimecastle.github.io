var creditCards = [
    {
        name: "Super Groceries Card",
        rewards: "5% cashback on groceries",
        recommendedFor: function (habits) { return habits.groceries > 500; }
    },
    {
        name: "Foodie Card",
        rewards: "4% cashback on dining",
        recommendedFor: function (habits) { return habits.dining > 300; }
    },
    {
        name: "Travel Explorer Card",
        rewards: "3x points on travel",
        recommendedFor: function (habits) { return habits.travel > 400; }
    },
    {
        name: "Balanced Spender Card",
        rewards: "1.5% cashback on all purchases",
        recommendedFor: function (habits) { return habits.groceries <= 500 && habits.dining <= 300 && habits.travel <= 400; }
    }
];
var form = document.getElementById('spending-form');
var recommendationsDiv = document.getElementById('recommendations');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    var spendingHabits = {
        groceries: Number(formData.get('groceries')),
        dining: Number(formData.get('dining')),
        travel: Number(formData.get('travel'))
    };
    var recommendedCards = creditCards.filter(function (card) { return card.recommendedFor(spendingHabits); });
    displayRecommendations(recommendedCards);
});
function displayRecommendations(cards) {
    recommendationsDiv.innerHTML = '';
    if (cards.length === 0) {
        recommendationsDiv.textContent = 'No recommendations based on your spending habits.';
        return;
    }
    var ul = document.createElement('ul');
    cards.forEach(function (card) {
        var li = document.createElement('li');
        li.textContent = "".concat(card.name, ": ").concat(card.rewards);
        ul.appendChild(li);
    });
    recommendationsDiv.appendChild(ul);
}
