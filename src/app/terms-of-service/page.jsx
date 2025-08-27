export const metadata = {
  title: "Terms of Service - Browser Game Platform",
  description: "Read Browser Game Platform’s terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">Terms of Service</h1>
      <p>
        By accessing and using Browser Game Platform, you agree to the following terms:
      </p>
      <ul className="list-decimal list-inside space-y-2">
        <li>Games are provided “as is” without warranties.</li>
        <li>You agree not to misuse or exploit the platform.</li>
        <li>We may update these terms at any time without prior notice.</li>
      </ul>
    </main>
  );
}
