export interface SpendingHabits {
    spend: string,
    groceries: string;
    dining: string;
    travel: string;
}

export interface CreditCard {
    name: string;
    image: string;
    link: string;
    signUpBonus: number;
    yearlyFee: number;
    percentages: { [key: string]: number };
}

export interface Recommendations {
    card: CreditCard, 
    rewards1Year: number, 
    rewards3Years: number }
