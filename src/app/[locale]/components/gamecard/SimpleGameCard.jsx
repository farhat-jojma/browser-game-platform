"use client";
import DesktopGameCard from "./DesktopGameCard";
import MobileGameCard from "./MobileGameCard";

/**
 * Wrapper that shows:
 * - MobileGameCard on small screens
 * - DesktopGameCard on medium+ screens
 */
export default function SimpleGameCard({ game }) {
  return (
    <>
      {/* Mobile version */}
      <div className="block md:hidden">
        <MobileGameCard game={game} />
      </div>

      {/* Desktop version */}
      <div className="hidden md:block">
        <DesktopGameCard game={game} />
      </div>
    </>
  );
}
