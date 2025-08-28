import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GlassCard({ children, className, onClick }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-card bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
