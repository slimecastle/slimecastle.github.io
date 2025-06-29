import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import Navigation from '../components/Navigation';

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

const ContactBox = styled.div`
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
`;

const PrivacyPage: React.FC = () => (
    <>
        <Helmet>
            <title>Privacy Policy - Card IQ</title>
            <meta name="description" content="Privacy Policy for Card IQ Credit Card Rewards Calculator" />
        </Helmet>
        
        <Navigation currentPath="/privacy/" />
        
        <Container>
            <Title>Privacy Policy</Title>
        <EffectiveDate>Last Updated: December 22, 2024</EffectiveDate>

        <Section>
            <SectionTitle>1. Introduction</SectionTitle>
            <Paragraph>
                Card IQ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our credit card rewards calculator service (the "Service").
            </Paragraph>
            <Paragraph>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>2. Information We Collect</SectionTitle>
            
            <SubsectionTitle>2.1 Information You Provide</SubsectionTitle>
            <Paragraph>
                Our Service allows you to input spending information to calculate credit card rewards. This information includes:
            </Paragraph>
            <List>
                <ListItem>Monthly spending amounts in various categories (groceries, dining, travel, general spending)</ListItem>
                <ListItem>Any other financial information you voluntarily enter into our calculator</ListItem>
            </List>
            <Paragraph>
                <strong>Important:</strong> The spending information you enter is processed locally in your browser and is NOT stored on our servers, transmitted to us, or retained in any way.
            </Paragraph>

            <SubsectionTitle>2.2 Automatically Collected Information</SubsectionTitle>
            <Paragraph>
                When you visit our Service, we may automatically collect certain information about your device and usage, including:
            </Paragraph>
            <List>
                <ListItem>IP address and general location information</ListItem>
                <ListItem>Browser type and version</ListItem>
                <ListItem>Operating system</ListItem>
                <ListItem>Pages visited and time spent on our Service</ListItem>
                <ListItem>Referring website addresses</ListItem>
                <ListItem>Device information (mobile device ID, screen resolution)</ListItem>
            </List>

            <SubsectionTitle>2.3 Cookies and Tracking Technologies</SubsectionTitle>
            <Paragraph>
                We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior. Cookies are small data files stored on your device that help us improve our Service and your experience.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>3. How We Use Your Information</SectionTitle>
            <Paragraph>
                We use the information we collect for the following purposes:
            </Paragraph>
            <List>
                <ListItem>To provide and maintain our Service</ListItem>
                <ListItem>To improve and optimize our website performance</ListItem>
                <ListItem>To analyze usage patterns and trends</ListItem>
                <ListItem>To detect and prevent fraud or abuse</ListItem>
                <ListItem>To comply with legal obligations</ListItem>
                <ListItem>To communicate with you about our Service (if you contact us)</ListItem>
            </List>
            <Paragraph>
                <strong>We do NOT use your spending calculation data for any purpose</strong> because it is not transmitted to or stored by us.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>4. Information Sharing and Disclosure</SectionTitle>
            
            <SubsectionTitle>4.1 Third-Party Service Providers</SubsectionTitle>
            <Paragraph>
                We may share automatically collected information with third-party service providers who assist us in operating our Service, including:
            </Paragraph>
            <List>
                <ListItem>Web hosting providers</ListItem>
                <ListItem>Analytics services (such as Google Analytics)</ListItem>
                <ListItem>Content delivery networks</ListItem>
                <ListItem>Security and fraud prevention services</ListItem>
            </List>

            <SubsectionTitle>4.2 Affiliate Partners</SubsectionTitle>
            <Paragraph>
                When you click on credit card links or apply for credit cards through our Service, you may be directed to third-party websites. We may receive compensation from these partners, but we do not share your personal information with them unless you voluntarily provide it directly to them.
            </Paragraph>

            <SubsectionTitle>4.3 Legal Requirements</SubsectionTitle>
            <Paragraph>
                We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as a court or government agency.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>5. Data Security</SectionTitle>
            <Paragraph>
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, please note that:
            </Paragraph>
            <List>
                <ListItem>Your calculation inputs are processed locally and never transmitted to our servers</ListItem>
                <ListItem>No method of transmission over the internet is 100% secure</ListItem>
                <ListItem>We cannot guarantee absolute security of any information</ListItem>
            </List>
        </Section>

        <Section>
            <SectionTitle>6. Your Privacy Rights</SectionTitle>
            
            <SubsectionTitle>6.1 Access and Control</SubsectionTitle>
            <Paragraph>
                Since we do not store your calculation data, there is no personal financial information for you to access or delete from our systems. However, you may have rights regarding automatically collected information.
            </Paragraph>

            <SubsectionTitle>6.2 Cookie Preferences</SubsectionTitle>
            <Paragraph>
                You can control cookies through your browser settings. You may choose to:
            </Paragraph>
            <List>
                <ListItem>Block all cookies</ListItem>
                <ListItem>Accept only first-party cookies</ListItem>
                <ListItem>Receive notifications when cookies are set</ListItem>
                <ListItem>Delete cookies after your browsing session</ListItem>
            </List>
            <Paragraph>
                Please note that disabling cookies may affect the functionality of our Service.
            </Paragraph>

            <SubsectionTitle>6.3 Do Not Track</SubsectionTitle>
            <Paragraph>
                Our Service does not currently respond to "Do Not Track" signals from browsers.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>7. Third-Party Websites</SectionTitle>
            <Paragraph>
                Our Service contains links to third-party websites, including credit card application pages. These websites have their own privacy policies, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites you visit.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>8. Children's Privacy</SectionTitle>
            <Paragraph>
                Our Service is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>9. International Users</SectionTitle>
            <Paragraph>
                Our Service is hosted in the United States. If you access our Service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our central database is operated.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>10. California Privacy Rights</SectionTitle>
            <Paragraph>
                California residents may have additional rights under the California Consumer Privacy Act (CCPA), including:
            </Paragraph>
            <List>
                <ListItem>Right to know what personal information we collect</ListItem>
                <ListItem>Right to delete personal information</ListItem>
                <ListItem>Right to opt-out of the sale of personal information</ListItem>
                <ListItem>Right to non-discrimination for exercising privacy rights</ListItem>
            </List>
            <Paragraph>
                <strong>Note:</strong> We do not sell personal information, and we do not retain your financial calculation data.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>11. European Union Users (GDPR)</SectionTitle>
            <Paragraph>
                If you are in the European Union, you may have additional rights under the General Data Protection Regulation (GDPR), including:
            </Paragraph>
            <List>
                <ListItem>Right of access to your personal data</ListItem>
                <ListItem>Right to rectification of inaccurate data</ListItem>
                <ListItem>Right to erasure ("right to be forgotten")</ListItem>
                <ListItem>Right to restrict processing</ListItem>
                <ListItem>Right to data portability</ListItem>
                <ListItem>Right to object to processing</ListItem>
            </List>
        </Section>

        <Section>
            <SectionTitle>12. Changes to This Privacy Policy</SectionTitle>
            <Paragraph>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </Paragraph>
            <Paragraph>
                Changes to this Privacy Policy are effective when they are posted on this page.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>13. Contact Us</SectionTitle>
            <ContactBox>
                <Paragraph>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </Paragraph>
                <List>
                    <ListItem>Through our website contact form</ListItem>
                    <ListItem>By email (contact information available on our website)</ListItem>
                </List>
                <Paragraph>
                    We will respond to your inquiry within a reasonable timeframe.
                </Paragraph>
            </ContactBox>
        </Section>

        <Section>
            <SectionTitle>14. Data Retention</SectionTitle>
            <Paragraph>
                Since we do not collect or store your financial calculation data, there is no retention period for this information. For automatically collected information (such as analytics data), we retain this information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>15. Summary</SectionTitle>
            <Paragraph>
                <strong>Key Points to Remember:</strong>
            </Paragraph>
            <List>
                <ListItem>Your spending calculations are processed locally and never stored by us</ListItem>
                <ListItem>We only collect basic website usage information automatically</ListItem>
                <ListItem>We may receive compensation from credit card partners when you click their links</ListItem>
                <ListItem>We do not sell your personal information</ListItem>
                <ListItem>You can control cookies through your browser settings</ListItem>
                <ListItem>We are committed to protecting your privacy and being transparent about our practices</ListItem>
            </List>
        </Section>
        </Container>
    </>
);

export default PrivacyPage;