"use client";

import Link from "next/link";

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-medium">Engineering</span>
          <time className="text-sm text-muted-foreground">July 25, 2026</time>
          <span className="text-sm text-muted-foreground">15 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Introduction to Satellite Navigation Systems
        </h1>
        <p className="text-lg text-muted-foreground">
          Understanding how GPS, Beidou, and other GNSS systems work to provide precise positioning.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2>What is GNSS?</h2>
        <p>
          Global Navigation Satellite System (GNSS) is a generic term for satellite navigation
          systems that provide autonomous geo-spatial positioning with global coverage.
        </p>
        <p>
          Major GNSS systems include:
        </p>
        <ul>
          <li><strong>GPS</strong> (USA) - 31 satellites</li>
          <li><strong>Beidou</strong> (China) - 35 satellites</li>
          <li><strong>GLONASS</strong> (Russia) - 24 satellites</li>
          <li><strong>Galileo</strong> (EU) - 30 satellites</li>
        </ul>

        <h2>How Positioning Works</h2>
        <p>
          The basic principle is trilateration. A receiver measures its distance from multiple
          satellites by timing the signal travel time:
        </p>
        <ol>
          <li>Satellite broadcasts its position and timestamp</li>
          <li>Receiver measures signal travel time</li>
          <li>Distance = Speed of Light × Travel Time</li>
          <li>With 4+ satellites, receiver position can be calculated</li>
        </ol>

        <h2>RINEX Format</h2>
        <p>
          RINEX (Receiver Independent Exchange Format) is the standard format for storing
          GNSS observation and navigation data. It contains:
        </p>
        <ul>
          <li>Navigation data (ephemeris)</li>
          <li>Observation data (pseudorange, carrier phase)</li>
          <li>Meteorological data</li>
        </ul>

        <h2>Satellite Position Calculation</h2>
        <p>
          To calculate satellite positions from broadcast ephemeris:
        </p>
        <ol>
          <li>Calculate mean motion from semi-major axis</li>
          <li>Solve Kepler&apos;s equation for eccentric anomaly</li>
          <li>Calculate true anomaly</li>
          <li>Compute orbital plane coordinates</li>
          <li>Rotate to Earth-fixed coordinates (WGS-84)</li>
        </ol>

        <h2>Single Point Positioning</h2>
        <p>
          The simplest positioning method uses pseudorange measurements:
        </p>
        <ul>
          <li>Collect measurements from 4+ satellites</li>
          <li>Form observation equations</li>
          <li>Solve using least squares adjustment</li>
          <li>Typical accuracy: 2-5 meters</li>
        </ul>

        <h2>My Project: BDS Positioning</h2>
        <p>
          I implemented a complete Beidou satellite positioning system that:
        </p>
        <ul>
          <li>Parses RINEX navigation files</li>
          <li>Calculates satellite positions from ephemeris</li>
          <li>Performs single point positioning</li>
          <li>Supports continuous positioning and trajectory plotting</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Satellite navigation is a fascinating field that combines mathematics, physics,
          and computer science. Understanding the fundamentals opens up many possibilities
          in IoT, autonomous vehicles, and precision agriculture.
        </p>
      </div>
    </article>
  );
}
