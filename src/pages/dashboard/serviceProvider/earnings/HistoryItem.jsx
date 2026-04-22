import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

const HistoryItem = ({ name, service, date, amount, image }) => {
  return (
    <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 hover:shadow-sm transition">
      
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>
            {name
              ?.split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-slate-500 uppercase tracking-wide">
            {service} • {date}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold text-teal-600">
          +{amount}
        </p>
        <Badge className="bg-green-100 text-green-600 mt-1">
          Done
        </Badge>
      </div>
    </div>
  );
};

export default HistoryItem;
