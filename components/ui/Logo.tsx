import Image from "next/image";
import appIcon from "@/public/brand/green-logo.jpeg";

/**
 * Logo: the real VIA app-icon raster (which already sits on its own dark
 * rounded background) paired with the VIA wordmark set in the brand display
 * font. The "Virtual Interactive Academy" script is never recreated in CSS;
 * only the geometric "VIA" lettermark is typeset, per brand rules.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={appIcon}
        alt="VIA logo"
        width={36}
        height={36}
        className="h-9 w-9 rounded-[10px] ring-1 ring-line-strong"
        priority
      />
      <span className="font-display text-xl font-bold tracking-tight text-paper">
        VIA
      </span>
    </span>
  );
}
