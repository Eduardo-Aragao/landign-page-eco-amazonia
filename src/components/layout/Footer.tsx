import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { brand, footerLinks, footerContent } from '@/constants';

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04181f] to-[#020c10]" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-light/30 to-transparent"
        />
      </div>

      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Logo variant="light" />
              <p className="mt-5 text-sm text-white/55 max-w-sm leading-relaxed">
                {footerContent.description}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {(['produto', 'recursos', 'empresa'] as const).map((groupKey) => (
                <div key={groupKey}>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                    {groupKey}
                  </p>
                  <ul className="space-y-3">
                    {footerLinks[groupKey].map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center gap-1 text-sm text-white/75 hover:text-white transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/45">
            <p className="text-pretty">
              © {brand.year} {brand.legalName}. {footerContent.copyright}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Termos
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
