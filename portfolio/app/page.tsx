import SocialLinksList from "./ui/overview/social-links";
import Experience from "./ui/experience/experience";
import Projects from "./ui/projects/projects";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Bruno Rossi</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">Software Engineer | Localization Program Manager</h2>
            <p className="mt-4 max-w-xs leading-normal">Bruno Rossi is a software engineeer and localization program manager with a passion for building globalization-friendly apps.</p>
          </div>
          <nav className="lg:visible invisible my-8">
            <ol className="group/list">
              <li className="hover:text-lg hover:before:content-['——']"><a href="#projects">Projects</a></li>
              <li className="hover:text-lg hover:before:content-['——']"><a href="#experience">Experience</a></li>
            </ol>
          </nav>
          <SocialLinksList />
        </header>
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <Projects />
          <Experience />
        </main>
      </div>
    </div>
  );
}
