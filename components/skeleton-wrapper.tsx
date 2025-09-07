import React, { ReactNode } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

type TSkeletonWrapperProps = {
  children: ReactNode;
  isLoading: boolean;
  fullWidth?: boolean;
};

const SkeletonWrapper = ({
  children,
  isLoading,
  fullWidth = false,
}: TSkeletonWrapperProps) => {
  if (isLoading) {
    return (
      <Skeleton className={cn(fullWidth && "w-full")}>
        <div className="opacity-0">{children}</div>
      </Skeleton>
    );
  }

  return children;
};

export default SkeletonWrapper;
