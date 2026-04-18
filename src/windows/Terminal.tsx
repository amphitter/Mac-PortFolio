import { WindowControls } from '#components';
import { techStack } from '#constants';
import { WindowWrapper } from '#hoc';
import { Check, Flag, Terminal as TerminalIcon } from 'lucide-react';
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactElement,
  type KeyboardEvent,
} from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type LineType =
  | { kind: 'input'; text: string }
  | { kind: 'output'; text: string }
  | { kind: 'error'; text: string }
  | { kind: 'tech_stack' }
  | { kind: 'divider' }
  | { kind: 'welcome' };

// ─── Constants ────────────────────────────────────────────────────────────────

const PROMPT = '@amphitter %';

const WELCOME_LINES = [
  'amphitter-mac — zsh — 80×24',
  'Last login: ' + new Date().toDateString(),
  'Type `help` for available commands.',
];

const HELP_TEXT = [
  '',
  '  Available commands:',
  '  ──────────────────────────────────────',
  '  whoami           About Devansh Singh',
  '  skills           Show full tech stack',
  '  show tech stack  Alias for skills',
  '  projects         List active projects',
  '  contact          Contact information',
  '  social           Social links',
  '  date             Current date & time',
  '  clear            Clear terminal',
  '  help             Show this help menu',
  '  ──────────────────────────────────────',
  '',
];

const WHOAMI_TEXT = [
  '',
  '  Devansh Singh',
  '  B.Tech AI & Data Science @ GITM (Gurugram University)',
  '  Full-Stack Developer · ML Engineer · Open Source Contributor',
  '',
  '  Associate Founder @ Team Sankalp',
  '  Student Placement Coordinator @ GITM',
  '  GSoC \'25 Contributor · Innovation Awardee',
  '',
  '  15+ Hackathons · IIT Delhi · IIT Guwahati · NSUT · IIIT Delhi',
  '',
];

const PROJECTS_TEXT = [
  '',
  '  Active Projects:',
  '  ──────────────────────────────────────',
  '  [1] CITN Institute – ERP & Student Monitoring System',
  '      Stack: React.js · Node.js · MongoDB',
  '',
  '  [2] Abreonix – Production Website (Internship)',
  '      Stack: React.js · TailwindCSS · Node.js',
  '      URL:   https://abreonix.in',
  '',
  '  [3] Team Eklavya – ERP + SaaS Event Platform',
  '      Stack: Next.js · PostgreSQL · Prisma',
  '      URL:   https://teameklavya.xyz',
  '',
  '  [4] CyberSentinel – AI Vulnerability Scanner',
  '      Stack: React.js · FastAPI · Python',
  '',
  '  [5] Face Recognition Attendance System',
  '      Stack: Python · OpenCV · face_recognition',
  '  ──────────────────────────────────────',
  '',
];

const CONTACT_TEXT = [
  '',
  '  Email:    devanshsinghr00@gmail.com',
  '  GitHub:   github.com/amphitter',
  '  LinkedIn: linkedin.com/in/amphitter',
  '',
];

const SOCIAL_TEXT = [
  '',
  '  GitHub   → https://github.com/amphitter',
  '  LinkedIn → https://www.linkedin.com/in/amphitter/',
  '  Twitter  → https://x.com/',
  '  Email    → devanshsinghr00@gmail.com',
  '',
];

// ─── Component ────────────────────────────────────────────────────────────────

const Terminal = (): ReactElement => {
  const [lines, setLines] = useState<LineType[]>([{ kind: 'welcome' }]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [renderTime] = useState(() => Math.floor(Math.random() * 8) + 5);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  // focus input when clicking anywhere in terminal body
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const pushLines = useCallback((...newLines: LineType[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const handleCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim();
      if (!cmd) return;

      // save to history
      setCmdHistory((prev) => [cmd, ...prev]);
      setHistoryIndex(-1);

      // echo the input
      pushLines({ kind: 'input', text: cmd });

      const lower = cmd.toLowerCase();

      if (lower === 'clear') {
        setLines([{ kind: 'welcome' }]);
        return;
      }

      if (lower === 'help') {
        HELP_TEXT.forEach((t) => pushLines({ kind: 'output', text: t }));
        return;
      }

      if (lower === 'whoami') {
        WHOAMI_TEXT.forEach((t) => pushLines({ kind: 'output', text: t }));
        return;
      }

      if (lower === 'skills' || lower === 'show tech stack') {
        pushLines({ kind: 'tech_stack' });
        return;
      }

      if (lower === 'projects') {
        PROJECTS_TEXT.forEach((t) => pushLines({ kind: 'output', text: t }));
        return;
      }

      if (lower === 'contact') {
        CONTACT_TEXT.forEach((t) => pushLines({ kind: 'output', text: t }));
        return;
      }

      if (lower === 'social') {
        SOCIAL_TEXT.forEach((t) => pushLines({ kind: 'output', text: t }));
        return;
      }

      if (lower === 'date') {
        pushLines({ kind: 'output', text: '' });
        pushLines({ kind: 'output', text: '  ' + new Date().toString() });
        pushLines({ kind: 'output', text: '' });
        return;
      }

      // unknown command
      pushLines({
        kind: 'error',
        text: `zsh: command not found: ${cmd}`,
      });
    },
    [pushLines],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleCommand(input);
        setInput('');
        return;
      }

      // history navigation
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const next = Math.min(historyIndex + 1, cmdHistory.length - 1);
        setHistoryIndex(next);
        setInput(cmdHistory[next] ?? '');
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = historyIndex - 1;
        if (next < 0) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(next);
          setInput(cmdHistory[next] ?? '');
        }
        return;
      }

      // Ctrl+L = clear
      if (e.key === 'l' && e.ctrlKey) {
        e.preventDefault();
        setLines([{ kind: 'welcome' }]);
        setInput('');
      }
    },
    [input, cmdHistory, historyIndex, handleCommand],
  );

  return (
    <>
      {/* Window header */}
      <div className="window-header">
        <WindowControls target="terminal" />
        <div className="flex items-center gap-2">
          <TerminalIcon size={13} className="opacity-60" />
          <h2 className="text-sm font-medium tracking-tight">
            zsh — amphitter-mac
          </h2>
        </div>
        <div className="window-header-spacer" />
      </div>

      {/* Terminal body */}
      <div
        className="techstack font-mono text-sm leading-relaxed cursor-text overflow-y-auto select-text"
        onClick={focusInput}
      >
        {lines.map((line, idx) => {
          /* ── Welcome banner ── */
          if (line.kind === 'welcome') {
            return (
              <div key={idx} className="mb-3">
                {WELCOME_LINES.map((l, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? 'text-white/90 font-semibold'
                        : 'opacity-50 text-xs'
                    }
                  >
                    {l}
                  </p>
                ))}
              </div>
            );
          }

          /* ── Input echo ── */
          if (line.kind === 'input') {
            return (
              <p key={idx} className="text-white/90">
                <span className="font-bold text-green-400 mr-1">{PROMPT}</span>
                {line.text}
              </p>
            );
          }

          /* ── Error ── */
          if (line.kind === 'error') {
            return (
              <p key={idx} className="text-red-400/90 pl-1">
                {line.text}
              </p>
            );
          }

          /* ── Divider ── */
          if (line.kind === 'divider') {
            return (
              <hr
                key={idx}
                className="border-white/10 my-2"
              />
            );
          }

          /* ── Tech stack ── */
          if (line.kind === 'tech_stack') {
            return (
              <div key={idx} className="mt-1 mb-2 space-y-1">
                {/* header */}
                <div className="flex text-xs opacity-50 mb-2 pl-1">
                  <p className="w-36">Category</p>
                  <p>Technologies</p>
                </div>

                {techStack.map(({ category, items }) => (
                  <div key={category} className="flex items-start pl-1">
                    <Check
                      size={13}
                      className="mr-2 mt-[3px] shrink-0 text-green-400"
                    />
                    <p className="w-36 text-blue-400 shrink-0">{category}</p>
                    <p className="text-white/80">{items.join(', ')}</p>
                  </div>
                ))}

                <div className="mt-3 text-xs flex items-center gap-2 text-green-400 pl-1">
                  <Check size={13} />
                  {techStack.length} of {techStack.length} stacks loaded
                  successfully (100%)
                </div>

                <div className="text-xs flex items-center gap-2 opacity-50 pl-1">
                  <Flag size={12} />
                  Render time: {renderTime}ms
                </div>
              </div>
            );
          }

          /* ── Normal output ── */
          return (
            <p
              key={idx}
              className={
                line.text === ''
                  ? 'h-3'
                  : 'text-white/80 whitespace-pre'
              }
            >
              {line.text}
            </p>
          );
        })}

        {/* ── Active input row ── */}
        <div className="flex items-center mt-1">
          <span className="font-bold text-green-400 shrink-0 mr-1">{PROMPT}</span>
          <div className="relative flex-1 ml-0">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent outline-none text-white/90 caret-transparent"
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            {/* blinking block cursor */}
            <span
              className="pointer-events-none absolute top-0 left-0 text-white/90"
              aria-hidden
            >
              {/* invisible text to position cursor */}
              <span className="invisible">{input}</span>
              <span className="inline-block w-[8px] h-[1.1em] bg-green-400 align-middle animate-[blink_1.1s_step-end_infinite] ml-[1px]" />
            </span>
          </div>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Tailwind keyframe for cursor blink — injected once */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;