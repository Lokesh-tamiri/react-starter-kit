import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='container' style={{
        marginTop:150
    }}>
      <h1 style={{
        color:"black"
      }}>Privacy Policy</h1>
      <p>
        Welcome to the Privacy Policy of Brand. This policy outlines how we
        collect, use, disclose, and safeguard your personal information.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We may collect various types of information from users of our website
        and mobile application, including:
      </p>
      <ul>
        <li>
          Personal information provided during the registration of students for
          the daily credited amount program.
        </li>
        <li>
          Transaction information when students make purchases using the
          credited amount at our restaurant.
        </li>
        {/* Add any other relevant information your app may collect */}
      </ul>
      <h3>How We Use Your Information</h3>
      <p>
        We use the collected information to provide and improve our services,
        including:
      </p>
      <ul>
        <li>Administering the student registration and credited amount program.</li>
        <li>Processing transactions and providing receipts.</li>
        {/* Add any other relevant use cases */}
      </ul>
      <h3>Security</h3>
      <p>
        We take the security of your personal information seriously. We employ
        industry-standard measures to protect your data from unauthorized
        access, disclosure, alteration, and destruction.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions or concerns regarding our Privacy Policy,
        please contact us at +39 375 783 5093.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
