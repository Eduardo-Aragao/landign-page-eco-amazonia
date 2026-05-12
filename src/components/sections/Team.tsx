import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { Container } from '@/components/ui/Container';
import { Background } from '@/components/ui/Background';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { teamContent, teamTracks } from '@/constants';
import type { TeamMember } from '@/types';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';
import { cn } from '@/utils/cn';

const trackIconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  server: Server,
  smartphone: Smartphone,
  globe: Globe,
};

function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_18px_50px_-22px_rgba(10,46,46,0.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(10,46,46,0.35)]"
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="relative size-full">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(140deg, #8C6A55 0%, #6E4E3B 45%, #4F3625 100%)',
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),transparent_55%)]" />
            <div className="absolute inset-0 noise" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="size-16 sm:size-20 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center font-display text-2xl font-semibold tracking-tighter">
                {initials}
              </div>
              <span className="mt-3 text-[10px] uppercase tracking-widest text-white/65">
                Foto em breve
              </span>
            </div>
          </div>
        )}

        {/* Track chip */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/60 px-2.5 py-1 text-[10px] font-semibold text-primary-base shadow-sm">
            <TrackDot track={member.track} />
            {member.role}
          </span>
        </div>

        {/* Hover socials */}
        {(member.social.github || member.social.linkedin) && (
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="rounded-2xl bg-white/85 backdrop-blur-xl border border-white/70 px-3 py-2 flex items-center justify-center gap-3 shadow-md">
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${member.name}`}
                  className="text-primary-base hover:text-primary-dark transition-colors"
                >
                  <GithubIcon className="size-4" />
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${member.name}`}
                  className="text-primary-base hover:text-primary-dark transition-colors"
                >
                  <LinkedinIcon className="size-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-primary-dark tracking-tighter leading-tight">
          {member.name}
        </h3>
        <p className="mt-1 text-[10.5px] uppercase tracking-widest text-primary-base font-semibold">
          {member.role}
        </p>
        <p className="mt-3 text-sm text-gray-300 leading-relaxed text-pretty">
          {member.bio}
        </p>
      </div>
    </motion.article>
  );
}

function TrackDot({ track }: { track: TeamMember['track'] }) {
  const colors: Record<TeamMember['track'], string> = {
    design: 'bg-accent-base',
    backend: 'bg-primary-light',
    mobile: 'bg-primary-clin',
    web: 'bg-amber-500',
  };
  return <span className={cn('size-1.5 rounded-full', colors[track])} />;
}

function TrackHeading({
  number,
  icon: Icon,
  label,
  count,
}: {
  number: string;
  icon: LucideIcon;
  label: string;
  count: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 flex-wrap"
    >
      <span className="font-mono text-[11px] font-semibold text-primary-base tracking-tighter">
        [{number}]
      </span>
      <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary-base text-white shadow-sm">
        <Icon className="size-4" />
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tighter text-primary-dark">
        {label}
      </h3>
      <span className="text-xs text-gray-300">
        · {count} {count === 1 ? 'integrante' : 'integrantes'}
      </span>
      <div className="flex-1 min-w-[40px] ml-2 hairline" />
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="team" className="relative isolate py-20 sm:py-24 lg:py-32 overflow-hidden">
      <Background variant="soft" />

      <Container>
        <SectionHeader
          eyebrow={teamContent.eyebrow}
          title={teamContent.title}
          description={teamContent.description}
          highlight="Amazônia"
        />

        <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-14">
          {teamTracks.map((track, idx) => {
            const TrackIcon = trackIconMap[track.icon] ?? Smartphone;
            const memberCount = track.members.length;
            return (
              <div key={track.id}>
                <TrackHeading
                  number={String(idx + 1).padStart(2, '0')}
                  icon={TrackIcon}
                  label={track.label}
                  count={memberCount}
                />
                <motion.div
                  variants={staggerContainer(0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className={cn(
                    'mt-6 grid gap-4 sm:gap-5',
                    memberCount >= 4
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                      : memberCount >= 2
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
                  )}
                >
                  {track.members.map((member) => (
                    <TeamCard key={member.id} member={member} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
