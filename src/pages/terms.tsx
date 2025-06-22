import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
`;

const Title = styled.h1`
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
`;

const Section = styled.section`
    margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
    color: #34495e;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    margin-bottom: 15px;
`;

const SubsectionTitle = styled.h3`
    color: #2c3e50;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    margin-bottom: 15px;
    text-align: justify;
`;

const List = styled.ul`
    margin-bottom: 15px;
    padding-left: 30px;
`;

const ListItem = styled.li`
    margin-bottom: 8px;
`;

const EffectiveDate = styled.div`
    text-align: center;
    font-style: italic;
    color: #666;
    margin-bottom: 30px;
`;

const TermsPage: React.FC = () => (
    <Container>
        <Helmet>
            <title>Terms and Conditions - Card IQ</title>
            <meta name="description" content="Terms and Conditions for Card IQ Credit Card Rewards Calculator" />
        </Helmet>
        
        <Title>Terms and Conditions</Title>
        <EffectiveDate>Last Updated: December 22, 2024</EffectiveDate>

        <Section>
            <SectionTitle>1. Introduction</SectionTitle>
            <Paragraph>
                Welcome to Card IQ ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our credit card rewards calculator website and services (the "Service") operated by Card IQ.
            </Paragraph>
            <Paragraph>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service. Your continued use of the Service constitutes acceptance of these Terms.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>2. Changes to the Agreement</SectionTitle>
            <Paragraph>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </Paragraph>
            <Paragraph>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>3. User Guidelines and Acceptable Use</SectionTitle>
            <Paragraph>
                You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </Paragraph>
            <List>
                <ListItem>In any way that violates any applicable federal, state, local, or international law or regulation</ListItem>
                <ListItem>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</ListItem>
                <ListItem>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</ListItem>
                <ListItem>In any way that could disable, overburden, damage, or impair the Service</ListItem>
            </List>
        </Section>

        <Section>
            <SectionTitle>4. Prohibited Behaviors and Activities</SectionTitle>
            <Paragraph>
                The following activities are strictly prohibited when using our Service:
            </Paragraph>
            <List>
                <ListItem>Attempting to gain unauthorized access to any portion of the Service</ListItem>
                <ListItem>Using automated scripts, bots, or crawlers to access the Service</ListItem>
                <ListItem>Interfering with or disrupting the Service or servers connected to the Service</ListItem>
                <ListItem>Collecting or harvesting any personally identifiable information from the Service</ListItem>
                <ListItem>Using the Service for any commercial purpose without our express written consent</ListItem>
            </List>
        </Section>

        <Section>
            <SectionTitle>5. Intellectual Property Rights</SectionTitle>
            <Paragraph>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Card IQ and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>6. Disclaimer of Warranties</SectionTitle>
            <Paragraph>
                The information, calculations, and recommendations provided by our Service are for informational purposes only and should not be considered as financial advice. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the Service.
            </Paragraph>
            <Paragraph>
                YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>7. Limitation of Liability</SectionTitle>
            <Paragraph>
                IN NO EVENT SHALL CARD IQ, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
            </Paragraph>
            <Paragraph>
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>8. Third-Party Links</SectionTitle>
            <Paragraph>
                Our Service may contain links to third-party websites or services that are not owned or controlled by Card IQ. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </Paragraph>
            <Paragraph>
                You acknowledge and agree that Card IQ shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>9. Privacy Policy</SectionTitle>
            <Paragraph>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>10. Financial Disclaimer</SectionTitle>
            <SubsectionTitle>Not Financial Advice</SubsectionTitle>
            <Paragraph>
                The calculations and recommendations provided by our Service are for informational and educational purposes only. They do not constitute financial, investment, or credit advice. You should consult with qualified financial professionals before making any financial decisions.
            </Paragraph>
            <SubsectionTitle>Accuracy of Information</SubsectionTitle>
            <Paragraph>
                While we strive to provide accurate and up-to-date information about credit cards and their rewards programs, credit card terms, fees, and rewards rates are subject to change by the issuing banks. We cannot guarantee the accuracy or completeness of this information.
            </Paragraph>
            <SubsectionTitle>Affiliate Relationships</SubsectionTitle>
            <Paragraph>
                We may receive compensation when you click on links to credit card offers or apply for credit cards through our Service. This compensation may impact how and where offers appear on our site, but it does not influence our recommendations or calculations.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>11. User Data and Calculations</SectionTitle>
            <Paragraph>
                The spending information you input into our calculator is processed locally in your browser and is not stored on our servers or transmitted to third parties. We do not collect or retain your personal financial information.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>12. Corrections</SectionTitle>
            <Paragraph>
                There may be information on our Service that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>13. Governing Law</SectionTitle>
            <Paragraph>
                These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>14. Dispute Resolution</SectionTitle>
            <Paragraph>
                Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association. You agree to waive any right to a jury trial or to participate in a class action lawsuit.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>15. Severability</SectionTitle>
            <Paragraph>
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>16. Contact Information</SectionTitle>
            <Paragraph>
                If you have any questions about these Terms and Conditions, please contact us through our website or by email.
            </Paragraph>
        </Section>
    </Container>
);

export default TermsPage;