import { Footer, Navbar } from '@/components/layout';
import {
  About,
  AppShowcase,
  CTA,
  Features,
  Hero,
  Impact,
  Roadmap,
  Stats,
  Sustainability,
  TechStack,
  Team,
  WasteTypes,
} from '@/components/sections';

function App() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <AppShowcase />
        <Roadmap />
        <WasteTypes />
        <Sustainability />
        <Impact />
        <Stats />
        <TechStack />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
