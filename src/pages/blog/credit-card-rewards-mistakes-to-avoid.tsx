import React from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { StyledHeader, Container, CardLink } from '../../components/CreditCardFormStyles';
import Navigation from '../../components/Navigation';

const BlogContainer = styled(Container)`
    max-width: 800px;
`;

const BlogContent = styled.article`
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    line-height: 1.7;
`;

const BlogMeta = styled.div`
    color: #666;
    font-size: 14px;
    margin-bottom: 30px;
    text-align: center;
`;

const SectionHeading = styled.h2`
    color: #2c3e50;
    margin-top: 35px;
    margin-bottom: 15px;
    font-size: 24px;
`;

const MistakeHeading = styled.h3`
    color: #dc3545;
    margin-top: 25px;
    margin-bottom: 12px;
    font-size: 20px;
    display: flex;
    align-items: center;
    
    &::before {
        content: "❌";
        margin-right: 10px;
        font-size: 18px;
    }
`;

const BlogText = styled.p`
    color: #555;
    margin-bottom: 20px;
    font-size: 16px;
`;

const WarningBox = styled.div`
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-left: 4px solid #fdcb6e;
    padding: 20px;
    border-radius: 8px;
    margin: 25px 0;
`;

const SolutionBox = styled.div`
    background: #e8f5e8;
    border: 1px solid #c3e6c3;
    border-left: 4px solid #28a745;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
`;

const CostExample = styled.div`
    background: #f8d7da;
    border: 1px solid #f1aeb5;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    font-weight: bold;
    color: #721c24;
`;

const CTABox = styled.div`
    background: #f8f9fa;
    padding: 25px;
    border-radius: 8px;
    text-align: center;
    margin: 30px 0;
    border-left: 4px solid #007bff;
`;

const InternalLink = styled.a`
    color: #007bff;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

const TipsList = styled.ul`
    margin: 20px 0;
    padding-left: 25px;
    
    li {
        margin-bottom: 10px;
        color: #555;
    }
`;

const CommonMistakes: React.FC = () => {
    return (
        <main>
            <Helmet>
                <title>5 Common Credit Card Rewards Mistakes That Are Costing You Money | Card IQ</title>
                <meta name="description" content="Avoid these costly credit card rewards mistakes that prevent you from maximizing earnings. Learn how to fix unused bonuses, category errors, and more." />
                <meta name="keywords" content="credit card mistakes, rewards mistakes, maximize credit card rewards, credit card tips, avoid credit card errors" />
                <meta property="og:title" content="5 Common Credit Card Rewards Mistakes That Are Costing You Money" />
                <meta property="og:description" content="Avoid these costly credit card rewards mistakes that prevent you from maximizing earnings." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://card-iq.com/blog/credit-card-rewards-mistakes-to-avoid/" />
                <link rel="canonical" href="https://card-iq.com/blog/credit-card-rewards-mistakes-to-avoid/" />
            </Helmet>
            
            <Navigation currentPath="/blog/credit-card-rewards-mistakes-to-avoid/" />
            
            <BlogContainer>
                <StyledHeader>5 Common Credit Card Rewards Mistakes That Are Costing You Money</StyledHeader>
                
                <BlogContent>
                    <BlogMeta>Published on November 30, 2024 | 7 min read</BlogMeta>
                    
                    <BlogText>
                        Credit card rewards can provide significant value when managed correctly, but many cardholders unknowingly make costly mistakes that reduce their earnings potential. These errors range from simple oversights to strategic missteps that can cost hundreds of dollars annually. Here are the five most common rewards mistakes and how to avoid them.
                    </BlogText>

                    <WarningBox>
                        <h4 style={{ color: '#856404', marginBottom: '10px' }}>Did You Know?</h4>
                        <p style={{ color: '#856404', margin: '0' }}>
                            The average rewards card user leaves $300-500 in potential earnings on the table each year due to these common mistakes.
                        </p>
                    </WarningBox>

                    <MistakeHeading>Mistake #1: Not Activating Quarterly Bonus Categories</MistakeHeading>
                    
                    <BlogText>
                        Many cards with rotating quarterly categories require activation to earn bonus rates. Forgetting this simple step means earning just 1% instead of 5% on bonus purchases.
                    </BlogText>

                    <CostExample>
                        Annual Cost: Up to $180 in lost rewards (missing 4% on $1,500 quarterly spending limit)
                    </CostExample>

                    <SolutionBox>
                        <h4 style={{ color: '#155724', marginBottom: '10px' }}>✅ The Fix:</h4>
                        <TipsList style={{ color: '#155724' }}>
                            <li>Set quarterly calendar reminders for activation dates</li>
                            <li>Enable email notifications from your card issuer</li>
                            <li>Check your account at the start of each quarter</li>
                            <li>Use mobile apps for easy activation</li>
                        </TipsList>
                    </SolutionBox>

                    <MistakeHeading>Mistake #2: Exceeding Category Spending Limits</MistakeHeading>
                    
                    <BlogText>
                        Most <InternalLink href="/blog/credit-card-bonus-categories-explained/">bonus categories have spending caps</InternalLink> (typically $1,500 quarterly or $6,000 annually). Spending beyond these limits earns only the base rate, not the bonus rate.
                    </BlogText>

                    <CostExample>
                        Annual Cost: $60-120 in lost rewards per category (missing 3-4% on excess spending)
                    </CostExample>

                    <SolutionBox>
                        <h4 style={{ color: '#155724', marginBottom: '10px' }}>✅ The Fix:</h4>
                        <TipsList style={{ color: '#155724' }}>
                            <li>Track spending with apps like Mint or YNAB</li>
                            <li>Set up account alerts when approaching limits</li>
                            <li>Switch to different cards once limits are reached</li>
                            <li>Plan large purchases around bonus periods</li>
                        </TipsList>
                    </SolutionBox>

                    <MistakeHeading>Mistake #3: Ignoring Sign-Up Bonuses</MistakeHeading>
                    
                    <BlogText>
                        Sign-up bonuses often provide the highest reward value, but many cardholders either don't meet the spending requirements or wait too long to apply for new cards.
                    </BlogText>

                    <CostExample>
                        Annual Cost: $500-800 in missed bonuses (average welcome bonus value)
                    </CostExample>

                    <SolutionBox>
                        <h4 style={{ color: '#155724', marginBottom: '10px' }}>✅ The Fix:</h4>
                        <TipsList style={{ color: '#155724' }}>
                            <li>Plan major purchases around new card applications</li>
                            <li>Set reminders for spending deadlines</li>
                            <li>Use natural spending, not manufactured spending</li>
                            <li>Apply for cards strategically throughout the year</li>
                        </TipsList>
                    </SolutionBox>

                    <CTABox>
                        <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Stop Leaving Money on the Table</h3>
                        <p style={{ marginBottom: '20px' }}>Our calculator helps you identify the best cards for your spending and ensures you're maximizing every reward opportunity.</p>
                        <CardLink href="/">Optimize Your Rewards Strategy</CardLink>
                    </CTABox>

                    <MistakeHeading>Mistake #4: Using the Wrong Card for Purchases</MistakeHeading>
                    
                    <BlogText>
                        Many cardholders stick to one primary card instead of optimizing each purchase for maximum rewards. This means earning 1% when you could earn 3-5% on the same spending.
                    </BlogText>

                    <CostExample>
                        Annual Cost: $200-400 in suboptimal earnings (missing 2-4% on $10,000+ annual spending)
                    </CostExample>

                    <SolutionBox>
                        <h4 style={{ color: '#155724', marginBottom: '10px' }}>✅ The Fix:</h4>
                        <TipsList style={{ color: '#155724' }}>
                            <li>Create a card strategy guide for different spending types</li>
                            <li>Use wallet apps to organize cards by category</li>
                            <li>Review merchant categories that qualify for bonuses</li>
                            <li>Consider 2-3 cards that complement each other</li>
                        </TipsList>
                    </SolutionBox>

                    <MistakeHeading>Mistake #5: Letting Rewards Expire or Lose Value</MistakeHeading>
                    
                    <BlogText>
                        Credit card points and miles can expire or lose value due to program changes. Some cardholders also redeem rewards inefficiently, getting less value than possible.
                    </BlogText>

                    <CostExample>
                        Annual Cost: $100-300 in lost or devalued rewards (expired points or poor redemptions)
                    </CostExample>

                    <SolutionBox>
                        <h4 style={{ color: '#155724', marginBottom: '10px' }}>✅ The Fix:</h4>
                        <TipsList style={{ color: '#155724' }}>
                            <li>Set reminders for point expiration dates</li>
                            <li>Make small purchases to keep accounts active</li>
                            <li>Research optimal redemption methods</li>
                            <li>Consider cashing out before program devaluations</li>
                        </TipsList>
                    </SolutionBox>

                    <SectionHeading>Additional Common Mistakes</SectionHeading>

                    <BlogText>
                        Here are other frequent errors that can reduce your rewards earnings:
                    </BlogText>

                    <TipsList>
                        <li><strong>Not reading the fine print:</strong> Missing exclusions or restrictions</li>
                        <li><strong>Carrying a balance:</strong> Interest charges negating reward value</li>
                        <li><strong>Paying annual fees without justification:</strong> Fees exceeding reward value</li>
                        <li><strong>Ignoring new card offers:</strong> Missing better reward opportunities</li>
                        <li><strong>Not using shopping portals:</strong> Missing additional earning opportunities</li>
                    </TipsList>

                    <SectionHeading>Building Good Rewards Habits</SectionHeading>

                    <BlogText>
                        Develop these habits to avoid costly mistakes:
                    </BlogText>

                    <TipsList>
                        <li><strong>Monthly Review:</strong> Check all cards for missed opportunities</li>
                        <li><strong>Quarterly Planning:</strong> Activate categories and plan spending</li>
                        <li><strong>Annual Assessment:</strong> Evaluate card lineup and strategy</li>
                        <li><strong>Stay Informed:</strong> Follow card issuer updates and program changes</li>
                        <li><strong>Use Tools:</strong> <InternalLink href="/blog/how-to-use-credit-card-rewards-calculators/">Leverage calculators and tracking apps</InternalLink></li>
                    </TipsList>

                    <SectionHeading>The Cost of Inaction</SectionHeading>

                    <BlogText>
                        These mistakes compound over time. A cardholder making all five mistakes could lose $1,000+ annually in potential rewards. Even casual users typically lose $200-400 per year through simple oversights.
                    </BlogText>

                    <WarningBox>
                        <h4 style={{ color: '#856404', marginBottom: '10px' }}>Reality Check</h4>
                        <p style={{ color: '#856404', margin: '0' }}>
                            Most cardholders optimize less than 60% of their potential rewards earnings. Small improvements in strategy can yield significant returns.
                        </p>
                    </WarningBox>

                    <SectionHeading>Creating Your Action Plan</SectionHeading>

                    <BlogText>
                        Start fixing these mistakes today:
                    </BlogText>

                    <TipsList>
                        <li><strong>Immediate (Today):</strong> Activate any pending quarterly categories</li>
                        <li><strong>This Week:</strong> Set up tracking and reminder systems</li>
                        <li><strong>This Month:</strong> Review your current card strategy</li>
                        <li><strong>Quarterly:</strong> Assess and optimize your rewards approach</li>
                    </TipsList>

                    <SectionHeading>Conclusion</SectionHeading>
                    
                    <BlogText>
                        Avoiding these common credit card rewards mistakes can significantly increase your annual earnings with minimal effort. Most fixes require just a few minutes of setup but can save hundreds of dollars per year.
                    </BlogText>
                    
                    <BlogText>
                        The key is developing systematic habits and staying informed about your cards' features and limitations. With proper strategy and attention to detail, you can maximize your rewards potential and avoid leaving money on the table.
                    </BlogText>

                    <CTABox>
                        <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Ready to Fix Your Rewards Strategy?</h3>
                        <p style={{ marginBottom: '20px' }}>Use our comprehensive calculator to identify optimization opportunities and ensure you're earning maximum rewards on every purchase.</p>
                        <CardLink href="/">Start Maximizing Your Rewards</CardLink>
                    </CTABox>
                </BlogContent>
                
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <CardLink href="/blog/credit-card-bonus-categories-explained/" style={{ marginRight: '20px' }}>← Previous: Bonus Categories Explained</CardLink>
                    <CardLink href="/blog/how-to-use-credit-card-rewards-calculators/">Next: How to Use Calculators →</CardLink>
                </div>
            </BlogContainer>
        </main>
    );
};

export default CommonMistakes;