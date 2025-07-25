import BlogCard from "@/components /BlogCard";
import React from "react";

const ArticlesGrid = () => {
  return (
    <div className="py-28">
      <div className="grid lg:grid-cols-3 gap-16">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
