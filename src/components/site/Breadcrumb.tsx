import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({ title }: { title?: string }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:text-brand-red transition-colors flex items-center">
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          
          // Format text (capitalize, replace hyphens)
          let text = value.replace(/-/g, " ");
          text = text.charAt(0).toUpperCase() + text.slice(1);
          
          // Use provided title for the last item if provided
          if (isLast && title) {
            text = title;
          }

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {text}
                </span>
              ) : (
                <Link to={to} className="hover:text-brand-red transition-colors">
                  {text}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
