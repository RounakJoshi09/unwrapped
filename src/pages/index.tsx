import { major } from '@/styles/fonts';
import { signIn, signOut, useSession } from 'next-auth/react';
import { MouseScrollAnim } from '@/components/MouseScrollAnim/MouseScrollAnim';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import LogoSvg from '@/assets/unwrapped-logo.svg';
import { useRouter } from 'next/router';
import { useTrackingConsent } from '@/components/TrackingConsent';
import { track } from '@/constants/events';
import { IndexPageSection } from '@/components/IndexPageSection';
import { TrustNotice } from '@/components/TrustNotice';

const PopDevsMasonry = dynamic(() =>
  import('@/components/PopDevsMasonry').then((m) => m.PopDevsMasonry)
);

/**
 * DISABLE_PUBLIC_ONLY_CONTRIBUTIONS
 * Because this isn't implemented yet
 */
const DISABLE_PUBLIC_ONLY_CONTRIBUTIONS = true;
const TRACKING_CONSENT_BANNER_DELAY = 2000;

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  const [showPrivate, setShowPrivate] = useState(true);
  const [showTrackingBanner, setShowTrackingBanner] = useState(false);
  const showTrackingConsent = useTrackingConsent();

  useEffect(() => {
    if (!showTrackingBanner) return;
    showTrackingConsent();
  }, [showTrackingBanner, showTrackingConsent]);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setShowTrackingBanner(true),
      TRACKING_CONSENT_BANNER_DELAY
    );
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="justify-center w-full flex flex-col gap-4 box-border">
      <LogoSvg
        style={{
          position: 'fixed',
          right: '-150px',
          bottom: '-200px',
          opacity: 0.3
        }}
        className="scale-[2] md:scale-[3]"
      />
      <IndexPageSection>
        <div className="flex flex-col gap-4 justify-center grow">
          <span
            className={`${major} text-5xl md:text-7xl lg:text-9xl`}
            style={{ position: 'relative', left: '-0.08em' }}
          >
            UNWRAPPED
          </span>
          <span
            className={`${major} text-8xl md:text-[7em] lg:text-[9em] text-purple-400`}
            style={{ position: 'relative', left: '-0.15em' }}
          >
            2023
          </span>
          <span className="text-lg mb-12">
            <a
              href="https://middlewarehq.com"
              className="text-purple-400 border-b-2 border-dotted border-b-purple-400"
            >
              By Middleware {'->'}
            </a>
          </span>
          <div className="w-fit flex flex-col gap-2">
            {status === 'authenticated' ? (
              <div className="w-fit flex flex-col gap-1">
                <button
                  className="bg-indigo-800 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    track('UNWRAP_YOUR_YEAR_CLICKED');
                    router.replace('/stats-unwrapped');
                  }}
                >
                  Unwrap your year, lets go! {'->'}
                </button>
                <button
                  className="bg-gray-400 bg-opacity-10 text-white px-4 py-1 rounded-md text-xs"
                  onClick={() => {
                    track('SIGN_OUT_CLICKED');
                    signOut({ redirect: false });
                  }}
                >
                  Sign out
                </button>
              </div>
            ) : showPrivate ? (
              <button
                className="bg-indigo-800 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  signIn('github', { callbackUrl: '/stats-unwrapped' });
                }}
              >
                Login with Github to start {'->'}
              </button>
            ) : (
              <div className="w-fit">
                <form
                  className="flex gap-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight text-center focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="GH Username"
                  />
                  <button
                    className="bg-indigo-800 text-white px-4 py-2 rounded-md shrink-0"
                    onClick={() => {
                      // console.log('public');
                    }}
                  >
                    {'->'}
                  </button>
                </form>
              </div>
            )}
            {!DISABLE_PUBLIC_ONLY_CONTRIBUTIONS && (
              <div>
                <div className="flex items-center">
                  <input
                    id="private-contribs"
                    type="checkbox"
                    checked={showPrivate}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => setShowPrivate(!showPrivate)}
                    disabled={DISABLE_PUBLIC_ONLY_CONTRIBUTIONS}
                  />
                  <label
                    htmlFor="private-contribs"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Include my private contributions?
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <MouseScrollAnim fontSize="1.4em" />
          <div className="text-xs text-gray-400 mt-4">
            How do I trust you with my data?{' '}
            <span className="text-purple-400">Scroll down...</span>
          </div>
        </div>
      </IndexPageSection>
      <IndexPageSection>
        <TrustNotice />
        <PopDevsMasonry />
      </IndexPageSection>
    </div>
  );
}
