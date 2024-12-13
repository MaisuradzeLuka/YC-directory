import { client } from "@/sanity/lib/client";
import { STARTUP_WIEVS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/writeClient";
import { after } from "next/server";

const Views = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_WIEVS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <div className="relative">
          <div className="absolute -left-4 top-1">
            <span className="flex size-[11px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex size-[11px] rounded-full bg-primary"></span>
            </span>
          </div>
        </div>
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};

export default Views;
