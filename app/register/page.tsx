import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <div className="container mx-auto my-10">
      <div className="min-h-full flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6 md:p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold">
                    Create an account
                  </CardTitle>
                  <CardDescription>
                    Sign up to get started with our service
                  </CardDescription>
                </CardHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                </form>
                <div className="text-sm text-gray-600 text-center mt-4">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 hover:underline">
                    Sign In
                  </Link>
                </div>
              </div>

              <div className="flex-1 bg-gray-200 relative overflow-hidden">
                {/* <img
                src="/placeholder.svg?height=600&width=600"
                alt="Sign up illustration"
                className="w-full h-full object-cover"
              /> */}
                <Image
                  src="/register.jpg"
                  alt="Sign up "
                  fill
                  className="w-full h-full object-cover rounded-r-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
