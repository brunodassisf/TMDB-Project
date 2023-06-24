import { IMediaDetail } from "@/src/core/helper/interface";
import { getDetailById } from "@/src/core/serverFecth/getDetailById";
import MediaById from "@/src/module/MediaById";
import { redirect } from "next/navigation";

export default async function PopularDetailSreen({
  params,
}: {
  params: { id: number; slug: string };
}) {
  const detail: IMediaDetail = await getDetailById({
    type: params.slug,
    id: params.id,
  });

  if (detail) {
    return (
      <main>
        <MediaById detail={detail} />
      </main>
    );
  }
  redirect("/");
}
