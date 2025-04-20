
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tag } from "lucide-react";

interface CategoryCardProps {
  name: string;
  count: number;
  icon?: React.ReactNode;
}

export function CategoryCard({ name, count, icon }: CategoryCardProps) {
  return (
    <Link to={`/marketplace/category/${name.toLowerCase()}`}>
      <Card className="transition-all hover:shadow-md hover:scale-105">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="bg-trail-navy/10 p-4 rounded-full mb-4">
            {icon || <Tag className="h-8 w-8 text-trail-navy" />}
          </div>
          <h3 className="font-semibold text-center">{name}</h3>
          <p className="text-sm text-gray-500 text-center">{count} items</p>
        </CardContent>
      </Card>
    </Link>
  );
}
