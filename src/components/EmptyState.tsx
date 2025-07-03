
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState = ({ 
  title, 
  description, 
  icon: Icon,
  actionLabel,
  onAction 
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 px-4 text-center">
      <div className="bg-muted rounded-full p-4 mb-4">
        <Icon className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
