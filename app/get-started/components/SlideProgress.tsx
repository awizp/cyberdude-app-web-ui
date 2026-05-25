interface SlideProgressProps {
  current: number;
  total: number;
}

const SlideProgress = ({ current, total }: SlideProgressProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground font-display">
            Step {current + 1} of {total}
          </span>
          <span className="text-xs font-medium text-orange-500 font-display">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-orange-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideProgress;
