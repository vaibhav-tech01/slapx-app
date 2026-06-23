export default function PrivacyPolicy() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-10">Last Updated: 10 April 2026</p>
        <div className="space-y-10 text-sm leading-relaxed text-muted">
          {/* 1. Introduction */}
          <SectionHeading>1. Introduction</SectionHeading>
          <SectionBody>
            Welcome to SlapX ("the App"). This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application. The App is designed for entertainment purposes only and reacts to device shakes and system events with sound effects.<br /><br />
            By using SlapX, you agree to the terms outlined in this Privacy Policy.
          </SectionBody>

          {/* 2. Developer Information */}
          <SectionHeading>2. Developer Information</SectionHeading>
          <SectionBody>
            <ul className="list-disc ml-5">
              <li>Developer: SlapX Team</li>
              <li>App Name: SlapX</li>
              <li>Country: India</li>
              <li>Contact Email: <a href="mailto:lord.dev0x@gmail.com" className="hover:text-primary-dark">lord.dev0x@gmail.com</a></li>
            </ul>
          </SectionBody>

          {/* 3. Information We Collect */}
          <SectionHeading>3. Information We Collect</SectionHeading>
          <SubHeading>3.1 Sensor Data</SubHeading>
          <SectionBody>
            The App accesses your device's accelerometer to detect shake gestures. This data is processed in real time and remains entirely on your device. It is never stored, transmitted, or shared with any third party.
          </SectionBody>
          <SubHeading>3.2 Battery and Charging State</SubHeading>
          <SectionBody>
            The App monitors battery and charging status to trigger sound effects, such as when the charger is connected or disconnected. This information is processed locally and never leaves your device.
          </SectionBody>
          <SubHeading>3.3 Local Preferences</SubHeading>
          <SectionBody>
            We store user preferences on your device using secure local storage (SharedPreferences). These may include:
            <ul className="list-disc ml-5 mt-2">
              <li>Selected sound modes</li>
              <li>Background mode settings</li>
              <li>Custom sound assignments</li>
              <li>Device compatibility checks</li>
              <li>Premium purchase status</li>
            </ul>
            This data is stored solely on your device and is not transmitted to external servers.
          </SectionBody>
          <SubHeading>3.4 Custom Sound Files</SubHeading>
          <SectionBody>
            If you upload custom MP3 files, they are stored in the App's private directory. These files remain on your device and are never uploaded or shared.
          </SectionBody>
          <SubHeading>3.5 Purchase Information</SubHeading>
          <SectionBody>
            All in-app purchases are securely processed by Google Play Billing. We do not collect, process, or store your financial information. The App only receives a purchase confirmation token to unlock premium features.
          </SectionBody>
          <SubHeading>3.6 Coupon Code Validation</SubHeading>
          <SectionBody>
            The App uses Firebase Cloud Firestore to validate coupon codes. This process may store:
            <ul className="list-disc ml-5 mt-2">
              <li>Coupon redemption status</li>
              <li>A hashed and anonymized device identifier</li>
            </ul>
            No personally identifiable information is collected or stored.
          </SectionBody>

          {/* 4. Information We Do Not Collect */}
          <SectionHeading>4. Information We Do Not Collect</SectionHeading>
          <SectionBody>
            We respect your privacy. SlapX does not collect or store:
            <ul className="list-disc ml-5 mt-2">
              <li>Names, email addresses, or phone numbers</li>
              <li>Location data</li>
              <li>Contacts, photos, or media files outside the app's private storage</li>
              <li>Camera or microphone data</li>
              <li>Personal identifiers</li>
              <li>Biometric information</li>
              <li>Browsing history</li>
              <li>Analytics or tracking data beyond Firebase for coupon validation</li>
              <li>Advertising identifiers or behavioral tracking data</li>
            </ul>
            The App does not display advertisements.
          </SectionBody>

          {/* 5. Third-Party Services */}
          <SectionHeading>5. Third-Party Services</SectionHeading>
          <SectionBody>
            The App uses trusted third-party services to provide essential functionality:
            <ul className="list-disc ml-5 mt-2">
              <li>Google Play Billing – Processes in-app purchases securely.</li>
              <li>Firebase Cloud Firestore – Validates coupon codes and prevents misuse.</li>
            </ul>
            These services operate under their own privacy policies. For more information, please visit:<br />
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark">Google Privacy Policy</a><br />
            All data transmitted to Firebase is encrypted using industry-standard security protocols.
          </SectionBody>

          {/* 6. Permissions Used */}
          <SectionHeading>6. Permissions Used</SectionHeading>
          <SectionBody>
            SlapX requests only the permissions necessary for its functionality:
            <ul className="list-disc ml-5 mt-2">
              <li>FOREGROUND_SERVICE – Enables shake detection while the app runs in the background.</li>
              <li>WAKE_LOCK – Keeps the device active during shake detection.</li>
              <li>POST_NOTIFICATIONS – Displays notifications when background services are active.</li>
              <li>BILLING – Processes in-app purchases via Google Play.</li>
              <li>RECEIVE_BOOT_COMPLETED – Restarts background services after device reboot (optional).</li>
              <li>VIBRATE – Provides haptic feedback for user interactions.</li>
              <li>Accelerometer Sensor – To detect shake gestures.</li>
              <li>Battery State Access – To detect charging events.</li>
            </ul>
            These are hardware features and do not collect personal data.
          </SectionBody>

          {/* 7. Data Storage and Retention */}
          <SectionHeading>7. Data Storage and Retention</SectionHeading>
          <SectionBody>
            <ul className="list-disc ml-5 mt-2">
              <li>All user data is stored locally on your device.</li>
              <li>Data is deleted automatically when the App is uninstalled.</li>
              <li>Premium purchases are linked to your Google account and can be restored through Google Play.</li>
              <li>Firebase stores only minimal, anonymized data required for coupon validation.</li>
            </ul>
            We retain data only for as long as necessary to provide App functionality.
          </SectionBody>

          {/* 8. Data Security */}
          <SectionHeading>8. Data Security</SectionHeading>
          <SectionBody>
            We implement industry-standard security measures to protect your data. These include:
            <ul className="list-disc ml-5 mt-2">
              <li>Secure local storage on the device</li>
              <li>Encrypted communication with Firebase</li>
              <li>No storage of sensitive personal information</li>
              <li>Reliance on secure Google Play infrastructure for payments</li>
            </ul>
            Despite these measures, no method of electronic transmission or storage is completely secure.
          </SectionBody>

          {/* 9. Children's Privacy */}
          <SectionHeading>9. Children's Privacy</SectionHeading>
          <SectionBody>
            SlapX is intended for a general audience and is not specifically directed at children under the age of 13. The App does not knowingly collect personal information from children.<br /><br />
            If you believe a child has provided personal data, please contact us, and we will take appropriate action.
          </SectionBody>

          {/* 10. Your Rights */}
          <SectionHeading>10. Your Rights</SectionHeading>
          <SectionBody>
            Depending on your location, you may have the right to:
            <ul className="list-disc ml-5 mt-2">
              <li>Access information about how your data is used</li>
              <li>Request deletion of locally stored data by uninstalling the App</li>
              <li>Withdraw consent by discontinuing use of the App</li>
              <li>Contact us for privacy-related concerns</li>
            </ul>
            Since we do not collect personal data, most requests can be fulfilled by uninstalling the App.
          </SectionBody>

          {/* 11. Google Play Data Safety Compliance */}
          <SectionHeading>11. Google Play Data Safety Compliance</SectionHeading>
          <SectionBody>
            The information provided in this Privacy Policy accurately reflects the data practices disclosed in the Google Play Store's Data Safety section. We are committed to transparency and user privacy.
          </SectionBody>

          {/* 12. Legal Basis for Processing */}
          <SectionHeading>12. Legal Basis for Processing</SectionHeading>
          <SectionBody>
            We process limited data solely to provide essential app functionality. By using SlapX, you consent to the practices described in this Privacy Policy.
          </SectionBody>

          {/* 13. Changes to This Privacy Policy */}
          <SectionHeading>13. Changes to This Privacy Policy</SectionHeading>
          <SectionBody>
            We may update this Privacy Policy from time to time. Updates will be reflected within the App along with a revised "Last Updated" date. Continued use of the App constitutes acceptance of the updated policy.
          </SectionBody>

          {/* 14. Contact Us */}
          <SectionHeading>14. Contact Us</SectionHeading>
          <SectionBody>
            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:<br />
            Email: <a href="mailto:lord.dev0x@gmail.com" className="text-primary underline hover:text-primary-dark">lord.dev0x@gmail.com</a>
          </SectionBody>

          <div className="text-center text-xs text-muted mt-8">© 2026 SlapX. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }) {
  return <h2 className="text-lg font-semibold text-dark mt-8 mb-2">{children}</h2>;
}
function SubHeading({ children }) {
  return <h3 className="text-base font-semibold text-secondary mt-4 mb-1">{children}</h3>;
}
function SectionBody({ children }) {
  return <div className="mb-2 text-muted">{children}</div>;
}
