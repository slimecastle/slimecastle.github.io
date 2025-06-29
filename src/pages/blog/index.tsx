import React from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { StyledHeader, Container, CardLink } from '../../components/CreditCardFormStyles';
import Navigation from '../../components/Navigation';

const BlogContainer = styled(Container)`
    max-width: 800px;
`;

const BlogPost = styled.article`
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 24px;
`;

const PostMeta = styled.div`
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
`;

const PostExcerpt = styled.p`
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
`;

const ReadMoreLink = styled(CardLink)`
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    font-size: 14px;
`;

const BlogIndex: React.FC = () => {
    const blogPosts = [
        {
            title: "Maximizing Credit Card Rewards: A Complete Guide for 2024",
            slug: "maximizing-credit-card-rewards-guide-2024",
            date: "December 15, 2024",
            excerpt: "Discover the top strategies to maximize your credit card rewards and cashback earnings. Learn about bonus categories, sign-up bonuses, and how to choose the right cards for your spending habits."
        },
        {
            title: "Travel Rewards vs. Cashback: Which Credit Card Type Is Right for You?",
            slug: "travel-vs-cashback-credit-cards",
            date: "December 10, 2024",
            excerpt: "Compare travel rewards and cashback credit cards to determine which type offers better value for your lifestyle. We break down the pros and cons of each option."
        },
        {
            title: "Understanding Credit Card Bonus Categories: Quarterly vs. Fixed Rewards",
            slug: "credit-card-bonus-categories-explained",
            date: "December 5, 2024",
            excerpt: "Learn how rotating quarterly bonus categories and fixed category rewards work. Discover which approach can help you earn more rewards on your everyday purchases."
        },
        {
            title: "5 Common Credit Card Rewards Mistakes That Are Costing You Money",
            slug: "credit-card-rewards-mistakes-to-avoid",
            date: "November 30, 2024",
            excerpt: "Avoid these costly mistakes that prevent you from maximizing your credit card rewards. From unused sign-up bonuses to ignoring bonus categories, we cover the most common pitfalls."
        },
        {
            title: "How to Use Credit Card Rewards Calculators to Choose the Best Cards",
            slug: "how-to-use-credit-card-rewards-calculators",
            date: "November 25, 2024",
            excerpt: "Master the art of using credit card rewards calculators to find the perfect card for your spending profile. Learn what factors to consider and how to interpret the results."
        },
        {
            title: "The Best Credit Cards for Specific Spending Categories in 2024",
            slug: "best-credit-cards-by-spending-category-2024",
            date: "November 20, 2024",
            excerpt: "Find the top credit cards for groceries, gas, dining, and other popular spending categories. Our comprehensive guide helps you optimize rewards for your biggest expenses."
        }
    ];

    return (
        <main>
            <Helmet>
                <title>Card IQ Blog | Card IQ</title>
                <meta name="description" content="Expert insights on credit card rewards, cashback strategies, and maximizing your earning potential. Read our comprehensive guides on choosing the best credit cards." />
                <meta name="keywords" content="credit card rewards, cashback, travel rewards, bonus categories, credit card calculator, financial tips" />
                <meta property="og:title" content="Card IQ Blog | Card IQ" />
                <meta property="og:description" content="Expert insights on credit card rewards, cashback strategies, and maximizing your earning potential." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://card-iq.com/blog/" />
                <link rel="canonical" href="https://card-iq.com/blog/" />
            </Helmet>
            
            <Navigation currentPath="/blog/" />
            
            <BlogContainer>
                <StyledHeader>Card IQ Blog</StyledHeader>
                
                <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <p style={{ fontSize: '18px', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
                        Expert insights and strategies to help you maximize your credit card rewards and make smarter financial decisions.
                    </p>
                </div>

                {blogPosts.map((post, index) => (
                    <BlogPost key={index}>
                        <PostTitle>{post.title}</PostTitle>
                        <PostMeta>Published on {post.date}</PostMeta>
                        <PostExcerpt>{post.excerpt}</PostExcerpt>
                        <ReadMoreLink href={`/blog/${post.slug}/`}>
                            Read Full Article
                        </ReadMoreLink>
                    </BlogPost>
                ))}

                <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Ready to Find Your Perfect Credit Card?</h3>
                    <p style={{ color: '#555', marginBottom: '20px' }}>
                        Use our advanced credit card calculator to discover which cards will maximize your rewards based on your spending habits.
                    </p>
                    <CardLink href="/">Try Our Credit Card Calculator</CardLink>
                </div>
            </BlogContainer>
        </main>
    );
};

export default BlogIndex;