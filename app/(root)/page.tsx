import SearchForm from "@/components/forms/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <main>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, Connect with Entrepreneurs
        </h1>

        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>
    </main>
  );
}
