export const metadata = {
  title: "Contact Us - Browser Game Platform",
  description: "Get in touch with the Browser Game Platform team.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">Contact Us</h1>
      <p>
        Have questions, feedback, or business inquiries?  
        Reach out to us at:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Email: <a href="mailto:support@browsergameplatform.com" className="text-violet-500 hover:underline">support@browsergameplatform.com</a></li>
        <li>Phone: +212 600 000 000</li>
      </ul>
    </main>
  );
}
