export default function Terms() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted mb-10">Last updated: 10 April 2026</p>
        <div className="space-y-10 text-sm leading-relaxed text-muted">
          <SectionBody>
            Please read these Terms &amp; Conditions ("Terms") carefully before using the SlapX application ("the App"). By downloading, installing, or using the App, you agree to be bound by these Terms.
          </SectionBody>
          <SectionHeading>1. Entertainment Purpose</SectionHeading>
          <SectionBody>
            The App is designed solely for entertainment and fun. It plays sound effects in response to device shakes, charging events, and other interactions. The App does not provide any professional, medical, financial, or advisory service.
          </SectionBody>
          <SectionHeading>2. Acceptable Use</SectionHeading>
          <SectionBody>
            You agree to use the App responsibly and in accordance with all applicable laws. You shall not:
            <ul className="list-disc ml-5 mt-2">
              <li>Use the App to intentionally disturb, harass, or annoy others in public or private spaces.</li>
              <li>Use the App in situations where sudden loud sounds could cause harm, distraction, or danger (e.g. while driving, in hospitals, during emergencies).</li>
              <li>Modify, reverse-engineer, or redistribute the App or its content without permission.</li>
              <li>Attempt to circumvent the premium purchase mechanism.</li>
            </ul>
          </SectionBody>
          <SectionHeading>3. Device Safety</SectionHeading>
          <SectionBody>
            The App requires you to physically shake your device. You are solely responsible for handling your device safely. We are not liable for any damage to your device, other property, or personal injury resulting from shaking or dropping your device while using the App.
          </SectionBody>
          <SectionHeading>4. Sound Content</SectionHeading>
          <SectionBody>
            All built-in sounds are original or properly licensed for use within this App. If you add custom sound files, you are responsible for ensuring you have the right to use those files. We do not monitor or review custom sounds added by users.
          </SectionBody>
          <SectionHeading>5. In-App Purchases</SectionHeading>
          <SectionBody>
            <ul className="list-disc ml-5 mt-2">
              <li>The App offers a one-time premium purchase that unlocks additional modes, custom sounds, and background mode.</li>
              <li>Purchases are processed by Google Play and are subject to Google Play's Terms of Service.</li>
              <li>The premium purchase is non-consumable: it is tied to your Google account and can be restored on any device signed into the same account.</li>
              <li>Refunds are handled by Google Play per their refund policy. We do not process payments or refunds directly.</li>
            </ul>
          </SectionBody>
          <SectionHeading>6. Intellectual Property</SectionHeading>
          <SectionBody>
            All content in the App — including but not limited to the name "SlapX", sound effects, graphics, animations, and code — is the intellectual property of the developer and is protected by applicable copyright laws. You may not copy, distribute, or create derivative works without written permission.
          </SectionBody>
          <SectionHeading>7. Disclaimer of Warranties</SectionHeading>
          <SectionBody>
            The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or compatible with every device.
          </SectionBody>
          <SectionHeading>8. Limitation of Liability</SectionHeading>
          <SectionBody>
            To the maximum extent permitted by applicable law, the developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App, including but not limited to device damage, hearing damage from loud volume, or disturbances caused by sound playback.
          </SectionBody>
          <SectionHeading>9. Age Restrictions</SectionHeading>
          <SectionBody>
            The App is rated for ages 12+ (Teen). Some sound modes contain suggestive, crude, or mildly provocative audio content (e.g. the "Seductive" and "Roast" modes). The App does not contain graphic violence, nudity, or explicit sexual content. Parental discretion is advised for younger users.
          </SectionBody>
          <SectionHeading>10. Background Service</SectionHeading>
          <SectionBody>
            The App offers an optional background mode that keeps shake detection active when the App is minimised. This uses a foreground service with a persistent notification, as required by Android. You can disable background mode at any time from within the App.
          </SectionBody>
          <SectionHeading>11. Changes to These Terms</SectionHeading>
          <SectionBody>
            We reserve the right to modify these Terms at any time. Updated Terms will be reflected within the App with a new "Last updated" date. Continued use of the App after changes constitutes acceptance of the revised Terms.
          </SectionBody>
          <SectionHeading>12. Governing Law</SectionHeading>
          <SectionBody>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in India.
          </SectionBody>
          <SectionHeading>13. Contact</SectionHeading>
          <SectionBody>
            If you have any questions about these Terms, please contact:<br />
            Email: <a href="mailto:lord.dev0x@gmail.com" className="hover:text-primary-dark">lord.dev0x@gmail.com</a>
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
function SectionBody({ children }) {
  return <div className="mb-2 text-muted">{children}</div>;
}
