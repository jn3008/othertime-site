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
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
        Spend less time scrolling, together
        {/* Use your time together */}
      </p>
      <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-5xl">
        Let others hold you accountable for your screen time. Make more time for other things.
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
        Choose the apps to lock, share a time pot with your group, and keep each other honest when it’s time to put your phone down.
        {/* Othertime lets groups hold each other accountable for the time they spend on their phones. */}
      </p>
    </section>
  </Layout>;
}

function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <Layout><article className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
    <div className="border-b border-white/10 pb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-300">Othertime · Legal</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
      <p className="mt-5 text-sm text-zinc-500">Last updated <time dateTime="2026-08-01">August 2026</time></p>
    </div>
    <div className="mt-10 space-y-10 text-[1.05rem] leading-8 text-zinc-300">{children}</div>
  </article></Layout>;
}

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="border-l border-purple-300/40 pl-5 sm:pl-7">
    <h2 className="text-xl font-semibold leading-7 text-white sm:text-2xl">{title}</h2>
    <div className="mt-3 space-y-4 text-zinc-300">{children}</div>
  </section>;
}

function Privacy() { return <LegalPage title="Privacy policy">
  <LegalSection title="Information we collect"><p>Othertime collects your sign-in email and account identifier, group memberships and activity, the apps you choose to lock, your display name and optional profile picture, and a device push-notification token when you enable notifications.</p></LegalSection>
  <LegalSection title="What we do not collect"><p>Othertime does not collect or send a history of which apps you used or when you used them. We store the apps you choose to lock by default and the shared-pot unlock sessions needed to operate the service, such as when an unlock started, its maximum duration, and when it ended. App blocking is performed on your device.</p></LegalSection>
  <LegalSection title="How we use information"><p>We use this information to provide shared time pots, app locking, group activity, authentication, and notifications. We do not sell personal information.</p></LegalSection>
  <LegalSection title="Storage and service providers"><p>Account and application data is stored using Supabase. Push notifications may be delivered through Expo and Firebase services.</p></LegalSection>
  <LegalSection title="Your choices"><p>You can update your profile, remove your profile picture, leave groups, sign out, or request deletion of your account from within Othertime.</p></LegalSection>
  <LegalSection title="Contact"><p>For privacy questions, email <a className="font-medium text-purple-300 underline decoration-purple-300/40 underline-offset-4 hover:text-purple-200" href="mailto:othertime.app@proton.me">othertime.app@proton.me</a>.</p></LegalSection>
</LegalPage>; }
function Terms() { return <LegalPage title="Terms of service">
  <LegalSection title="Using Othertime"><p>Use Othertime responsibly and only with devices and accounts you are authorised to control. Do not misuse group invitations, notifications, or app-locking features.</p></LegalSection>
  <LegalSection title="Shared groups"><p>Group activity is visible to group members. You are responsible for the content you post and for protecting your sign-in credentials.</p></LegalSection>
  <LegalSection title="Availability"><p>Othertime is provided as an evolving service. Features may change, and we do not guarantee uninterrupted availability.</p></LegalSection>
  <LegalSection title="Contact"><p>For support, email <a className="font-medium text-purple-300 underline decoration-purple-300/40 underline-offset-4 hover:text-purple-200" href="mailto:othertime.app@proton.me">othertime.app@proton.me</a>.</p></LegalSection>
</LegalPage>; }

const path = window.location.pathname.replace(/\/$/, "") || "/";
createRoot(document.getElementById("root")!).render(<StrictMode>{path === "/privacy" ? <Privacy /> : path === "/terms" ? <Terms /> : <Home />}</StrictMode>);
