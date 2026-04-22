export function ActivityItem({ icon, title, subtitle, time }) {
  return (
    <div className="flex items-start justify-between bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-muted rounded-full">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <span className="text-xs text-muted-foreground">{time}</span>
    </div>
  );
}
