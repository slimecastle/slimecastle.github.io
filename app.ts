interface SpendingHabits {
    groceries: number;
    dining: number;
    travel: number;
}

interface CreditCard {
    name: string;
    rewards: string;
    recommendedFor: (habits: SpendingHabits) => boolean;
}

const creditCards: CreditCard[] = [
    {
        name: "Super Groceries Card",
        rewards: "5% cashback on groceries",
        recommendedFor: (habits) => habits.groceries > 500
    },
    {
        name: "Foodie Card",
        rewards: "4% cashback on dining",
        recommendedFor: (habits) => habits.dining > 300
    },
    {
        name: "Travel Explorer Card",
        rewards: "3x points on travel",
        recommendedFor: (habits) => habits.travel > 400
    },
    {
        name: "Balanced Spender Card",
        rewards: "1.5% cashback on all purchases",
        recommendedFor: (habits) => habits.groceries <= 500 && habits.dining <= 300 && habits.travel <= 400
    }
];

const form = document.getElementById('spending-form') as HTMLFormElement;
const recommendationsDiv = document.getElementById('recommendations') as HTMLDivElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const spendingHabits: SpendingHabits = {
        groceries: Number(formData.get('groceries')),
        dining: Number(formData.get('dining')),
        travel: Number(formData.get('travel'))
    };

    const recommendedCards = creditCards.filter(card => card.recommendedFor(spendingHabits));
    displayRecommendations(recommendedCards);
});

function displayRecommendations(cards: CreditCard[]) {
    recommendationsDiv.innerHTML = '';
    if (cards.length === 0) {
        recommendationsDiv.textContent = 'No recommendations based on your spending habits.';
        return;
    }

    const ul = document.createElement('ul');
    cards.forEach(card => {
        const li = document.createElement('li');
        li.textContent = `${card.name}: ${card.rewards}`;
        ul.appendChild(li);
    });

    recommendationsDiv.appendChild(ul);
}
