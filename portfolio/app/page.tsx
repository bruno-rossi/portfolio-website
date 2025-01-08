import SocialLinksList from "./ui/overview/social-links";
import Experience from "./ui/experience/experience";
import Projects from "./ui/projects/projects";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16">
      <div className="lg:flex lg:justify-between lg:gap-4 border-2">
        <header>
          <h1 className="text-4xl font-bold">Bruno Rossi</h1>
          <h2 className="text-lg font-medium">Software Engineer | Localization Program Manager</h2>
          <p>Bruno Rossi is a software engineeer and localization program manager with a passion for building globalization-friendly apps.</p>
          <SocialLinksList />
        </header>
        <main id="content">
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}
