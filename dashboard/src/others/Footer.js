import React from 'react';

function Footer() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',      // Full viewport height
                padding: '0 3cm',        // 3cm space on both sides
                backgroundColor: '#f8f9fa',
                boxSizing: 'border-box', // Ensures consistent spacing
                marginTop: '-500px'
            }}
        >
            <footer
                style={{
                    width: '100%',
                    maxWidth: '2000px',  // Limit content width for better readability
                    padding: '20px',
                    borderTop: '1px solid #ddd',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1', margin: '10px' }}>
                        <img
                            src='images/newlogo.jpg'
                            alt="Logo"
                            style={{ width: '98%', marginLeft:'-50px' }}
                        />
                        <p style={{ marginTop: '25px', fontSize: '12px', lineHeight: '1.6', color: '#666' }}>
                            © 2010 - 2024, Zerodha Broking Ltd. <br />
                            All rights reserved.
                        </p>
                    </div>
                    <div style={{ flex: '1', margin: '10px' }}>
                        <h5 style={{ fontSize: '16px', fontWeight: 'bold', color: '#555', marginBottom: '10px'}}>Company</h5>
                        {['About', 'Product', 'Pricing', 'Referral programme', 'Careers', 'Zerodha.tech', 'Press & media', 'Zerodha cares (CSR)'].map((text) => (
                            <a
                                href='#'
                                key={text}
                                style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#007bff', textDecoration: 'none' }}
                            >
                                {text}
                            </a>
                        ))}
                    </div>
                    <div style={{ flex: '1', margin: '10px' }}>
                        <h5 style={{ fontSize: '16px', fontWeight: 'bold', color: '#555', marginBottom: '10px' }}>Support</h5>
                        {['Contact us', 'Support portal', 'Z-connect blog', 'List of charges', 'Downloads and resources', 'Videos', 'Market overview', 'How to file a complaint?', 'Status of your complaint'].map((text) => (
                            <a
                                href='#'
                                key={text}
                                style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#007bff', textDecoration: 'none' }}
                            >
                                {text}
                            </a>
                        ))}
                    </div>
                    <div style={{ flex: '1', margin: '10px' }}>
                        <h5 style={{ fontSize: '16px', fontWeight: 'bold', color: '#555', marginBottom: '10px' }}>Account</h5>
                        {['Open an account', 'Fund transfer'].map((text) => (
                            <a
                                href='#'
                                key={text}
                                style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#007bff', textDecoration: 'none' }}
                            >
                                {text}
                            </a>
                        ))}
                    </div>
                </div>
                <div style={{ marginTop: '20px', fontSize: '2px', lineHeight: '0.8', color: '#666', backgroundColor: '#f9f9f9', padding: '15px', borderTop: '1px solid #ddd' }}>
                    <div>
                        <p style={{ fontSize: '12px', lineHeight: '22.6px' }}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services
                            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha
                            Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered
                            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
                            Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to
                            complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
                            Document as prescribed by SEBI | ICF</p>
                        <p style={{ fontSize: '12px', lineHeight: '22.6px' }}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on
                            SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the
                            grievances</p>
                        <p style={{ fontSize: '12px' }}><a href='#' style={{ color: '#007bff' }}>Smart Online Dispute Resolution</a> |
                            <a href='#' style={{ color: '#007bff' }}> Grievances Redressal Mechanism</a></p>
                        <p style={{ fontSize: '12px', lineHeight: '22.6px' }}>Investments in securities market are subject to market risks; read all the related documents carefully before investing</p>
                        <p style={{ fontSize: '12px', lineHeight: '22.6px' }}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the
                            depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository
                            participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge.
                            3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                        <p style={{ fontSize: '12px', lineHeight: '22.6px' }}>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
                            Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
                            Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is
                            done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process
                            again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need
                            to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank
                            to make payment in case of allotment. In case of non allotment the funds will remain in your bank account.
                            As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others.
                            If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '15px', gap: '15px', fontSize: '12px', backgroundColor: '#f1f1f1' }}>
                    {['NSE', 'BSE', 'MCX', 'Terms & conditions', 'Policies & Procedures', 'Privacy policy', 'Disclosure', 'for investor\'s attention', 'Investor charter'].map((link) => (
                        <a
                            href='#'
                            key={link}
                            style={{ color: '#007bff', textDecoration: 'none' }}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
}

export default Footer;