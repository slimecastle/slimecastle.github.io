import React, { useState, useEffect, useRef, Fragment } from 'react';
import { SpendingHabits, CreditCard } from '../../types';
import TextField from '@mui/material/TextField';
import { NumericFormat } from 'react-number-format';

import {
    Container,
    Form,
    Label,
    Button,
    RecommendationsStyle,
    CardContainer,
    CardImage,
    CardInfo,
    CardTitle,
    CardText,
    Highlight,
    BackButton,
    CardLink,
    StyledCardContainer,
    FadeInContainer,
    TopMessage,
    MethodologyButton,
    MethodologyContainer,
    MethodologyTextBox,
    CardBottomRight,
    InfoButton,
    InfoBox,
    Footer,
    FooterLink
} from './CreditCardFormStyles';
import { InputAdornment } from '@mui/material';

const creditCards: CreditCard[] = [
    {
        name: "Wells Fargo Active Cash\u00ae Card",
        image: "https://creditcards.wellsfargo.com/W-Card-MarketPlace/v12-10-24/images/Products/ActiveCash/WF_ActiveCash_VS_Collateral_Front_RGB.png",
        link: "https://creditcards.wellsfargo.com/active-cash-credit-card/?sub_channel=SEO&vendor_code=G",
        signUpBonus: 200,
        yearlyFee: 0,
        percentages: {
            groceries: 0.0,
            dining: 0.0,
            travel: 0.0,
            spend: 0.02
        }
    },
    {
        name: "Blue Cash Preferred\u00ae Card from American Express",
        image: "https://icm.aexp-static.com/acquisition/card-art/NUS000000264_480x304_straight_withname.png",
        link: "https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/",
        signUpBonus: 250,
        yearlyFee: 95,
        percentages: {
            groceries: 0.06,
            dining: 0.0,
            travel: 0.03,
            spend: 0.01
        }
    },
    {
        name: "Chase Freedom Unlimited\u00ae",
        image: "https://www.nerdwallet.com/cdn-cgi/image/width=300,quality=85/cdn/images/marketplace/credit_cards/84e1494c-bae2-4b0d-ac8d-e8c095ceb2fe/95f4b4eef72766c5ec9e6535530b866e39a210342ef0541cf276c9b8c0f6f01b.jpg",
        link: "https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited",
        signUpBonus: 200,
        yearlyFee: 0,
        percentages: {
            groceries: 0.0,
            dining: 0.03,
            travel: 0.05,
            spend: 0.015
        }
    },
    {
        name: "Blue Cash Everyday\u00ae Card from American Express",
        image: "https://icm.aexp-static.com/acquisition/card-art/NUS000000305_480x304_straight_withname.png",
        link: "https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/",
        signUpBonus: 200,
        yearlyFee: 0,
        percentages: {
            groceries: 0.03,
            dining: 0.0,
            travel: 0.03,
            spend: 0.01
        }
    },
    {
        name: "Citi Double Cash\u00ae Card",
        image: "https://www.citi.com/CRD/images/citi-double-cash/citi-double-cash_222x140.png",
        link: "https://www.citi.com/credit-cards/citi-double-cash-credit-card",
        signUpBonus: 200,
        yearlyFee: 0,
        percentages: {
            groceries: 0.0,
            dining: 0.0,
            travel: 0.0,
            spend: 0.02
        }
    },
    {
        name: "Capital One SavorOne Cash Rewards Credit Card",
        image: "https://ecm.capitalone.com/WCM/card/products/new-savor-card-art.png",
        link: "https://www.capitalone.com/credit-cards/savorone-dining-rewards/",
        signUpBonus: 200,
        yearlyFee: 0,
        percentages: {
            groceries: 0.03,
            dining: 0.03,
            travel: 0.0,
            spend: 0.01
        }
    },
    {
        name: "U.S. Bank Cash+\u00ae Visa Signature\u00ae Card",
        image: "https://www.nerdwallet.com/cdn-cgi/image/width=300,quality=85/cdn/images/marketplace/credit_cards/2db3ce82-b2a3-41c6-b115-5f8db44fa5a5/6a075b1a9a4b87ba35802e8ffef6d053d346083a0131d273f14481fe844e6c3f.jpg",
        link: "https://www.usbank.com/credit-cards/cash-plus-visa-signature-credit-card.html",
        signUpBonus: 200,
        yearlyFee: 0,
        percentages: {
            groceries: 0.0,
            dining: 0.0,
            travel: 0.0,
            spend: 0.01
        }
    },
    {
        name: "Capital One Quicksilver Cash Rewards Credit Card",
        image: "https://ecm.capitalone.com/WCM/card/products/qs_cardart_prim_323x203.png",
        link: "https://www.capitalone.com/credit-cards/quicksilver/",
        signUpBonus: 200,
        yearlyFee: 0,
        percentages: {
            groceries: 0.0,
            dining: 0.0,
            travel: 0.05,
            spend: 0.015
        }
    },
    {
        name: "Bank of America\u00ae Unlimited Cash Rewards credit card",
        image: "https://www.nerdwallet.com/cdn-cgi/image/width=300,quality=85/cdn/images/marketplace/credit_cards/0aff5c90-e685-11eb-bc64-2bf2a495f6d2/6100e2a041f8c223e8e75a359cd69f3e41c991d0baa8cfd196d047706b299681.jpg",
        link: "https://www.bankofamerica.com/credit-cards/products/unlimited-cash-back-credit-card/",
        signUpBonus: 200,
        yearlyFee: 0,
        percentages: {
            groceries: 0.0,
            dining: 0.0,
            travel: 0.0,
            spend: 0.015
        }
    }
];

function calculateRewards(habits: SpendingHabits, percentages: { [key: string]: number }) {
    const { groceries, dining, travel, spend } = habits;
    return 12 * (
        (Number(dining) * percentages.dining) + 
        (Number(travel) * percentages.travel) + 
        (Number(groceries) * percentages.groceries) +
        (Math.max(0, (Number(spend) - Number(dining) - Number(travel) - Number(groceries)) * percentages.spend))
    );
}

function formatToDollar(value: number): string {
    return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    }).format(value);
}

const calculateNetRewards = (card: CreditCard, habits: SpendingHabits, years: number): number => {
    const yearlyRewards = calculateRewards(habits, card.percentages);
    return yearlyRewards * years + card.signUpBonus - card.yearlyFee * years - 1;
};

const CreditCardForm: React.FC = () => {
    const [spendingHabits, setSpendingHabits] = useState<SpendingHabits>({ spend: '', groceries: '', dining: '', travel: '' });
    const [recommendations, setRecommendations] = useState<{ card: CreditCard, rewards1Year: number, rewards3Years: number }[]>([]);
    const [showSpendingHabits, setShowSpendingHabits] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [showMethodology, setShowMethodology] = useState(false);
    const [showInfo, setShowInfo] = useState<boolean[]>(Array(creditCards.length).fill(false));
    const methodologyRef = useRef<HTMLDivElement>(null);

    const infoBoxRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleClickOutsideInfoBox = (event: MouseEvent) => {
        infoBoxRefs.current.forEach((ref, index) => {
            if (ref && !ref.contains(event.target as Node)) {
                setShowInfo(prev => {
                    const newInfo = [...prev];
                    newInfo[index] = false;
                    return newInfo;
                });
            }
        });
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideInfoBox);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideInfoBox);
        };
    }, []);
    const toggleInfo = (index: number) => {
        setShowInfo(prev => {
            const newInfo = [...prev];
            newInfo[index] = !newInfo[index];
            return newInfo;
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const cardRewards = creditCards.map(card => ({
            card,
            rewards1Year: calculateNetRewards(card, spendingHabits, 1),
            rewards3Years: calculateNetRewards(card, spendingHabits, 3)
        })).sort((a, b) => b.rewards1Year - a.rewards1Year);
        setShowSpendingHabits(false);
        setRecommendations(cardRewards);
        setFadeIn(true);
    };

    const handleBack = () => {
        setShowSpendingHabits(true);
        setFadeIn(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSpendingHabits({
            ...spendingHabits,
            [name]: value.replace(/[^0-9.-]+/g,"")
        });
    };

    const toggleMethodology = () => {
        setShowMethodology(!showMethodology);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (methodologyRef.current && !methodologyRef.current.contains(event.target as Node)) {
            setShowMethodology(false);
        }
    };

    useEffect(() => {
        if (showMethodology) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMethodology]);

    useEffect(() => {
        if (!showSpendingHabits) {
            setFadeIn(true);
        }
    }, [showSpendingHabits]);

    return (
        <Container style={{ maxWidth: showSpendingHabits ? '800px' : '70%' }}>
            {showSpendingHabits ? (
                <Form id="spending-form" onSubmit={e => handleSubmit(e)}>
                    <TopMessage>
                        Please enter your monthly credit card spending habits below:
                    </TopMessage>
                    <Label>
                        Groceries:
                        <NumericFormat
                            value={spendingHabits.groceries}
                            name="groceries"
                            customInput={TextField}
                            InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            allowNegative={false}
                            thousandSeparator
                            placeholder="0"
                            decimalScale={2}
                            onChange={handleChange}
                        />
                    </Label>
                    <Label>
                        Dining:
                        <NumericFormat
                            value={spendingHabits.dining}
                            name="dining"
                            customInput={TextField}
                            InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            allowNegative={false}
                            thousandSeparator
                            placeholder="0"
                            decimalScale={2}
                            onChange={handleChange}
                        />
                    </Label>
                    <Label>
                        Travel:
                        <NumericFormat
                            value={spendingHabits.travel}
                            name="travel"
                            customInput={TextField}
                            InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            allowNegative={false}
                            thousandSeparator
                            placeholder="0"
                            decimalScale={2}
                            onChange={handleChange}
                        />
                    </Label>
                    <Label>
                        Total monthly spend (including above categories):
                        <NumericFormat
                            value={spendingHabits.spend}
                            name="spend"
                            customInput={TextField}
                            InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            allowNegative={false}
                            thousandSeparator
                            placeholder="0"
                            decimalScale={2}
                            onChange={handleChange}
                        />
                    </Label>
                    <Button type="submit">Submit</Button>
                </Form>
            ) : (
                <FadeInContainer fadeIn={fadeIn}>
                    <CardContainer id="recommendations">
                        {recommendations.slice(0, 3).map(({ card, rewards1Year, rewards3Years }, index) => (
                            <StyledCardContainer key={card.name} className={index === 0 ? 'best-card' : ''}>
                                <CardImage src={card.image} alt={`${card.name} image`} />
                                <CardInfo>
                                    <CardTitle>{card.name}</CardTitle>
                                    <CardText>In 1 year, you will get approximately <Highlight>{formatToDollar(rewards1Year)}</Highlight> cash back after considering the sign-up bonus and yearly fee.</CardText>
                                    <CardText>In 3 years, you will get approximately <Highlight>{formatToDollar(rewards3Years)}</Highlight> cash back after considering the sign-up bonus and yearly fees.</CardText>
                                    <CardLink href={card.link} target="_blank" rel="noopener noreferrer">Get this card</CardLink>
                                    <CardBottomRight>
                                        {showInfo[index] && (
                                            <InfoBox ref={el => infoBoxRefs.current[index] = el}>
                                                <p>Sign Up Bonus: {formatToDollar(card.signUpBonus)}</p>
                                                <p>Yearly Fee: {formatToDollar(card.yearlyFee)}</p>
                                                <p>Recommended Credit Score: 690-850</p>
                                                <p><strong>Annual Rewards Sources:</strong></p>
                                                {card.percentages.groceries > 0 && <p>• Groceries: {(card.percentages.groceries * 100).toFixed(1)}% = {formatToDollar(12 * Number(spendingHabits.groceries) * card.percentages.groceries)}</p>}
                                                {card.percentages.dining > 0 && <p>• Dining: {(card.percentages.dining * 100).toFixed(1)}% = {formatToDollar(12 * Number(spendingHabits.dining) * card.percentages.dining)}</p>}
                                                {card.percentages.travel > 0 && <p>• Travel: {(card.percentages.travel * 100).toFixed(1)}% = {formatToDollar(12 * Number(spendingHabits.travel) * card.percentages.travel)}</p>}
                                                {card.percentages.spend > 0 && <p>• All other purchases: {(card.percentages.spend * 100).toFixed(1)}% = {formatToDollar(12 * Math.max(0, Number(spendingHabits.spend) - Number(spendingHabits.groceries) - Number(spendingHabits.dining) - Number(spendingHabits.travel)) * card.percentages.spend)}</p>}
                                            </InfoBox>
                                        )}
                                        <InfoButton onClick={() => toggleInfo(index)}>
                                            More Info
                                        </InfoButton>
                                    </CardBottomRight>
                                </CardInfo>
                            </StyledCardContainer>
                        ))}
                    </CardContainer>
                    <BackButton onClick={handleBack}>Back</BackButton>
                </FadeInContainer>
            )}

            {/* Methodology Section */}
            <MethodologyButton onClick={toggleMethodology}>
                Methodology
            </MethodologyButton>
            {showMethodology && (
                <MethodologyContainer ref={methodologyRef}>
                    <MethodologyTextBox>
                        <p>This calculator evaluates your monthly credit card spending habits and recommends the card that will maximize your cash back rewards. It does this by applying the cash back percentages offered by leading credit cards to your monthly spending in different categories (such as groceries, dining, and travel.)<br></br><br></br>

                        For example, if you spend heavily on groceries, a card offering 6% cash back in that category will provide the highest rewards. The calculator accounts for sign-up bonus offers and yearly fees to give you a comprehensive estimate of the total cash back you can earn over 1 or 3 years.</p>
                    </MethodologyTextBox>
                </MethodologyContainer>
            )}
            <Footer>
                <FooterLink href="/terms">Terms and Conditions</FooterLink>
                <span>•</span>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <br />
                <p style={{ marginTop: '10px' }}>© 2024 Card IQ. All rights reserved.</p>
            </Footer>
        </Container>
    );
};

export default CreditCardForm;
