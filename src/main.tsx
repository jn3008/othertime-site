import { StrictMode, type FormEvent, type ReactNode, useMemo, useState } from "react";
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
      <footer className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-12 text-sm text-zinc-500">
        <span>© {new Date().getFullYear()} Othertime</span>
        <a className="transition hover:text-zinc-300" href="/privacy">Privacy</a>
        <a className="transition hover:text-zinc-300" href="/terms">Terms</a>
        <a className="transition hover:text-zinc-300" href="/delete-account">Delete account</a>
      </footer>
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

function Privacy() {
  return <LegalPage title="Privacy policy">
    <LegalSection title="Information we collect"><p>Othertime collects your sign-in email and account identifier, group memberships and activity, the apps you choose to lock, your display name and optional profile picture, and a device push-notification token when you enable notifications.</p></LegalSection>
    <LegalSection title="What we do not collect"><p>Othertime does not collect or send a history of which apps you used or when you used them. We store the apps you choose to lock by default and the shared-pot unlock sessions needed to operate the service, such as when an unlock started, its maximum duration, and when it ended. App blocking is performed on your device.</p></LegalSection>
    <LegalSection title="How we use information"><p>We use this information to provide shared time pots, app locking, group activity, authentication, and notifications. We do not sell personal information.</p></LegalSection>
    <LegalSection title="Storage and service providers"><p>Account and application data is stored using Supabase. Push notifications may be delivered through Expo and Firebase services.</p></LegalSection>
    <LegalSection title="Your choices"><p>You can update your profile, remove your profile picture, leave groups, sign out, or request deletion of your account from within Othertime.</p></LegalSection>
    <LegalSection title="Contact"><p>For privacy questions, email <a className="font-medium text-purple-300 underline decoration-purple-300/40 underline-offset-4 hover:text-purple-200" href="mailto:othertime.app@proton.me">othertime.app@proton.me</a>.</p></LegalSection>
  </LegalPage>;
}
function Terms() {
  return <LegalPage title="Terms of service">
    <LegalSection title="Using Othertime"><p>Use Othertime responsibly and only with devices and accounts you are authorised to control. Do not misuse group invitations, notifications, or app-locking features.</p></LegalSection>
    <LegalSection title="Shared groups"><p>Group activity is visible to group members. You are responsible for the content you post and for protecting your sign-in credentials.</p></LegalSection>
    <LegalSection title="Availability"><p>Othertime is provided as an evolving service. Features may change, and we do not guarantee uninterrupted availability.</p></LegalSection>
    <LegalSection title="Contact"><p>For support, email <a className="font-medium text-purple-300 underline decoration-purple-300/40 underline-offset-4 hover:text-purple-200" href="mailto:othertime.app@proton.me">othertime.app@proton.me</a>.</p></LegalSection>
  </LegalPage>;
}

function DeleteAccount() {
  return <LegalPage title="Delete your Othertime account">
    <LegalSection title="Delete your account in the app">
      <p>Open Othertime, go to <strong className="font-semibold text-white">Settings</strong>, scroll to the bottom, and choose <strong className="font-semibold text-white">Delete account</strong>. Confirm the deletion when prompted.</p>
      <p>Your account deletion request is processed from inside the app. You may need to sign in first.</p>
    </LegalSection>
    <LegalSection title="Request deletion of selected data">
      <p>You can remove some data without deleting your account by using the relevant settings in Othertime. For example, remove your profile picture, leave a group, or remove your locked-app selections. For any other partial deletion request, email <a className="font-medium text-purple-300 underline decoration-purple-300/40 underline-offset-4 hover:text-purple-200" href="mailto:othertime.app@proton.me?subject=Othertime%20data%20deletion">othertime.app@proton.me</a> and describe the data you want removed.</p>
    </LegalSection>
    <LegalSection title="What we delete">
      <p>We delete your account and associated personal data, including your profile, profile picture, group memberships, group activity and messages, locked-app selections, push-notification tokens, and stored unlock history associated with your account.</p>
    </LegalSection>
    <LegalSection title="Retention">
      <p>Some copies may remain briefly in encrypted backups or service logs while they expire through normal retention processes. We do not retain your account for advertising or sell your personal information.</p>
    </LegalSection>
    <LegalSection title="Need help?"><p>If you cannot access the app, email <a className="font-medium text-purple-300 underline decoration-purple-300/40 underline-offset-4 hover:text-purple-200" href="mailto:othertime.app@proton.me?subject=Othertime%20account%20deletion">othertime.app@proton.me</a> from the email address associated with your account and request deletion.</p></LegalSection>
  </LegalPage>;
}

function Join() {
  const code = new URLSearchParams(window.location.search).get("code")?.trim() ?? "";
  const appUrl = code ? `othertime://join?code=${encodeURIComponent(code)}` : "othertime://";
  return <Layout><section className="mx-auto max-w-xl px-6 py-20 sm:py-28">
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-300">Othertime invitation</p>
    <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Join a group</h1>
    {code ? <>
      <p className="mt-5 text-lg leading-8 text-zinc-400">You’ve been invited to join a shared time pot on Othertime.</p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Invite code</p>
        <p className="mt-2 break-all font-mono text-lg text-white">{code}</p>
      </div>
      <a className="mt-8 flex items-center justify-center rounded-2xl bg-white px-5 py-4 text-center font-semibold text-[#24152a] transition hover:bg-purple-100" href={appUrl}>Open in Othertime</a>
      <p className="mt-5 text-center text-sm leading-6 text-zinc-500">If the app doesn’t open, install Othertime first, then return to this page and tap the button again.</p>
    </> : <p className="mt-5 rounded-2xl border border-red-300/20 bg-red-400/10 p-5 text-zinc-300">This invite link is missing its code. Ask the group member who invited you to send a new link.</p>}
  </section></Layout>;
}

function ResetPassword() {
  const tokens = useMemo(() => {
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    return {
      accessToken: hash.get("access_token") ?? "",
      refreshToken: hash.get("refresh_token") ?? "",
      type: hash.get("type") ?? "",
    };
  }, []);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

  const openInApp = () => {
    const params = new URLSearchParams({ access_token: tokens.accessToken, refresh_token: tokens.refreshToken, type: "recovery" });
    window.location.href = `othertime://auth/callback#${params.toString()}`;
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password.length < 6) { setStatus("error"); setMessage("Your password must be at least 6 characters long."); return; }
    if (password !== confirmation) { setStatus("error"); setMessage("The passwords do not match."); return; }
    if (!tokens.accessToken || tokens.type !== "recovery" || !supabaseUrl || !supabaseKey) {
      setStatus("error"); setMessage("This reset link is invalid or has expired. Request a new one from Othertime."); return;
    }
    setStatus("saving");
    try {
      const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
        method: "PUT",
        headers: { apikey: supabaseKey, Authorization: `Bearer ${tokens.accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) throw new Error("Password update failed");
      setStatus("success");
      setMessage("Your password has been updated. You can now return to Othertime and sign in.");
    } catch {
      setStatus("error");
      setMessage("This reset link is invalid or has expired. Request a new one from Othertime.");
    }
  }

  return <Layout><section className="mx-auto max-w-xl px-6 py-20 sm:py-28">
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-300">Othertime account</p>
    <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Reset your password</h1>
    {status === "success" ? <p className="mt-6 rounded-2xl border border-green-300/20 bg-green-400/10 p-5 text-lg leading-8 text-zinc-200">{message}</p> : <>
      <p className="mt-5 text-lg leading-8 text-zinc-400">Choose a new password for your Othertime account.</p>
      <form className="mt-8 space-y-4" onSubmit={submit}>
        <input className="w-full rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-4 text-white outline-none focus:border-purple-300" minLength={6} onChange={(event) => setPassword(event.target.value)} placeholder="New password" type="password" value={password} />
        <input className="w-full rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-4 text-white outline-none focus:border-purple-300" minLength={6} onChange={(event) => setConfirmation(event.target.value)} placeholder="Confirm new password" type="password" value={confirmation} />
        <button className="w-full rounded-2xl bg-white px-5 py-4 font-semibold text-[#24152a] disabled:opacity-50" disabled={status === "saving"} type="submit">{status === "saving" ? "Updating…" : "Update password"}</button>
      </form>
      {message && status === "error" && <p className="mt-4 rounded-2xl border border-red-300/20 bg-red-400/10 p-4 text-zinc-300">{message}</p>}
      {tokens.accessToken && <button className="mt-5 w-full rounded-2xl border border-white/15 px-5 py-4 font-semibold text-white" onClick={openInApp} type="button">Open in Othertime</button>}
    </>}
  </section></Layout>;
}

const path = window.location.pathname.replace(/\/$/, "") || "/";
createRoot(document.getElementById("root")!).render(<StrictMode>{path === "/privacy" ? <Privacy /> : path === "/terms" ? <Terms /> : path === "/delete-account" ? <DeleteAccount /> : path === "/join" ? <Join /> : path === "/reset-password" ? <ResetPassword /> : <Home />}</StrictMode>);
