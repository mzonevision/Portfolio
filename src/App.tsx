/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './components/LanguageContext';
import { Layout, Hero, About, Projects, Skills, Services, Contact } from './components/Portfolio';

export default function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </Layout>
    </LanguageProvider>
  );
}

