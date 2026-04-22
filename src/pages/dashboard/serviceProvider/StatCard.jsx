import { Card, CardContent } from "@/components/ui/card";

export function StatCard({ title, value, growth, icon }) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-3">
        <div className="flex justify-between">
          <p className="text-muted-foreground">{title}</p>
          {icon}
        </div>
        <h2 className="text-3xl font-bold">{value}</h2>
        {growth && (
          <p className="text-sm text-green-600">{growth}</p>
        )}
      </CardContent>
    </Card>
  );
}
