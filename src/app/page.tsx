"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job started!");
      },
    })
  );
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button
        disabled={invoke.isPending}
        className={cn("w-full", invoke.isPending && "loading")}
        variant="outline"
        onClick={() =>
          invoke.mutate({
            text: "Yogi",
          })
        }
      >
        Invoke Background Job
      </Button>
    </div>
  );
};

export default Page;

// 1:25:39
