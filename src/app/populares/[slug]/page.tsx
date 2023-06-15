import Popular from "@/src/module/Popular";
import { redirect } from "next/navigation";

export default function PopularSreen({ params }: { params: { slug: string } }) {
  const VALID_PARAMS = ["tv", "movie"];
  const checkParamsRute = VALID_PARAMS.find((item) => item === params.slug);

  if (checkParamsRute) {
    return (
      <main className="container mx-auto px-4 md:px-0">
        <Popular />
      </main>
    );
  }

  redirect("/");
}
