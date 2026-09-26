'use client';

import { useEffect } from 'react';

// Normally unreachable: next.config.ts rewrites "/" straight to /site/index.html
// (the static 2D portfolio) at the server level, so the URL bar stays clean.
// This is only a safety net for environments where that rewrite doesn't apply.
export default function Home() {
  useEffect(() => {
    window.location.replace('/site/index.html');
  }, []);

  return null;
}
