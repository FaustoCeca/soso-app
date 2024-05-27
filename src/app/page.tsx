import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { Service } from "@/types/types";
import Link from "next/link";

const LandingPage = async () => {
  const supabase = createClient();
  const { data: services } = await supabase.from('services').select();
  return (
    <>
      <div
        className="text-white bg-gray-800 shadow-lg flex items-center justify-center flex-col h-[90dvh]"
      >
        <h1
          className="text-7xl font-bold mb-4"
        >
          Welcome to Soso
        </h1>
        <p
          className="text-lg"
        >
          Revolutionizing the way you hear.
        </p>
        <div
          className="mt-8 space-x-4"
        >
          <Link
            href="/login"
          >
            <Button
              size={'lg'}
              >
              Sign In
            </Button>
          </Link>
          <Link
            href="/sign-up"
          >
            <Button
              size={'lg'}
              variant={'outline'}
              >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="text-white bg-gray-800 shadow-lg pb-12"
      >
        <div
          className="text-center items-center flex justify-center gap-4 mb-8"
        >
          <h2
            className="text-4xl font-bold mt-2"
            >
            What is Soso?
          </h2>
          <p
            className="text-lg mt-4 text-gray-400"
            >
            The most gigant platform for sounds lover. From ASMR to the most finest music, we have it all.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-16"
        >
          {
            services?.map((service: Service) => (
              <Card key={service.id}>
                <CardHeader>
                  <CardImage>
                    <img
                      src={service.image || 'https://loremflickr.com/320/240/sound'}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </CardImage>
                  <CardTitle>
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))
          }
          {/* <Card>
            <CardHeader>
              <CardTitle>
                Audiobook
              </CardTitle>
              <CardDescription>
                The most interesting audiobook in the world.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Radio
              </CardTitle>
              <CardDescription>
                The most interesting radio in the world.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Sound Effects
              </CardTitle>
              <CardDescription>
                The most interesting sound effects in the world.
              </CardDescription>
            </CardHeader>
          </Card> */}
        </div>
      </div>
    </>
  )
}

export default LandingPage;