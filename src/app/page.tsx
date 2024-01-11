import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiCard from "@/components/ApiCard";
import { ModeToggle } from "@/components/theme-toggle";

const urls = {
  chess: [
    {
      title: "Player Profile",
      url: "https://api.chess.com/pub/player/{{user_name}}",
      testData: ["muskyjobs", "sitontoilettime"],
    },
    {
      title: "Player Stats",
      url: "https://api.chess.com/pub/player/{{user_name}}/stats",
      testData: ["muskyjobs", "sitontoilettime"],
    },
  ],
  instagram: [
    {
      title: "Account Metrics",
      url: "https://graph.facebook.com/{{user_id}}/insights?metric=impressions,reach,profile_views",
      testData: ["17841406338772957", "17841406338772957"],
    },
    {
      title: "Media Metrics",
      url: "https://graph.facebook.com/{{media_id}}/insights?metric=engagement,impressions,reach",
      testData: ["17841406338772957", "17841406338772957"],
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
            <ApiCard
              key={url.title}
              title={url.title}
              templateUrl={url.url}
              testData={url.testData}
            />
          ))}
        </TabsContent>
        <TabsContent value="instagram" className="space-y-4">
          {urls.instagram.map((url) => (
            <ApiCard
              key={url.title}
              title={url.title}
              templateUrl={url.url}
              testData={url.testData}
            />
          ))}
        </TabsContent>
      </Tabs>
    </main>
  );
}
