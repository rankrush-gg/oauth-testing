import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiCard from "@/components/ApiCard";
import { ModeToggle } from "@/components/theme-toggle";

const urls = {
  chess: [
    {
      title: "Player Profile",
      url: "https://api.chess.com/pub/player/{{input_data}}",
    },
    {
      title: "Player Stats2",
      url: "https://api.chess.com/pub/player/{{input_data}}",
    },
    {
      title: "Player Stats3",
      url: "https://api.chess.com/pub/player/{{input_data}}",
    },
  ],
  instagram: [
    {
      title: "Account Metrics",
      url: "https://graph.facebook.com/{{input_data}}/insights?metric=impressions,reach,profile_views&period=lifetime",
    },
  ],
};

export default function Home() {
  return (
    <main className="flex-1 space-y-4 p-16 pt-12">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl font-semibold">Oauth Testing</h2>
        <ModeToggle />
      </div>
      <Tabs defaultValue="chess" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chess">chess.com</TabsTrigger>
          <TabsTrigger value="instagram">instagram</TabsTrigger>
        </TabsList>
        <TabsContent value="chess" className="space-y-4">
          {urls.chess.map((url) => (
            <ApiCard key={url.title} title={url.title} templateUrl={url.url} />
          ))}
        </TabsContent>
        <TabsContent value="instagram" className="space-y-4">
          {urls.instagram.map((url) => (
            <ApiCard key={url.title} title={url.title} templateUrl={url.url} />
          ))}
        </TabsContent>
      </Tabs>
    </main>
  );
}
