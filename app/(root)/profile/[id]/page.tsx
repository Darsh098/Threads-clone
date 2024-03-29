import ProfileHeader from "@/components/shared/ProfileHeader";
import ThreadsTab from "@/components/shared/ThreadsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(params.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {profileTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className="tab">
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="max-sm:hidden">{tab.label}</p>
                {tab.label === "Threads" && (
                  <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                    {userInfo?.threads?.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="threads" className="w-full text-light-1">
            <ThreadsTab
              currentUserId={user.id}
              accountId={userInfo.id}
              accountType="User"
            />
          </TabsContent>
          <TabsContent value="replies" className="w-full text-light-1">
            <article className="mt-9 flex flex-col gap-10">
              <section
                className={`flex w-full flex-col rounded-xl bg-dark-2 p-7`}
              >
                <h4 className="text-base-semibold  text-light-1 p-2">
                  <span className="mr-1 text-primary-500">Stay Tuned</span>{" "}
                  Enhancements Underway!
                </h4>
              </section>
            </article>
          </TabsContent>
          <TabsContent value="tagged" className="w-full text-light-1">
            <article className="mt-9 flex flex-col gap-10">
              <section
                className={`flex w-full flex-col rounded-xl bg-dark-2 p-7`}
              >
                <h4 className="text-base-semibold  text-light-1 p-2">
                  <span className="mr-1 text-primary-500">Stay Tuned</span>{" "}
                  Enhancements Underway!
                </h4>
              </section>
            </article>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Page;
