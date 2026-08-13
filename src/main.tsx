import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f0b12] text-zinc-100">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-white">
          {/* <img alt="" className="h-8 w-8 object-contain" src="/othertime-logo.png" /> */}
          <img alt="" className="h-8 w-8 object-contain" src="/othertime-logo-tr-512.png" />
          <span>OTHERTIME</span>
        </a>
        <nav className="flex gap-5 text-sm text-zinc-400">
          <a className="transition hover:text-white" href="/privacy">Privacy</a>
          <a className="transition hover:text-white" href="/terms">Terms</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mx-auto max-w-5xl px-6 py-12 text-sm text-zinc-500">© {new Date().getFullYear()} Othertime</footer>
    </div>
  );
}

function Home() {
  return <Layout>
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-20">
      {/* <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
        Use your time together
      </p> */}
      <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-5xl">
        Let others hold you accountable for your screen time. Make more time for other things.
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
        Othertime lets groups hold each other accountable for the time they spend on their phones.
      </p>
    </section>
  </Layout>;
}

function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <Layout><article className="mx-auto max-w-3xl px-6 py-16"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Othertime</p><h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1><div className="prose prose-invert mt-10 max-w-none text-zinc-300 prose-headings:text-white prose-a:text-purple-300">{children}</div></article></Layout>;
}

function Privacy() { return <LegalPage title="Privacy policy"><p>Last updated: August 2026.</p><h2>Information we collect</h2><p>Othertime collects account information, group membership and activity data, protected-app selections, profile information, and device push-notification tokens when you use those features.</p><h2>How we use information</h2><p>We use this information to provide shared time pots, app locking, group activity, authentication, and notifications. We do not sell personal information.</p><h2>Storage and service providers</h2><p>Account and application data is stored using Supabase. Push notifications may be delivered through Expo and Firebase services.</p><h2>Your choices</h2><p>You can update your profile, remove your profile picture, leave groups, sign out, or request deletion of your account from within Othertime.</p><h2>Contact</h2><p>For privacy questions, contact us through <a href="https://othertime.app">othertime.app</a>.</p></LegalPage>; }
function Terms() { return <LegalPage title="Terms of service"><p>Last updated: August 2026.</p><h2>Using Othertime</h2><p>Use Othertime responsibly and only with devices and accounts you are authorised to control. Do not misuse group invitations, notifications, or app-locking features.</p><h2>Shared groups</h2><p>Group activity is visible to group members. You are responsible for the content you post and for protecting your sign-in credentials.</p><h2>Availability</h2><p>Othertime is provided as an evolving service. Features may change, and we do not guarantee uninterrupted availability.</p><h2>Contact</h2><p>For support, visit <a href="https://othertime.app">othertime.app</a>.</p></LegalPage>; }

const path = window.location.pathname.replace(/\/$/, "") || "/";
createRoot(document.getElementById("root")!).render(<StrictMode>{path === "/privacy" ? <Privacy /> : path === "/terms" ? <Terms /> : <Home />}</StrictMode>);
